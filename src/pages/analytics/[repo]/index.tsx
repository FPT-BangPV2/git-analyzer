import { GetServerSideProps } from 'next';
// import { BranchList } from '@/components/BranchList';
// import { ExportCSV } from '@/components/ExportCSV';
// import ContributorList from '@/components/ContributorList';
// import { useMemo, useState } from 'react';
// import BranchChart from '@/components/BranchChart';
import Link from 'next/link';
import { RepoDetailProps } from '@/types';
import githubService from '@/services/github.service';
import { useRepoContext } from '@/context/RepoContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

// const extractTicketId = (branchName: string): string | undefined => {
//     const match = branchName.match(/(SINO(?:FIX|FEAT)-\d+)/);
//     return match?.[1];
// };

export default function RepoDetailPage({ repo }: RepoDetailProps) {
    // const [search, setSearch] = useState('');


    // const enriched = useMemo(() => {
    //     return branches
    //         .map(branch => ({
    //             ...branch,
    //             ticketId: extractTicketId(branch.name),
    //         }))
    //         .filter(branch => branch.name.toLowerCase().includes(search.toLowerCase()));
    // }, [branches, search]);


    return (
        <div className="container mx-auto py-8 px-4 max-w-4xl">
            <h1 className="text-2xl font-bold mb-4">📁 {repo.name}</h1>
            <p className="text-gray-700 mb-2">{repo.description}</p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                <span>🌐 {repo.language}</span>
                <span>⭐ {repo.stargazers_count}</span>
                <span>🍴 {repo.forks_count}</span>
                <span>🐞 {repo.open_issues_count} issues</span>
                <span>🌿 Branch: {repo.default_branch}</span>
                <span>📅 Created: {new Date(repo.created_at!).toLocaleDateString()}</span>
                <span>🕒 Updated: {new Date(repo.updated_at!).toLocaleDateString()}</span>
                <span>{repo.private ? '🔒 Private' : '🌍 Public'}</span>
                {repo.html_url && (
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        🔗 GitHub
                    </a>
                )}
            </div>

            <h2 className="text-lg font-semibold mt-6 mb-2">👥 Contributors</h2>

            <ul className="list-none pl-0 text-sm text-gray-700">
                {repo.contributors.map((user) => (
                    <li key={user.login} className="mb-4">
                        <p className="cursor-pointer font-medium ">
                            👤 {user.login} — {user.contributions} commits to this repository
                        </p>
                    </li>
                ))}
            </ul>


            <h2 className="text-lg font-semibold mt-6 mb-2">🌿 Branches</h2>
            <ul className="list-disc pl-6 text-sm text-gray-700">
                {repo.branches.map((branch) => (
                    <li key={branch.name}>
                        <strong>{branch.name}</strong> — Last updated: {branch.updated_at ? new Date(branch.updated_at).toLocaleDateString() : 'N/A'} by {branch.author ?? 'Unknown'}
                    </li>
                ))}
            </ul>

            <Link href="/analytics" className="mt-6 inline-block text-blue-600 hover:underline">
                ← Back to overview
            </Link>
        </div>

    );
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    const repoName = context.params?.repo as string;
    const repoList = await githubService.listRepos({});

    const repoMeta = repoList?.find(r => r.name === repoName);
    console.log("repoMeta:::", repoMeta)

    if (!repoMeta) return { notFound: true };

    const repo = await githubService.listRepoDetails(repoMeta.owner, repoName);

    console.log("listRepoDetails:::", repo)

    if (!repo) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            repo,
        },
    };
};
