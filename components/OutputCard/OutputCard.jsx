import React, { useState, useEffect } from 'react';
import {
  Title,
  Text,
  createStyles,
  Group,
  UnstyledButton,
  keyframes,
  Card,
  Badge,
  Box,
  NumberInput
} from '@mantine/core';
import { IconCurrencyRupee } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  root: {
    color: theme.colors.teal[5],
  },
  titleBox: {
    fontSize: '2rem',
    fontWeight: 700,
    letterSpacing: -2,
    display: 'inline-flex',
    padding: '0.1rem 0.1rem',
    borderRadius: '0.3rem',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '1.5s',
    transformStyle: 'preserve-3d',
  },
  icon: {
    backgroundColor: 'gold',
    color: theme.colors.teal,
    borderRadius: '02rem',
    borderStyle: 'ridge dashed groove dashed',
    borderWidth: '0.2rem',
    borderColor: theme.colors.teal,
  },
}));

function OutputCard({ optAmt }) {
  const { classes, cx } = useStyles();
  const [optAmtStr, setOptAmtStr] = useState('');

  useEffect(() => {
    let timeoutId;
    let currentIndex = 0;
    console.log(optAmt);
    const optAmtString = optAmt?`${optAmt}$`:'Enter limit to see Optimum Amount!';
    console.log(optAmtString);

    const updateString = () => {
      setOptAmtStr(optAmtString.slice(0, currentIndex));
      currentIndex++;
      if (currentIndex > optAmtString.length) {
        clearInterval(timeoutId);
      }
    };

    timeoutId = setInterval(updateString, 100);

    return () => clearInterval(timeoutId);
  }, [optAmt]);

  return (
    <Box>
      <Card className={classes.root} color="green" shadow="md" p="sm" radius="md" withBorder>
        <Card.Section color="red" withBorder p="sm">
          <Group position="left" mt="md" mb="xs">
            <Text align="center" weight={700}>
              Optimum Bill amount for maximum savings:
            </Text>
          </Group>
        </Card.Section>
        <Card.Section>
          <Text size={20} color="teal" align="center" weight={900}>
            {optAmtStr}
          </Text>
        </Card.Section>
      </Card>
    </Box>
  );
}

export default OutputCard;
