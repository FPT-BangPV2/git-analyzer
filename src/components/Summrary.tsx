'use client'
// pages/tickets.tsx
import { useEffect, useState } from 'react';
// import { getRepoSummary } from '@/api/git.api';


interface RepoSummary {
    name: string
    default_branch?: string
    created_at?: string
    updated_at?: string
    private: boolean
}

export default function TicketsPage() {

    const [repos, setRepos] = useState<RepoSummary[]>([])
    const [filter, setFilter] = useState<string>('')


    useEffect(() => {
        const loadRepos = async () => {
            try {
                const response = await fetch('/api/github');

                const allRepos = await response.json();
                setRepos(allRepos);

            } catch (error) {
                console.error('Error loading repos:', error)

            }
        };
        loadRepos();
    }, []);

    const filteredRepos = repos?.filter(repo => repo.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <div style={{ padding: '2rem' }}>
            <h1>GitHub Repos Analytics</h1>

            <input
                type="text"
                placeholder="Search repo by name..."
                value={filter}
                onChange={e => setFilter(e.target.value)}
                style={{ padding: '0.5rem', marginBottom: '1rem', width: '100%' }}
            />



            <ul>
                {filteredRepos.map(repo => (
                    <li key={repo.name}>
                        <strong>{repo.name}</strong> — Branch: {repo.default_branch} — Updated: {new Date(repo.updated_at).toLocaleDateString()}

                    </li>
                ))}
            </ul>

        </div>
    );
}
