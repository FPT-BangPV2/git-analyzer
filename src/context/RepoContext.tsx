// src/context/RepoContext.tsx
import { createContext, useContext } from 'react';
import { RepoSummary } from '@/types';

const RepoContext = createContext<{ repos: RepoSummary[] }>({ repos: [] });

export const RepoProvider = ({ repos, children }: { repos: RepoSummary[]; children: React.ReactNode }) => {
    return <RepoContext.Provider value={{ repos }}>{children}</RepoContext.Provider>;
};

export const useRepoContext = () => useContext(RepoContext);