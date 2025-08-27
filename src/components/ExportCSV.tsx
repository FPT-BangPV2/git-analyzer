// src/components/ExportCSV.tsx
export const ExportCSV = ({ data }: { data: any[] }) => {
  const handleExport = () => {
    const csv = data.map(row =>
      `${row.name},${row.ticketId ?? ''},${row.updated_at ?? ''},${row.author ?? ''}`
    ).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'branches.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return <button onClick={handleExport}>Export CSV</button>;
};