
import React, { useState, useEffect } from 'react';
import TableForAllPages from '../../tableforall';
import styles from '../../all.module.css';


export default function Mediakonvertorlari() {

  
  const [filteredRows, setFilteredRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/products?type=mediakonvertorlar');
        if (!response.ok) {
          throw new Error(`HTTP xato! Status: ${response.status}`);
        }
  
        const data = await response.json();
  
        if (data && Array.isArray(data.user)) {
          // Filter only the rows where type is "kommutator"
          const Rows = data.user.filter(row => row.type === 'mediakonvertorlar');
          setFilteredRows(Rows);
        } else {
          console.error('Xato: Ma\'lumotlar array emas yoki "user" propertiyasi mavjud emas');
        }
      } catch (error) {
        console.error('Ma\'lumotlarni olishda xato:', error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <>
    <div className={styles.faol__titles}>
    Mediakonvertorlari
    </div>
      <TableForAllPages filteredRows={filteredRows} />
    </>
  );
}
