import { createRootRoute, Outlet } from "@tanstack/react-router"
import Nav from "../components/nav"

export const Route = createRootRoute({
    component: () => (
        <div className="p-4 max-w-[800px] mx-auto pb-12">
            <Nav />
            <Outlet />
        </div>
    )
});
