import Footer from '@components/Footer'
import Header from '@components/Header'

type Props = {
  children: JSX.Element
}

const Layout = (props: Props) => {
  const { children } = props
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
