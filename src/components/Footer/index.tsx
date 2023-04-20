import { Anchor, Box, Flex, Image, Text, Title, rem, useMantineTheme } from '@mantine/core'
import { SITE_LINKS, SOCIAL_LINKS } from '@utils/constants'

const Footer = () => {
  const theme = useMantineTheme()
  return (
    <Box
      component="footer"
      bg={theme.colors.green[9]}
      py={rem(40)}
      px={{ base: rem(20), sm: rem(40) }}
    >
      <Flex
        maw={rem(1440)}
        m="auto"
        justify={{ base: 'center', sm: 'space-between' }}
        align="center"
        direction={{ base: 'column', sm: 'row' }}
        gap="xl"
      >
        <Flex direction={{ base: 'column', md: 'row' }} gap="md" align="center">
          <Image src="/daniela-muller-bw.png" alt="Daniela Muller logo" />
          {SITE_LINKS.map(item => (
            <Anchor key={`footer-${item.label}`} fz="lg" c={theme.colors.grape[0]} href={item.href}>
              {item.label}
            </Anchor>
          ))}
        </Flex>
        <Flex direction={{ base: 'column', md: 'row' }} gap="md" align="center">
          <Title order={3} c={theme.colors.gray[0]}>
            Social media
          </Title>
          {SOCIAL_LINKS.map(social => {
            const Icon = social.icon
            return (
              <Anchor
                key={social.label}
                fz="lg"
                c={theme.colors.gray[0]}
                href={social.href ? social.href : `mailto:${social.email}`}
                target="_blank"
              >
                <Flex gap="xs">
                  <Icon color="white" />
                  {social.label}
                </Flex>
              </Anchor>
            )
          })}
        </Flex>
      </Flex>
      <Text component="p" align="center" pt="xl" fz="sm" color={theme.colors.gray[0]}>
        Copyright © 2023 Daniela Muller
      </Text>
    </Box>
  )
}

export default Footer
