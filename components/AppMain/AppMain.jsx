import { Container, SimpleGrid } from '@mantine/core';
import { IconDiscount } from '@tabler/icons';
import { useState } from 'react';

import InputCard from '../InputCard/InputCard';
import OutputCard from '../OutputCard/OutputCard';
import TotalCard from '../TotalCard/TotalCard';

export default function AppMain() {
  //inputs:-
  const [discount, setDiscount] = useState(null);
  const [discountLimit, setDiscountLimit] = useState(null);
  const [cashback, setCashback] = useState(null);
  const [cashbackLimit, setCashbackLimit] = useState(null);
  const [billAmt, setBillAmt] = useState(null);
  //outputs:-
  const [optAmt, setOptAmt] = useState(null);

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
        />
        <OutputCard />
        <InputCard title={'Cashback Discount'} label1="discount" limit={true} />
        <OutputCard />
        <TotalCard />
        <OutputCard />
      </SimpleGrid>
    </Container>
  );
}
