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
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-xyz`)
5. Create a pull request

## License

This project is licensed under the MIT License.
