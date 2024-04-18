import styles from '../all.module.css'
import React from 'react';
import { Link } from 'react-router-dom';

const products = [
    { id: 1,rout:'kommutator', name: 'Kommutatorlar' },
    { id: 2,rout:'mashrutizatorlar', name: 'Marshrutizatorlar' },
    { id: 3,rout:'routerlar', name: 'Routerlar' },
    { id: 4,rout:'mediakonvertorlari', name: 'Media konvertorlari' },
    { id: 5,rout:'qabulnuqtalari', name: 'Qabul nuqtalari' },
    { id: 6,rout:'radiomostlar', name: 'Radiomostlar va antenna' },
    { id: 7,rout:'spfmodullari',name:'Spf modullari'},
    { id: 8,rout:'iptelefonlar',name:'Ip telefonlar va Voip Shlyuz'}
  ];

function Faol(){ 
    return(
        <div className={styles.faolCont}>
        {products.map((product) => (
            <Link to={`/products/faol/${encodeURIComponent(product.rout)}`} className={styles.link}>
              <div key={product.id} className={styles.faolCont__link}>
                {product.name}
              </div>
            </Link>
          
        ))}
        </div>
    )
}

export default Faol;