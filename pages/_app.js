import '../styles/global.css';
import { ChakraProvider} from '@chakra-ui/react'
import ThemeToggle  from '../components/ThemeToggle.js';

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
      <ThemeToggle  />
    </ChakraProvider>
  )
}