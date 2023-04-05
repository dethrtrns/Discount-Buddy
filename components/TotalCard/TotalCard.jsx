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
import { IconDiscount2, IconDiscount, IconCurrency, IconCurrencyRupee } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  root: {},
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
  textIconStyle: {
    color: theme.colorScheme === 'dark' ? 'gold' : theme.colors.teal,
    marginBottom: -5,
    marginRight: -5,
    marginLeft: -5,
  },
  //   animationY: {
  //     transformStyle: 'preserve-3d',
  //     perspective: '300rem',
  //     animation: `${rotateY} 3s ease-in-out infinite`,
  //   },
  //   bounceText: {
  //     transformStyle: 'preserve-3d',
  //     perspective: '300rem',
  //     animation: `${bounce} 3s ease-in-out infinite`,
  //   },
}));

export default function TotalCard() {
  const { classes, cx } = useStyles();

  return (
    <Box>
      <Card shadow="md" p="lg" radius="md" withBorder>
        <Card.Section withBorder p="sm">
          <Text color="yellow" weight={500}>
            Total Amount
          </Text>
        </Card.Section>

        <Group position="left" mt="md" mb="xs">
          <NumberInput
            label="Bill Amount"
            placeholder="Enter total bill amount"
            // defaultValue={22}
            min={0}
            // max={100}
            icon={<IconCurrencyRupee size={18} />}
          />
        </Group>
      </Card>
    </Box>
  );
}
