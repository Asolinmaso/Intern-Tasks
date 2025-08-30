import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const ExportFooter = ({ dataToExport, onPrevPage, onNextPage }) => {
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    const now = new Date();
    const formatted = now.toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    });
    setLastUpdated(formatted);
  }, [dataToExport]);

  const handleExport = () => {
    if (!dataToExport || dataToExport.length === 0) {
      alert("No data available to export.");
      return;
    }

    const csv = dataToExport.map(row => Object.values(row).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'exported_data.csv';
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="d-flex justify-content-between align-items-center px-3 py-2 border-top">
      
      <div className="text-end">
        <small>Last updated on: {lastUpdated}</small>
        <Button variant="warning" className="ms-3" onClick={handleExport}>Export</Button>
      </div>
    </div>
  );
};

export default ExportFooter;
