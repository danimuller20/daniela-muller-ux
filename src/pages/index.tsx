import Head from 'next/head'
import { Box, Grid, Text, Title, rem, useMantineTheme } from '@mantine/core'
import DesignCard from '@components/Card'
import Hero from '@components/Hero'

export default function Home() {
  const theme = useMantineTheme()
  return (
    <>
      <Head>
        <title>Daniela Muller UX</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box component="section" bg={theme.colors.gray[0]}>
          <Hero />
          <Box px={{ base: rem(20), sm: rem(40) }} py={rem(40)}>
            <Box maw={rem(1440)} m="auto">
              <Title order={2} pb="xl">
                Portfólio
              </Title>
              <Grid grow gutter="lg">
                <Grid.Col lg={3}>
                  <DesignCard />
                </Grid.Col>
                <Grid.Col lg={3}>
                  <DesignCard />
                </Grid.Col>
                <Grid.Col lg={3}>
                  <DesignCard />
                </Grid.Col>
              </Grid>
            </Box>
          </Box>
        </Box>
      </main>
    </>
  )
}
