// export interface RepoSummary {
//     name: string;
//     private: boolean;
//     created_at: string | null;
//     updated_at: string | null;
//     default_branch: string | null;
// }

export interface RepoSummary {
    name: string;
    owner: string; 
    description?: string;
    language?: string;
    stargazers_count?: number;
    forks_count?: number;
    open_issues_count?: number;
    updated_at?: string;
    private: boolean;
    html_url?: string;
    default_branch?: string;
    created_at?: string;
}

// export interface RepoCardProps {
//   name: string;
//   description?: string;
//   language?: string;
//   stargazers_count?: number;
//   forks_count?: number;
//   open_issues_count?: number;
//   updated_at?: string;
//   private: boolean;
//   html_url?: string;
// }


export interface RepoCardProps {
  name: string;
  owner: string; 
  description?: string;
  language?: string;
  stargazers_count?: number;
  forks_count?: number;
  open_issues_count?: number;
  updated_at?: string;
  created_at?: string;
  default_branch?: string;
  private: boolean;
  html_url?: string;
  contributor_count?: number; // nếu có
}



export interface RepoDetailProps {
  repo: {
    name: string;
    description?: string;
    language?: string;
    stargazers_count?: number;
    forks_count?: number;
    open_issues_count?: number;
    updated_at?: string;
    created_at?: string;
    default_branch?: string;
    private: boolean;
    html_url?: string;
    contributors: { login: string; contributions: number }[];
    branches: { name: string; updated_at: string | null; author: string | null }[];
  };
}
