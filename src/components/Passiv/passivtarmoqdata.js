// Passiv/passivtarmoqdata.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Optikdistribyutorlar from '../Tables/passiv/optikdistribyutorlar';
import Devorshkaflarii from '../Tables/passiv/devorshkaflari';
import Yamoqsimmlari from '../Tables/passiv/patchkord';
import Muftalarr from '../Tables/passiv/muftalar';
import Optiktola from '../Tables/passiv/optiktolalikabel';

const products1 = [
  { id: 1, rout: 'optikdistribyutorlar', name: 'Optik distribyutorlar, kassetalar, qutilar' },
  { id: 2, rout: 'optiktolalikabel', name: 'Optik tolali kabel' },
  { id: 3, rout: 'patchkord', name: 'Yamoq simlari' },
  { id: 4, rout: 'shkaflar', name: 'Devor va pol shkaflari' },
  { id: 5, rout: 'muftalar', name: 'Muftalar' },
];

const ProductDetailsPassiv = () => {
  const { productNames } = useParams();

  const product1 = products1.find((p) => p.rout === productNames);

  if (!product1) {
    return <div>Mahsulot topilmadi</div>;
  }

  switch (product1.rout) {
    case 'optikdistribyutorlar':
      return <Optikdistribyutorlar />;
    case 'patchkord':
      return <Yamoqsimmlari/>
    case 'shkaflar':
      return <Devorshkaflarii/>;
    case 'muftalar':
      return <Muftalarr/>;
    case 'optiktolalikabel':
      return <Optiktola/>
    default:
      return <div>Komponent topilmadi</div>;
  }
};

export default ProductDetailsPassiv;
