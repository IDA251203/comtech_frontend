import React from 'react';
import TableForAllPages from '../tableforall'; // TableForAllPages faylini joylashgan manzilni kiriting
import data from '../data.json';

const filteredRows = data.filter((row) => row.type === 'monoblok');

export default function Monobloklar() {
  return (
    <>
      <TableForAllPages filteredRows={filteredRows} />
    </>
  );
}
