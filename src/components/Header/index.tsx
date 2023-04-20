import BurgerMenu from '@components/BurgerMenu.tsx'
import {
  Anchor,
  Box,
  Flex,
  Image,
  NavLink,
  Paper,
  Title,
  rem,
  useMantineTheme,
} from '@mantine/core'
import { SITE_LINKS } from '@utils/constants'

const Header = () => {
  const theme = useMantineTheme()
  return (
    <Paper
      py="xs"
      px={{ base: rem(20), sm: rem(40) }}
      bg={theme.colors.gray[1]}
      shadow="sm"
      sx={{ borderRadius: 0, zIndex: 99 }}
      pos="sticky"
      top={0}
      w="100%"
      opacity={{ sm: '0.90' }}
    >
      <Flex maw={rem(1440)} m="auto" justify="space-between" align="center">
        <NavLink
          component="a"
          href="/"
          p={0}
          w={'fit-content'}
          h="fit-content"
          sx={theme => ({
            '&:hover': {
              backgroundColor: theme.colors.gray[1],
            },
          })}
          label={<Image maw={130} h={'auto'} src="/daniela-muller.png" alt="Daniela Muller logo" />}
        />
        <BurgerMenu />
        <Box display={{ base: 'none', sm: 'initial' }}>
          <Flex gap="xl" align="center">
            {SITE_LINKS.map(item => (
              <Anchor
                key={`header-${item.label}`}
                component="a"
                href={item.href}
                c={theme.black}
                fz="xl"
              >
                {item.label}
              </Anchor>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Paper>
  )
}

export default Header
