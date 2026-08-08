import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Home/Home.jsx'
import Converter from './components/Converter/Converter.jsx'
import Search from './components/Search/Search.jsx'
import Analytics from './components/Analytics/Analytics.jsx'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorBoundary/>,
        children: [
            {
                errorElement: <ErrorBoundary/>,
                children: [
                    { index: true,  element: <Home /> },
                    { path: '/converter',  element: <Converter /> },
                    { path: '/search',  element: <Search /> },
                    { path: '/analytics',  element: <Analytics /> },
                ]
            }
        ]
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)
