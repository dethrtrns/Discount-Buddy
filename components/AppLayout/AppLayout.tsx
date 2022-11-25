import { AppShell, Box, Navbar, Header, Group, Container, Grid } from '@mantine/core';
import BrandLogo from '../BrandLogo/BrandLogo';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import InputCard from '../InputCard/InputCard';
import OutputCard from '../OutputCard/OutputCard';
import TotalCard from '../TotalCard/TotalCard';
// import { Welcome } from '../Welcome/Welcome';

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
      <Box
        sx={{
          display: 'flex',
          flexdirection: 'column',
          // width: '50%',
        }}
      >
        <Group
          sx={{
            width: '60vw',
          }}
          p="sm"
        >
          <InputCard />
          <InputCard />
          <OutputCard />
          <TotalCard />
        </Group>
        <Group
          sx={{
            // display: 'flex',
            flexdirection: 'row',
            width: '40vw',
          }}
          p="sm"
        >
          <OutputCard />
          <OutputCard />
        </Group>
      </Box>
    </AppShell>
  );
}
