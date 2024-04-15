// Passiv/passivtarmoqdata.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Optikdistribyutorlar from '../Tables/passiv/optikdistribyutorlar';
import SfpModullar from '../Tables/passiv/sfpmodullar';
import Optiktolalikabel from '../Tables/passiv/optiktolalikabel';
import Yamoqsimlari from '../Tables/passiv/yamoqsimlari';
import Devorshkaflari from '../Tables/passiv/devorshkaflari';
import Muftalar from '../Tables/passiv/muftalar';

const products = [
  { id: 1, rout: 'optikdistribyutorlar', name: 'Optik distribyutorlar, kassetalar, qutilar' },
  { id: 2, rout: 'sfpmodullar', name: 'SFP modullari' },
  { id: 3, rout: 'optiktolalikabel', name: 'Optik tolali kabel' },
  { id: 4, rout: 'yamoqsimlari', name: 'Yamoq simlari' },
  { id: 5, rout: 'devorshkaflari', name: 'Devor va pol shkaflari' },
  { id: 6, rout: 'muftalar', name: 'Muftalar' },
];

const ProductDetailsPassiv = () => {
  const { productName2 } = useParams();

  const product = products.find((p) => p.rout === productName2);

  if (!product) {
    return <div>Mahsulot topilmadi</div>;
  }

  switch (product.rout) {
    case 'optikdistribyutorlar':
      return <Optikdistribyutorlar />;
    case 'sfpmodullar':
      return <SfpModullar />;
    case 'optiktolalikabel':
      return <Optiktolalikabel />;
    case 'yamoqsimlari':
      return <Yamoqsimlari />;
    case 'devorshkaflari':
      return <Devorshkaflari />;
    case 'muftalar':
      return <Muftalar />;
    default:
      return <div>Komponent topilmadi</div>;
  }
};

export default ProductDetailsPassiv;
