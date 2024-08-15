import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LandingPage from './app/core/components/landing-page/LandingPage'
import { NextUIProvider } from '@nextui-org/react'
import './styles.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NextUIProvider>
      <LandingPage />
    </NextUIProvider>
  </StrictMode>,
)
