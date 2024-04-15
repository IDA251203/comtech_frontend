import React from 'react';
import TableForAllPages from '../../tableforall'; // TableForAllPages faylini joylashgan manzilni kiriting
import data from '../../data.json';
import styles from '../../all.module.css'

const filteredRows = data.filter((row) => row.type === 'mashrutizator');

export default function Marshrutizatorlar() {
  return (
    <>
    <div className={styles.faol__titles}>
      Marshrutizatorlar 
    </div>
      <TableForAllPages filteredRows={filteredRows} />
    </>
  );
}
