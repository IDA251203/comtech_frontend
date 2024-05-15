import React, { useEffect, useState } from 'react';
import TableForAllPages from '../tableforall'; 
import styles from '../all.module.css'

export default function Serverlar() {
  const [filteredRows, setFilteredRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => { 
      try {
        const response = await fetch('https://api.comtech-ombori.uz/comtech?type=serverlar');
        if (!response.ok) {
          throw new Error(`HTTP xato! Status: ${response.status}`);
        }
  
        const data = await response.json();
  
        if (data && Array.isArray(data.user)) {
          const Rows = data.user.filter(row => row.type === 'serverlar');
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
      <div className={styles.faol__titles}></div>
      <TableForAllPages filteredRows={filteredRows} />
    </>
  );
}
