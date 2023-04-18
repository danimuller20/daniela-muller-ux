import { Anchor, BackgroundImage, Box, Text, Title, rem, useMantineTheme } from '@mantine/core'

const Hero = () => {
  const theme = useMantineTheme()
  return (
    <Box h={{ xs: `calc(100vh - ${rem(83)})` }} mx="auto">
      <BackgroundImage src={'/images/steve-johnson.png'} radius="sm" h="100%">
        <Box
          bg="linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))"
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
            Welcome to my UX design portfolio! Here, you&apos;ll find examples of projects I&apos;ve
            worked on.
          </Title>

          <Box maw={860} m="auto" py={{ base: 'xs', sm: rem(40) }}>
            <Text fz={{ base: 'lg', sm: 'xl' }} color={theme.colors.gray[0]} component="p" fw={600}>
              Each project is presented in a card on the main page, and you can click on each one to
              learn more about how it was built and the strategy behind the design.
            </Text>
            <Text fz={{ base: 'lg', sm: 'xl' }} color={theme.colors.gray[0]} component="p" fw={600}>
              If you want to learn more about my skills and experience in UX design, check out the
              projects on this page. Feel free to contact me if you have any questions or need help
              with your own design project.
            </Text>
            <Text fz={{ base: 'lg', sm: 'xl' }} color={theme.colors.gray[0]} component="p" fw={600}>
              Thanks for visiting my portfolio and I hope you like what you see!
            </Text>
          </Box>
        </Box>
      </BackgroundImage>
      <Text component="p" align="center" m={0}>
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
