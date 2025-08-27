import gitService from '@/services/github.service'

export const getRepoSummary = async () => {
    const repos = await gitService.listRepos()
    return repos
}

export const getBranchStats = async () => {
    const branches = await gitService.listBranches()
    return branches
}

export const getCommitStats = async (branch: string) => {
    const commits = await gitService.listCommits(branch)
    return commits
}

export const getContributors = async () => {
    const contributors = await gitService.listContributors()
    return contributors
}