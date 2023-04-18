import { useDisclosure } from '@mantine/hooks'
import { Anchor, Burger, Flex, Menu, Title, rem, useMantineTheme } from '@mantine/core'
import { SITE_LINKS, SOCIAL_LINKS } from '@utils/constants'

const BurgerMenu = () => {
  const [opened, { toggle }] = useDisclosure(false)
  const label = opened ? 'Close navigation' : 'Open navigation'
  const theme = useMantineTheme()

  return (
    <Menu shadow="md" width={'100%'}>
      <Menu.Target>
        <Burger opened={opened} onClick={toggle} aria-label={label} display={{ sm: 'none' }} />
      </Menu.Target>
      <Menu.Dropdown
        bg={theme.colors.gray[1]}
        display={{ sm: 'none' }}
        mt="sm"
        sx={{ borderTop: 'none' }}
        h="100vh"
      >
        {SITE_LINKS.map(item => (
          <Menu.Item key={`burger-${item.label}`}>
            <Anchor component="a" href={item.href} c={theme.black} fz="xl">
              <Flex>{item.label}</Flex>
            </Anchor>
          </Menu.Item>
        ))}
        <Menu.Divider />
        <Menu.Label>
          <Title order={3}>Social media</Title>
        </Menu.Label>
        {SOCIAL_LINKS.map(social => {
          const Icon = social.icon
          return (
            <Menu.Item key={`burger-${social.label}`}>
              <Anchor fz="lg" c={theme.black} href={social.href}>
                <Flex gap="xs">
                  <Icon color="black" />
                  {social.label}
                </Flex>
              </Anchor>
            </Menu.Item>
          )
        })}
      </Menu.Dropdown>
    </Menu>
  )
}

export default BurgerMenu
