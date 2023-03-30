import { AppShell, Box, Navbar, Header, Group, Container, Grid, SimpleGrid } from '@mantine/core';
// import { IconDiscount } from '@tabler/icons;
import BrandLogo from '../BrandLogo/BrandLogo';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import AppMain from '../AppMain/AppMain';

export function AppLayout() {
  return (
    <AppShell
      padding="md"
      // fixed
      // navbar={
      //   <Navbar width={{ base: 300 }} height={500} p="xs">
      //     {/* Navbar content */}
      //   </Navbar>
      // }
      header={
        <Header height={'4.7rem'} p="xs">
          <Group sx={{ height: '100%' }} position="apart" align="center">
            <BrandLogo />
            <ColorSchemeToggle />
          </Group>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          transition: '1s',
          paddingTop: '5rem',
        },
      })}
    >
      <AppMain />
    </AppShell>
  );
}
