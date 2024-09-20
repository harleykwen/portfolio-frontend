import RouteProvider from '@router/RouteProvider.tsx'
import App from './App.tsx'
import theme from '@theme/theme.ts'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { GoogleOAuthProvider } from '@react-oauth/google'
import './index.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ChakraProvider theme={theme}>
            <RouteProvider>
                <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_KEY??''}>
                    <App />
                </GoogleOAuthProvider>
            </RouteProvider>
        </ChakraProvider>
    </StrictMode>,
)
