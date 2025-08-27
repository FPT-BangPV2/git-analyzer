// src/components/BranchList.tsx
import { BranchItem } from './BranchItem';

export const BranchList = ({ branches }: { branches: any[] }) => (
  <ul>
    {branches.map((branch) => (
      <BranchItem key={branch.name} branch={branch} />
    ))}
  </ul>
);