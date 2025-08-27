import GitConfig from '../config/github.config';


export async getAllBranchesWithTicketInfo() {
    const branches = await this.octo.repos.listBranches({ owner, repo })
    return branches.data.map(branch => {
        const match = branch.name.match(/(SINO(?:FIX|FEAT)-\d+)/)
        return {
            name: branch.name,
            ticket: match?.[1] || null,
            isFeature: branch.name.startsWith('feature/'),
            isFix: branch.name.startsWith('fix/'),
        }
    })
}