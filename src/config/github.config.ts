import { Octokit } from '@octokit/rest'
import dotenv from 'dotenv';
dotenv.config();


class GithubConfig {
  private static instance: GithubConfig;
  public octokit: Octokit;
  public repo: string;
  public owner: string;


  private constructor() {
    const token = process.env.GITHUB_TOKEN || "";
    const repo = process.env.GITHUB_REPO || "";
    const owner = process.env.GITHUB_OWNER || "";

    console.log(token, owner, repo)
    if (!token || !owner || !repo) {
      throw new Error('Missing GitHub environment variables')
    }


    this.octokit = new Octokit({ auth: token })
    this.owner = owner
    this.repo = repo
    // this.branch = branch


  }

  public static getInstance(): GithubConfig {
    if (!GithubConfig.instance) {
      GithubConfig.instance = new GithubConfig();
    }
    return GithubConfig.instance;
  }

}

export default GithubConfig;

