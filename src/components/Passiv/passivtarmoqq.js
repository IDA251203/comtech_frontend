import styles from '../all.module.css'
import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1,rout:'optikdistribyutorlar', name: 'Optik distribyutorlar, kassetalar, qutilar' },
  { id: 2,rout:'sfpmodullar', name: 'SFP modullari' },
  { id: 3,rout:'optiktolalikabel', name: 'Optik tolali kabel' },
  { id: 4,rout:'yamoqsimlari', name: 'Yamoq simlari' },
  { id: 5,rout:'devorshkaflari', name: 'Devor va pol shkaflari' },
  { id: 6,rout:'muftalar', name: 'Muftalar' },
];

function Passiv() {
  return (
    <div className={styles.faolCont}>
      {products.map((product) => (
        <Link key={product.id} to={`/products/${encodeURIComponent(product.rout)}`} className={styles.link}>
          <div className={styles.faolCont__link}>
            {product.name}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Passiv;