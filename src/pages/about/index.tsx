import {
  Anchor,
  BackgroundImage,
  Box,
  Flex,
  Grid,
  Image,
  Paper,
  Text,
  Title,
  rem,
  useMantineTheme,
} from '@mantine/core'

const About = () => {
  const theme = useMantineTheme()
  return (
    <Box component="section" py={rem(40)} px={{ base: rem(20), sm: rem(40) }}>
      <Box maw={rem(1000)} m="auto">
        <Title pb={rem(40)} order={1}>
          About me
        </Title>

        <Paper
          component={Flex}
          gap="xl"
          align="center"
          bg={theme.colors.gray[2]}
          p="md"
          radius="md"
          shadow="md"
          direction={{ base: 'column', md: 'row' }}
        >
          <Image radius="md" src="/images/me.png" width={230} alt="Daniela Muller" />
          <Text component="i" fz="lg">
            &quot;My name is Daniela, I live on the beautiful island of Florianópolis, located in
            Santa Catarina, Brazil. I am a front-end programmer and I really enjoy what I do. I am
            currently employed at{' '}
            <Anchor
              fw={600}
              color={theme.colors.green[9]}
              href="https://www.betrybe.com/"
              target="_blank"
            >
              Trybe
            </Anchor>{' '}
            , a programming school where I had the opportunity to learn programming. To further my
            professional qualifications in my field, I decided to take a Google UX design course,
            which I believe is important for my area, to deliver websites and projects with more
            quality for the user. I enjoy spending time with my family and my little dog named{' '}
            <Anchor
              fw={600}
              color={theme.colors.green[9]}
              href="https://www.instagram.com/bob_paivamuller/"
              target="_blank"
            >
              Bob
            </Anchor>{' '}
            , and I love to cook.&quot;
          </Text>
        </Paper>
        <Grid pt={rem(40)} justify="space-between" align="end">
          <Grid.Col md={3}>
            <Image radius="md" src="/images/bob.png" alt="Dog Bob" />
          </Grid.Col>
          <Grid.Col md={3}>
            <Image radius="md" src="/images/family.png" alt="Family" />
          </Grid.Col>
          <Grid.Col md={6}>
            <Image radius="md" src="/images/floripa.png" alt="Florianópolis" />
          </Grid.Col>
        </Grid>
      </Box>
    </Box>
  )
}

export default About
