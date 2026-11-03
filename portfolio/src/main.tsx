import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// ROUTER
import router from './layout/browser_layout.tsx'

import { RouterProvider } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
