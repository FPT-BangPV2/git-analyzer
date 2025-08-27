// src/components/ContributorList.tsx
export default function ContributorList({ contributors }: { contributors: any[] }) {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-2">👥 Contributors</h2>
      <ul className="grid grid-cols-2 gap-2">
        {contributors.map(user => (
          <li key={user.login} className="text-sm text-gray-700">
            {user.login} — {user.contributions} commits
          </li>
        ))}
      </ul>
    </div>
  );
}