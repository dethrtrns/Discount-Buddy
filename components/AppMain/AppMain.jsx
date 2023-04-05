import { Container, SimpleGrid } from '@mantine/core';
import { IconDiscount } from '@tabler/icons';
import { useState } from 'react';

import InputCard from '../InputCard/InputCard';
import OutputCard from '../OutputCard/OutputCard';
import TotalCard from '../TotalCard/TotalCard';

export default function AppMain() {
  //inputs:-

  const [billAmt, setBillAmt] = useState(null);
  //outputs:-
  const [optAmt, setOptAmt] = useState(null);

  const calculateOptAmt = (disc, discLim) => {
    if (discLim) setOptAmt(((100 * discLim) / disc).toFixed(2));
    else setOptAmt(null);
    // console.log(optAmt);
    return;
  };

  return (
    <Container
    // sx={{
    //   display: 'flex',
    //   flexdirection: 'column',
    //   // width: '50%',
    // }}
    >
      <SimpleGrid
        // sx={{
        //   width: '60vw',
        // }}
        breakpoints={[
          { minWidth: 'sm', cols: 1 },
          // { minWidth: 'md', cols: 2 },
        ]}
        p="sm"
      >
        <InputCard
          title={'Direct Discount'}
          icon1={<IconDiscount size={18} />}
          label1="discount"
          limit={true}
          onChange={calculateOptAmt}
        />
        {/* <OutputCard />
        <InputCard title={'Cashback Discount'} label1="discount" limit={true} /> */}
        <OutputCard optAmt={optAmt} />
        <TotalCard />
        {/* <OutputCard /> */}
      </SimpleGrid>
    </Container>
  );
}
