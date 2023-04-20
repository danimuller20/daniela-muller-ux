import {
  Anchor,
  Avatar,
  BackgroundImage,
  Box,
  Flex,
  Image,
  Text,
  Title,
  rem,
  useMantineTheme,
} from '@mantine/core'

const Hero = () => {
  const theme = useMantineTheme()
  return (
    <Box h={{ xs: `calc(100vh - ${rem(83)})` }} mx="auto">
      <BackgroundImage src={'/images/steve-johnson.png'} radius="sm" h="100%">
        <Box
          bg="linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))"
          h="100%"
          px={{ base: rem(20), sm: rem(40) }}
        >
          <Title
            order={1}
            fz={{ base: rem(32), md: rem(48) }}
            color={theme.colors.gray[0]}
            maw={900}
            align="center"
            pt={{ base: rem(40), md: rem(80) }}
            m="auto"
          >
            Hello, I&apos;m Daniela!
          </Title>
          <Flex
            maw={rem(1200)}
            m="auto"
            py={{ base: 'xl', sm: rem(80) }}
            align="center"
            gap={{ base: 'sm', md: 'xl' }}
            direction={{ base: 'column', md: 'row' }}
          >
            <Avatar radius="50%" size={300} src="/images/me-trybe.png" alt="Daniela Muller" />
            <Text fz={{ base: 'lg', sm: 'xl' }} color={theme.colors.gray[0]} component="i" fw={600}>
              &quot;I work as a software developer at{' '}
              <Anchor color={theme.colors.green[4]} href="https://www.betrybe.com/" target="_blank">
                Trybe
              </Anchor>{' '}
              with a focus on front-end development, which I am passionate about. In my opinion,
              having knowledge in user experience is important for front-end developers since it
              plays a role in the development process. Understanding UX and its applications helps
              me to complete my daily tasks effectively and create products that are user-friendly
              for those who interact with them.&quot;
            </Text>
          </Flex>
        </Box>
      </BackgroundImage>
      <Text component="p" align="center" m={0} fz="xs">
        Photo by{' '}
        <Anchor
          href="https://unsplash.com/@steve_j?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          target="_blank"
        >
          Steve Johnson
        </Anchor>{' '}
        in{' '}
        <Anchor
          href="https://unsplash.com/pt-br/fotografias/zkNT5mikUuo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          target="_blank"
        >
          Unsplash
        </Anchor>
      </Text>
    </Box>
  )
}

export default Hero
