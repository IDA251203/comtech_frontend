import React from 'react';
import { useParams } from 'react-router-dom';
import Kommutatorlar from '../Tables/faol/kommutator';
import Marshrutizatorlar from '../Tables/faol/mashrutizator';
import Routerlar from '../Tables/faol/Routerlar';
import Mediakonvertorlari from '../Tables/faol/mediakonvertorlar';
import Qabulnuqtalari from '../Tables/faol/qabulnuqtalari';
import Radiomostlar from '../Tables/faol/radiomostlar';

const products = [ 
  { id: 1, rout: 'kommutator', name: 'Kommutatorlar' },
  { id: 2, rout: 'mashrutizatorlar', name: 'Marshrutizatorlar' },
  { id: 3, rout: 'routerlar', name: 'Routerlar' },
  { id: 4, rout: 'mediakonvertorlari', name: 'Media konvertorlari' },
  { id: 5, rout: 'qabulnuqtalari', name: 'Qabul nuqtalari' },
  { id: 6, rout: 'radiomostlar', name: 'Radiomostlar' },
];

const ProductDetails = () => {
  const { productName } = useParams();

  const product = products.find((p) => encodeURIComponent(p.rout) === productName);

  if (!product) {
    return <div>Mahsulot topilmadi</div>;
  }
 
  // Tanlangan komponentni ishlatish
  switch (product.rout) {
    case 'kommutator':
      return <Kommutatorlar />;
    case 'mashrutizatorlar':
      return <Marshrutizatorlar />;
    case 'routerlar':
      return <Routerlar />;
    case 'mediakonvertorlari':
      return <Mediakonvertorlari />;
    case 'qabulnuqtalari':
      return <Qabulnuqtalari />;
    case 'radiomostlar':
      return <Radiomostlar />;
    default:
      return <div>Komponent topilmadi</div>;
  }
};

export default ProductDetails;
