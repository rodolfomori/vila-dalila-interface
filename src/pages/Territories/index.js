import React from 'react';

import terr1 from '../../assets/Territorios/Território-1.jpg';
import terr2 from '../../assets/Territorios/Território-2.jpg';
import terr3 from '../../assets/Territorios/Território-3.jpg';
import terr4 from '../../assets/Territorios/Território-4.jpg';
import terr5 from '../../assets/Territorios/Território-5.jpg';
import terr6 from '../../assets/Territorios/Território-6.jpg';
import terr7 from '../../assets/Territorios/Território-7.jpg';
import terr8 from '../../assets/Territorios/Território-8.jpg';
import terr9 from '../../assets/Territorios/Território-9.jpg';
import terr10 from '../../assets/Territorios/Território-10.jpg';
import terr11 from '../../assets/Territorios/Território-11.jpg';
import terr12 from '../../assets/Territorios/Território-12.jpg';
import terr13 from '../../assets/Territorios/Território-13.jpg';
import terr14 from '../../assets/Territorios/Território-14.jpg';
import terr15 from '../../assets/Territorios/Território-15.jpg';
import terr16 from '../../assets/Territorios/Território-16.jpg';
import terr17 from '../../assets/Territorios/Território-17.jpg';
import terr18 from '../../assets/Territorios/Território-18.jpg';
import terr19 from '../../assets/Territorios/Território-19.jpg';
import terr20 from '../../assets/Territorios/Território-20.jpg';
import terr21 from '../../assets/Territorios/Território-21.jpg';
import terr22 from '../../assets/Territorios/Território-22.jpg';
import terr23 from '../../assets/Territorios/Território-23.jpg';
import terr24 from '../../assets/Territorios/Território-24.jpg';
import terr25 from '../../assets/Territorios/Território-25.jpg';
import terr26 from '../../assets/Territorios/Território-26.jpg';
import terr27 from '../../assets/Territorios/Território-27.jpg';
import terr28 from '../../assets/Territorios/Território-28.jpg';
import terr29 from '../../assets/Territorios/Território-29.jpg';
import terr30 from '../../assets/Territorios/Território-30.jpg';
import terr31 from '../../assets/Territorios/Território-31.jpg';
import terr32 from '../../assets/Territorios/Território-32.jpg';
import terr33 from '../../assets/Territorios/Território-33.jpg';
import terr34 from '../../assets/Territorios/Território-34.jpg';
import terr35 from '../../assets/Territorios/Território-35.jpg';
import terr36 from '../../assets/Territorios/Território-36.jpg';
import terr37 from '../../assets/Territorios/Território-37.jpg';
import terr38 from '../../assets/Territorios/Território-38.jpg';

import { Container, Text } from './styles';

export default function Territories() {
  const handleTarritories = [
    terr1,
    terr2,
    terr3,
    terr4,
    terr5,
    terr6,
    terr7,
    terr8,
    terr9,
    terr10,
    terr11,
    terr12,
    terr13,
    terr14,
    terr15,
    terr16,
    terr17,
    terr18,
    terr19,
    terr20,
    terr21,
    terr22,
    terr23,
    terr24,
    terr25,
    terr26,
    terr27,
    terr28,
    terr29,
    terr30,
    terr31,
    terr32,
    terr33,
    terr34,
    terr35,
    terr36,
    terr37,
    terr38,
  ];

  return (
    <>
      <Text>Territórios</Text>;
      <Container>
        {handleTarritories.map(terr => (
          <a style={{ display: 'table-cell' }} href={terr} target="_blank">
            <img src={terr} alt={terr} />
          </a>
        ))}
      </Container>
    </>
  );
}
