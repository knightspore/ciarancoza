import { createRootRoute, Outlet } from "@tanstack/react-router"
import Nav from "../components/nav"
import Footer from "../components/footer";
import SEO from "../components/seo";

export const Route = createRootRoute({
    component: BaseLayout,
    pendingComponent: Pending,
    notFoundComponent: NotFound,
    ssr: true,
});

function BaseLayout() {
    return <>
        <SEO />
        <div className="p-4 max-w-[800px] mx-auto pb-12 flex flex-col min-h-screen">
            <Nav />
            <div className="my-4 grow space-y-8">
                <Outlet />
            </div>
            <Footer />
        </div>
    </>
}

function Pending() {
    return <h1 className="text-center mt-8">Loading...</h1>
}

function NotFound() {
    return <h1 className="text-center mt-8">Oops, this page does not exist!</h1>
}
