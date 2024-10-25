import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from "@tanstack/react-router"
import { routeTree } from './routeTree.gen'
import './index.css'

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

const rootEl = document.getElementById('root')!;

if (!rootEl.innerHTML) {
    const root = ReactDOM.createRoot(rootEl);
    root.render(
        <StrictMode>
            <RouterProvider router={router} />
        </StrictMode>
    );
}
