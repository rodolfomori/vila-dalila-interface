import React from 'react';

import terr1 from '../../assets/Territories/Territorie1.jpg';
import terr2 from '../../assets/Territories/Territorie2.jpg';
import terr3 from '../../assets/Territories/Territorie3.jpg';
import terr4 from '../../assets/Territories/Territorie4.jpg';
import terr5 from '../../assets/Territories/Territorie5.jpg';
import terr6 from '../../assets/Territories/Territorie6.jpg';
import terr7 from '../../assets/Territories/Territorie7.jpg';
import terr8 from '../../assets/Territories/Territorie8.jpg';
import terr9 from '../../assets/Territories/Territorie9.jpg';
import terr10 from '../../assets/Territories/Territorie10.jpg';
import terr11 from '../../assets/Territories/Territorie11.jpg';
import terr12 from '../../assets/Territories/Territorie12.jpg';
import terr13 from '../../assets/Territories/Territorie13.jpg';
import terr14 from '../../assets/Territories/Territorie14.jpg';
import terr15 from '../../assets/Territories/Territorie15.jpg';
import terr16 from '../../assets/Territories/Territorie16.jpg';
import terr17 from '../../assets/Territories/Territorie17.jpg';
import terr18 from '../../assets/Territories/Territorie18.jpg';
import terr19 from '../../assets/Territories/Territorie19.jpg';
import terr20 from '../../assets/Territories/Territorie20.jpg';
import terr21 from '../../assets/Territories/Territorie21.jpg';
import terr22 from '../../assets/Territories/Territorie22.jpg';
import terr23 from '../../assets/Territories/Territorie23.jpg';
import terr24 from '../../assets/Territories/Territorie24.jpg';
import terr25 from '../../assets/Territories/Territorie25.jpg';
import terr26 from '../../assets/Territories/Territorie26.jpg';
import terr27 from '../../assets/Territories/Territorie27.jpg';
import terr28 from '../../assets/Territories/Territorie28.jpg';
import terr29 from '../../assets/Territories/Territorie29.jpg';
import terr30 from '../../assets/Territories/Territorie30.jpg';
import terr31 from '../../assets/Territories/Territorie31.jpg';
import terr32 from '../../assets/Territories/Territorie32.jpg';
import terr33 from '../../assets/Territories/Territorie33.jpg';
import terr34 from '../../assets/Territories/Territorie34.jpg';
import terr35 from '../../assets/Territories/Territorie35.jpg';
import terr36 from '../../assets/Territories/Territorie36.jpg';
import terr37 from '../../assets/Territories/Territorie37.jpg';
import terr38 from '../../assets/Territories/Territorie38.jpg';

import { Container, Text } from './styles';

import isMobile from '../../utils/isMobile';

export default function Territories() {
  const mobile = isMobile.any();
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
      <Text>Territórios</Text>
      <Container mobile={mobile}>
        {handleTarritories.map(terr => (
          <a
            style={{ display: 'table-cell', margin: '10px' }}
            href={terr}
            target="_blank"
          >
            <img src={terr} alt={terr} />
          </a>
        ))}
      </Container>
    </>
  );
}
