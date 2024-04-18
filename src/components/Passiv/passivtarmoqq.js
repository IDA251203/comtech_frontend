// Passiv/passivtarmoqq.js
import styles from '../all.module.css'
import React from 'react';
import { Link } from 'react-router-dom';

const products1 = [
  { id: 1, rout: 'optikdistribyutorlar', name: 'Optik distribyutorlar, kassetalar, qutilar' },
  { id: 2, rout: 'optiktolalikabel', name: 'Optik tolali kabel' },
  { id: 3, rout: 'patchkord', name: 'Yamoq simlari' },
  { id: 4, rout: 'shkaflar', name: 'Devor va pol shkaflari' },
  { id: 5, rout: 'muftalar', name: 'Muftalar' },
];

function Passiv() {
  return (
    <div className={styles.faolCont}>
      {products1.map((product) => (
        <Link key={product.id} to={`/products/passiv/${encodeURIComponent(product.rout)}`} className={styles.link}>
          <div className={styles.faolCont__link}>
            {product.name}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Passiv;
