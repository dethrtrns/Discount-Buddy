import { ActionIcon, Group, Tooltip, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Tooltip
      withArrow
      position="left"
      label={colorScheme === 'dark' ? 'switch to light mode' : 'switch to dark mode'}
    >
      <Group position="center" align="center">
        <ActionIcon
          onClick={() => toggleColorScheme()}
          size={35}
          // p={2}
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2],
            color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
            transition: '2s',
          })}
        >
          {colorScheme === 'dark' ? (
            <IconSun size={30} stroke={1.5} />
          ) : (
            <IconMoonStars size={30} stroke={1.5} />
          )}
        </ActionIcon>
      </Group>
    </Tooltip>
  );
}
