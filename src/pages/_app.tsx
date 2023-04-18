import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import Layout from '@components/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  )
}
