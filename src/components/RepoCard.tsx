// src/components/RepoCard.tsx
import { RepoCardProps } from '@/types';
import Link from 'next/link';

export const RepoCard = (({
    name,
    description,
    language = 'Unknown',
    stargazers_count = 0,
    forks_count = 0,
    open_issues_count = 0,
    updated_at,
    created_at,
    default_branch,
    private: isPrivate,
    html_url,
    contributor_count,

}: RepoCardProps) => {

    return (
        <div className=" bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition mb-8">
            <div className="flex items-center gap-4">
                <Link href={`/analytics/${name}`} className="text-blue-600 font-semibold text-lg hover:underline">
                    {name}
                </Link>
                <span className="text-xs text-gray-500">{isPrivate ? 'Private' : 'Public'}</span>
                <p className="line-clamp-1 pr-6">{description && <span className="text-sm text-gray-700 mt-1">{description}</span>}</p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-2">

                <span>🌐 {language}</span>
                <span>⭐ {stargazers_count}</span>
                <span>🍴 {forks_count}</span>
                <span>🐞 {open_issues_count} issues</span>


                {default_branch && <span>🌿 Branch: {default_branch}</span>}
                {created_at && <span>📅 Created: {new Date(created_at).toLocaleDateString()}</span>}
                {updated_at && <span>🕒 Updated: {new Date(updated_at).toLocaleDateString()}</span>}
                {contributor_count !== undefined && <span>👥 Contributors: {contributor_count}</span>}
                {html_url && (
                    <a href={html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        🔗 GitHub
                    </a>
                )}


            </div>
        </div >
    );
});