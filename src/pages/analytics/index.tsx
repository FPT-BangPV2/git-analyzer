import { GetServerSideProps } from 'next';
import { RepoCard } from '@/components/RepoCard';
import githubService from '@/services/github.service';
import { RepoProvider } from '@/context/RepoContext';
import { RepoCardProps } from '@/types';



export default function AnalyticsPage({ repos }: { repos: RepoCardProps[] }) {
  return (

    <RepoProvider repos={repos}>
      <div className="container mx-auto py-8 px-4 max-w-4xl">
        <h1 className="text-2xl text-center font-bold mb-6">
          📊 GitHub Repositories Overview</h1>

        {repos.map((repo) => (
          <RepoCard key={repo.name} {...repo} />
        ))}
      </div>
    </RepoProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const repos = await githubService.listRepos({});
  console.log("AnalyticsPage:::", repos)

  return {
    props: {
      repos: repos ?? [],
    },
  };
};