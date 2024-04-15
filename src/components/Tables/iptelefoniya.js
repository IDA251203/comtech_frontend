import React from 'react';
import TableForAllPages from '../tableforall'; // TableForAllPages faylini joylashgan manzilni kiriting
import data from '../data.json';
import styles from '../all.module.css'

const filteredRows = data.filter((row) => row.type === 'iptelefoniya');

export default function IPTelefoniya() {
  return (
    <>
    <div className={styles.faol__titles}>
    IP Telefoniya
    </div>
      <TableForAllPages filteredRows={filteredRows} />
    </>
  );
}
