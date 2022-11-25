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
  NumberInput,
} from '@mantine/core';
import { IconCurrencyRupee } from '@tabler/icons';
import React from 'react';

const useStyles = createStyles((theme) => ({
  root: {
    // backgroundColor: theme.colors.yellow[7],
    color: theme.colors.teal[5],
  },
  titleBox: {
    // backgroundColor: theme.colors.gray[9],
    fontSize: '2rem',
    fontWeight: 700,
    letterSpacing: -2,
    display: 'inline-flex',
    padding: '0.1rem 0.1rem',
    borderRadius: '0.3rem',
    justifyContent: 'center',
    alignItems: 'center',
    // borderStyle: 'solid',
    // borderWidth: '0.05rem 0.1rem 0.1rem 0.05rem',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '1.5s',
    transformStyle: 'preserve-3d',
  },
  //   title: {
  //     fontSize: 40,

  //     [theme.fn.smallerThan('md')]: {
  //       fontSize: 40,
  //     },
  //   },
  icon: {
    backgroundColor: 'gold',
    color: theme.colors.teal,
    // color: theme.colorScheme === 'dark' ? theme.colors.indigo : theme.colors.teal,
    // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.teal : theme.colors.indigo,
    borderRadius: '02rem',
    borderStyle: 'ridge dashed groove dashed',
    borderWidth: '0.2rem',
    borderColor: theme.colors.teal,
    // zIndex: 100,
  },
}));

function OutputCard() {
  const { classes, cx } = useStyles();
  //TODO:

  return (
    <Box>
      <Card className={classes.root} color="green" shadow="md" p="sm" radius="md" withBorder>
        <Card.Section color="red" withBorder p="sm">
          <Group position="left" mt="md" mb="xs">
            <Text align="center" weight={700}>
              Optimum Bill amount for maximum savings:
            </Text>
            {/* <Text>You</Text> */}
          </Group>
        </Card.Section>
        <Card.Section>
          <Text size={20} color="teal" align="center" weight={900}>
            200$
          </Text>
        </Card.Section>
      </Card>
    </Box>
  );
}

export default OutputCard;
