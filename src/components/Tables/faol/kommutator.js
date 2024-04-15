
import React, { useState, useEffect } from 'react';
import TableForAllPages from '../../tableforall';
import styles from '../../all.module.css';

export default function Kommutatorlar() {
  const [filteredRows, setFilteredRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/products?type=kommutator');
        if (!response.ok) {
          throw new Error(`HTTP xato! Status: ${response.status}`);
        }
  
        const data = await response.json();
  
        if (data && Array.isArray(data.user)) {
          // Filter only the rows where type is "kommutator"
          const kommutatorRows = data.user.filter(row => row.type === 'kommutator');
          setFilteredRows(kommutatorRows);
        } else {
          console.error('Xato: Ma\'lumotlar array emas yoki "user" propertiyasi mavjud emas');
        }
      } catch (error) {
        console.error('Ma\'lumotlarni olishda xato:', error);
      }
    };
  
    fetchData();
  }, []);

  const handleKetgantovarlarChange = async (e, userId) => {
    const newKetgantovarlar = e.target.value;
    await updateTovarlarOnBackend(userId, { ketgantovarlar: newKetgantovarlar });
  };

  const handleQayergaChange = async (e, userId) => {
    // Add the logic for handling changes in the "Qayerga sotildi" field if needed
  };

  const updateTovarlarOnBackend = async (userId, updatedTovarlar) => {
    try {
      const response = await fetch(`http://localhost:4000/products/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTovarlar),
      });

      if (!response.ok) {
        throw new Error(`HTTP xato! Status: ${response.status}`);
      }

      const updatedUserData = await response.json();
      if (Array.isArray(updatedUserData.user)) {
        setFilteredRows(updatedUserData.user);
      } else {
        console.error('Xato: "user" propertiyasi mavjud emas');
      }
    } catch (error) {
      console.error('O\'zgartirilgan ma\'lumotlarni yuborishda xato:', error);
    }
  };

  return (
    <>
      <div className={styles.faol__titles}>Kommutator</div>
      <TableForAllPages
        filteredRows={filteredRows}
        handleKetgantovarlarChange={handleKetgantovarlarChange}
        handleQayergaChange={handleQayergaChange}
      />
    </>
  );
}
// import React from 'react';
// import TableForAllPages from '../../tableforall';
// import data from '../../data.json';
// import styles from '../../all.module.css'

// const filteredRows = data.filter((row) => row.type === 'kommutator');

// export default function Kommutatorlar() {
//   return (
//     <>
//     <div className={styles.faol__titles}>
//     Kommutatorlar 
//     </div>
//       <TableForAllPages filteredRows={filteredRows} />
//     </>
//   );
// }

