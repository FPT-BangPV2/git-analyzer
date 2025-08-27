# GitHub Analytics Dashboard

## Overview

GitHub Analytics Dashboard is a modern web application built with Next.js 15 that provides powerful insights into GitHub repositories. It allows users to filter repositories, analyze branches, track contributor activity, and manage stale branches efficiently.

## Features

- [ ] Get list all repos by account
- [ ] Filter repositories by name, owner, and creation date
- [ ] Analyze branches by owner, activity status, and last commit date
- [ ] Track contributor activity and commit history
- [ ] Identify and delete closed or unused branches
- [ ] Interactive dashboards and visualizations

## Tech Stack

- **Frontend**: Next.js 15, React, Tailwind CSS
- **Data**: GitHub REST API Github

## Setup `.env`

Update `.env` with your GitHub API token and default settings:

```shell
GITHUB_ENDPOINT="https://api.github.com/repos"
GITHUB_TOKEN="d"
GITHUB_REPO=""
GITHUB_OWNER=""

```

## Installation

```bash
# Clone the repository
git clone https://github.com/your-org/github-repo.git

# Navigate to the project directory
cd github-repo

# Install dependencies
npm install
```

## Usage

```bash
# Start the development server
npm run dev

# Open your browser and visit
http://localhost:3000
```

## Folder Structure

```
├── components        # Reusable UI components
├── pages             # Next.js pages and routes
├── public            # Static assets
├── styles            # Global styles
├── utils             # Helper functions and API handlers
├── config            # Configuration files
├── README.md         # Project documentation
```

## Contribution Guidelines

We welcome contributions from the community! To contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-xyz`)
3. Commit your changes (`git commit -am 'feat: add new feature'`)
4. Push to the branch (`git push origin feature-xyz`)
5. Create a pull request

## Commit message structure

The commit message should be structured as follows:

```
<type>[optional scope]: [optional gitmoji] <description>

[optional body]

[optional footer(s)]
```

Example:

```

feat(auth): ✨ <description>

[optional body]

[optional footer(s)]
```
#### Good commits

✅ _`build: add shadcn package`_

✅ _`feat: ✨ add login button`_

✅ _`fix(auth): 🐛 token validation`_

✅ commit message with ! to draw attention to **breaking change**:

✅ _`feat!: send an email to the customer when a product is shipped`_

✅ _`feat(api)!: send an email to the customer when a product is shipped`_

✅ commit message with **description** and **breaking change footer** (BREAKING CHANGE)

```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

✅ message with **multi-paragraph body** and **multiple footers**

```
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Reviewed-by: Z
Refs: #123
```

#### Bad commits

❌ _`Add LOgin BUTTON`_

❌ _`add login button`_

❌ _`commit message that is too large to fit in one commit, this means that the commit has too many changes to describe and you should split it into multiple commits or you require to use a multi-paragraph body and/or footers.`_

## License

This project is licensed under the MIT License.
