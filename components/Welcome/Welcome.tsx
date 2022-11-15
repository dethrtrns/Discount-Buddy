import { Title, Text, Anchor, createStyles } from '@mantine/core';
// import useStyles from './Welcome.styles';

const useStyles = createStyles((theme) => ({
  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontSize: 40,
    fontWeight: 900,
    letterSpacing: -2,

    [theme.fn.smallerThan('md')]: {
      fontSize: 40,
    },
  },
}));

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center">
        {/* Welcome to{' '} */}
        <Text inherit variant="gradient" gradient={{ from: 'red', to: 'cyan', deg: 120 }} component="span">
          Discount Calculator!
        </Text>
      </Title>
    </>
  );
}
