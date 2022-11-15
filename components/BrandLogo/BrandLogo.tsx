import { Title, Text, createStyles, Group, UnstyledButton, keyframes } from '@mantine/core';
import {
  IconCurrency,
  IconCurrencyBitcoin,
  IconCurrencyCent,
  IconCurrencyDogecoin,
  IconCurrencyDollar,
  IconCurrencyRupee,
  IconCurrencyYen,
  IconDiscount2,
} from '@tabler/icons';

const rotateY = keyframes({
  '0%': { transform: 'rotateY(0deg)' },
  '75%': { transform: 'rotateY(180deg)' },
  '100%': { transform: 'rotateY(360deg)' },
});

const bounce = keyframes({
  'from, 20%, 53%, 80%, to': { transform: 'translate3d(0, 0, 0)' },
  '40%, 43%': { transform: 'translate3d(0, -30px, 0)' },
  '70%': { transform: 'translate3d(0, -15px, 0)' },
  '90%': { transform: 'translate3d(0, -4px, 0)' },
});

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
  animationY: {
    transformStyle: 'preserve-3d',
    perspective: '300rem',
    animation: `${rotateY} 3s ease-in-out infinite`,
  },
  bounceText: {
    transformStyle: 'preserve-3d',
    perspective: '300rem',
    animation: `${bounce} 3s ease-in-out infinite`,
  },
}));

export default function BrandLogo() {
  const { classes, cx } = useStyles();

  return (
    <>
      {/* <Group className={classes.root}> */}
      <UnstyledButton onClick={() => console.log('hey')}>
        <Group spacing={0} className={cx(classes.titleBox, classes.bounceText)}>
          <Group className={classes.animationY} mr={0}>
            <IconDiscount2
              className={cx(classes.icon, classes.bounceText)}
              // color="darkgreen"
              size={'2.5rem'}
              strokeWidth={2}
            />
          </Group>
          <Text
            pr="0.1rem"
            pl={0}
            pb={2}
            ml={0}
            inherit
            variant="gradient"
            gradient={{ from: 'green', to: 'indigo', deg: 45 }}
          >
            <IconCurrencyDogecoin
              // color="goldenrod"
              strokeWidth={1.5}
              size={'2rem'}
              className={cx(classes.textIconStyle, classes.bounceText)}
            />
            i
            <IconCurrencyDollar
              // color="goldenrod"
              strokeWidth={3}
              size={'2rem'}
              className={cx(classes.textIconStyle, classes.animationY)}
            />
            <IconCurrencyCent
              // color="goldenrod"
              strokeWidth={3}
              size={'2rem'}
              className={cx(classes.textIconStyle, classes.bounceText)}
            />
            {/* <IconCurrency
              color="goldenrod"
              strokeWidth={3}
              size={'2rem'}
              className={classes.animationY}
            /> */}
            oun
            <IconCurrencyRupee
              color="#FF9933"
              strokeWidth={1.5}
              size={'2rem'}
              className={cx(classes.textIconStyle, classes.animationY)}
            />{' '}
            <IconCurrencyBitcoin
              // color="goldenrod"
              strokeWidth={3}
              size={'2rem'}
              className={cx(classes.textIconStyle, classes.bounceText)}
            />
            udd
            <IconCurrencyYen
              // color="goldenrod"
              strokeWidth={3}
              size={'2rem'}
              className={cx(classes.textIconStyle, classes.animationY)}
            />
            !
          </Text>
        </Group>
      </UnstyledButton>
      {/* </Group> */}
    </>
  );
}
