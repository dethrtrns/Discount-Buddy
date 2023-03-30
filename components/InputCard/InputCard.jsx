import {
  Title,
  Text,
  createStyles,
  Group,
  Button,
  UnstyledButton,
  keyframes,
  Card,
  Badge,
  Box,
  NumberInput,
} from '@mantine/core';
import { IconDiscount2, IconDiscount, IconCurrency } from '@tabler/icons';

// const rotateY = keyframes({
//   '0%': { transform: 'rotateY(0deg)' },
//   '75%': { transform: 'rotateY(180deg)' },
//   '100%': { transform: 'rotateY(360deg)' },
// });

// const bounce = keyframes({
//   'from, 20%, 53%, 80%, to': { transform: 'translate3d(0, 0, 0)' },
//   '40%, 43%': { transform: 'translate3d(0, -30px, 0)' },
//   '70%': { transform: 'translate3d(0, -15px, 0)' },
//   '90%': { transform: 'translate3d(0, -4px, 0)' },
// });

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

export default function InputCard({
  title = 'pass a title prop idiot!',
  label1,
  placeholder1,
  icon1,
  icon2,
  label2,
  placeholder2,
  limit,
}) {
  //{ title, I1Label }
  const { classes, cx } = useStyles();
  // const title = 'Direct Discount';
  // const I1Label = 'discount';

  return (
    <Box>
      <Card shadow="md" p="lg" radius="md" withBorder>
        <Card.Section withBorder p="sm">
          <Text color="yellow" weight={500}>
            {title}
          </Text>
        </Card.Section>

        <Group position="left" mt="md" mb="xs">
          <NumberInput
            label={label1}
            placeholder="Enter discount in %"
            // defaultValue={22}
            min={0}
            max={100}
            icon={icon1}
          />
          {limit && (
            <NumberInput
              label="limit"
              placeholder="Enter max/upto limit here if applicable."
              // defaultValue={22}
              min={0}
              // max={100}
              icon={<IconCurrency size={18} />}
            />
          )}
          {/* <Badge color="pink" variant="light">
            On Sale
          </Badge> */}
        </Group>
      </Card>
    </Box>
  );
}
