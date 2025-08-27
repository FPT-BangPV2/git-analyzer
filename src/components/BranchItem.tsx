// src/components/BranchItem.tsx
export const BranchItem = ({ branch }: { branch: any }) => (
  <li>
    <strong>{branch.name}</strong>
    {branch.ticketId && <> — Ticket: {branch.ticketId}</>}
    {branch.updated_at && <> — Updated: {new Date(branch.updated_at).toLocaleDateString()}</>}
    {branch.author && <> — By: {branch.author}</>}
  </li>
);