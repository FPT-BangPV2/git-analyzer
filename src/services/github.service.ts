import { RepoSummary } from '@/types';
import GithubConfig from '../config/github.config';



class GithubService {
    private readonly github = GithubConfig.getInstance()
    private readonly octokit = this.github.octokit
    private readonly owner = this.github.owner
    private readonly repo = this.github.repo

    async listRepos({
        keyword = '',
        sortBy = 'updated_at',
        order = 'desc',
    }: {
        keyword?: string;
        sortBy?: keyof RepoSummary;
        order?: 'asc' | 'desc';
    }) {
        try {
            const { data } = await this.octokit.rest.repos.listForAuthenticatedUser({
                visibility: 'all',
                affiliation: 'owner,collaborator,organization_member',
            });
            console.log("listRepos::", data);


            let repos: RepoSummary[] = data.map(repo => ({
                name: repo.name,
                owner: repo.owner.login,
                description: repo.description ?? '',
                language: repo.language ?? 'Unknown',
                stargazers_count: repo.stargazers_count ?? 0,
                forks_count: repo.forks_count ?? 0,
                open_issues_count: repo.open_issues_count ?? 0,
                updated_at: repo.updated_at ?? null,
                created_at: repo.created_at ?? null,
                private: repo.private ?? false,
                html_url: repo.html_url ?? '',
                default_branch: repo.default_branch ?? '',

            }));


            // Filter by keyword
            if (keyword) {
                repos = repos.filter(repo => repo.name.includes(keyword));
            }

            // Sort by filter
            repos.sort((a, b) => {
                const valA = a[sortBy] ?? '';
                const valB = b[sortBy] ?? '';
                return order === 'asc'
                    ? String(valA).localeCompare(String(valB))
                    : String(valB).localeCompare(String(valA));
            });

            return repos;
        } catch (error: any) {
            console.error('Error fetching repos:', error.message);
        }
    }

    async listBranches(repo: string) {

        try {
            const { data } = await this.octokit.repos.listBranches({
                owner: this.owner,
                repo,
            });
            console.log("listBranches::", data)

            const branches = await Promise.all(
                data.map(async branch => {
                    try {
                        const commit = await this.octokit.rest.git.getCommit({
                            owner: this.owner,
                            repo,
                            commit_sha: branch.commit.sha,
                        });

                        return {
                            name: branch.name,
                            updated_at: commit.data.committer.date,
                            author: commit.data.committer.name,
                        };
                    } catch (err) {
                        console.warn(`Failed to get commit for branch ${branch.name}`);
                        return {
                            name: branch.name,
                            updated_at: null,
                            author: null,
                        };
                    }
                })
            );

            return branches;

        } catch (error: any) {
            console.error('Error fetching branches:', error.message);
            return [];
        }
    }

    async listCommits(branch: string) {
        const { data } = await this.octokit.repos.listCommits({
            owner: this.owner,
            repo: this.repo,
            sha: branch,
        })
        return data.map(commit => ({
            sha: commit.sha,
            author: commit.commit.author?.name ?? null,
            date: commit.commit.author?.date ?? null,
            message: commit.commit.message ?? null,
        }))
    }

    async listContributors() {
        try {
            const { data } = await this.octokit.repos.listContributors({
                owner: this.owner,
                repo: this.repo,
            })
            return data.map(user => ({
                login: user.login,
                contributions: user.contributions,
            }))

        } catch (error: any) {
            console.error('Error fetching contributors:', error.message);
            return [];
        }
    }

    async listRepoDetails(owner: string, repoName: string) {
        try {
            const [repoRes, contributorsRes, branchesRes] = await Promise.all([
                this.octokit.repos.get({
                    owner,
                    repo: repoName,
                }),
                this.octokit.repos.listContributors({
                    owner,
                    repo: repoName,
                }),
                this.octokit.repos.listBranches({
                    owner,
                    repo: repoName,
                }),
            ]);

            const repo = repoRes.data;
            const contributors = contributorsRes.data.map(user => ({
                login: user.login,
                contributions: user.contributions,
            }));

            const branches = await Promise.all(
                branchesRes.data.map(async branch => {
                    try {
                        const commit = await this.octokit.git.getCommit({
                            owner: owner,
                            repo: repoName,
                            commit_sha: branch.commit.sha,
                        });

                        return {
                            name: branch.name,
                            updated_at: commit.data.committer.date,
                            author: commit.data.committer.name,
                        };
                    } catch {
                        return {
                            name: branch.name,
                            updated_at: null,
                            author: null,
                        };
                    }
                })
            );

            return {
                name: repo.name,
                description: repo.description,
                language: repo.language,
                stargazers_count: repo.stargazers_count,
                forks_count: repo.forks_count,
                open_issues_count: repo.open_issues_count,
                updated_at: repo.updated_at,
                created_at: repo.created_at,
                default_branch: repo.default_branch,
                private: repo.private,
                html_url: repo.html_url,
                contributors,
                branches,
            };
        } catch (error: any) {
            console.error(`Error fetching details for repo ${repoName}:`, error.message);
            return null;
        }
    }
}

const githubService = new GithubService();

export default githubService;

