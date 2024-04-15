import React from 'react';
import TableForAllPages from '../tableforall'; // TableForAllPages faylini joylashgan manzilni kiriting
import data from '../data.json';
import styles from '../all.module.css'

const filteredRows = data.filter((row) => row.type === 'stolkompyuterlari');

export default function Stolkompyuterlari() {
  return (
    <>
    <div className={styles.faol__titles}>
    Stol kompyuterlari
    </div>
      <TableForAllPages filteredRows={filteredRows} />
    </>
  );
}
