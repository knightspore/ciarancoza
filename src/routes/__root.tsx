import { createRootRoute, Outlet } from "@tanstack/react-router"
import Nav from "../components/nav"
import Link from "../components/link"
import Section from "../components/section"

export const Route = createRootRoute({
    component: () => (
        <div className="p-4 max-w-[800px] mx-auto pb-12 flex flex-col min-h-screen">
            <Nav />
            <div className="my-4 grow">
                <Outlet />
            </div>
            <hr className="mb-4" />
            <Section id="contact" title="I am Online">
                <div className="flex flex-wrap gap-4">
                    <Link href="https://github.com/knightspore">Github</Link>
                    <Link href="https://parabyl.bandcamp.com/">Bandcamp</Link>
                    <Link href="https://soundcloud.com/parabyl">Soundcloud</Link>
                    <Link href="https://open.spotify.com/artist/5fDQIqkM1QtkQpBkffuBWQ">Spotify</Link>
                    <Link href="https://music.apple.com/us/artist/parabyl/1357929882">Apple Music</Link>
                    <Link href="https://www.behance.net/slemonade">Behance</Link>
                    <Link href="https://twitter.com/parabyl">Twitter</Link>
                </div>
            </Section>
        </div>
    )
});
