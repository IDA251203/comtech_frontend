import React from 'react';
import TableForAllPages from '../../tableforall'; // TableForAllPages faylini joylashgan manzilni kiriting
import data from '../../data.json';
import styles from '../../all.module.css'

const filteredRows = data.filter((row) => row.type === 'radiomostlar');

export default function Radiomostlar() {
  return (
    <>
    <div className={styles.faol__titles}>
    Radiomostlar
    </div>
      <TableForAllPages filteredRows={filteredRows} />
    </>
  );
}
