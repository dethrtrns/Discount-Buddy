import { AppShell, Navbar, Header, Group, Container, Grid } from '@mantine/core';
import BrandLogo from '../BrandLogo/BrandLogo';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import InputCard from '../InputCard/InputCard';
import ShaCard from '../ShaCard/ShaCard';
import { Welcome } from '../Welcome/Welcome';

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
      <>
        <InputCard />
      </>
      <ShaCard />
    </AppShell>
  );
}
