import { createFileRoute } from '@tanstack/react-router'
import Link from "../components/link"

export const Route = createFileRoute('/')({
    component: Homepage,
    ssr: true,
})

function Homepage() {
    return (
        <div>
            <h1>
                <span className="text-xs font-bold">Hi, I'm<br /></span>
                <span className="text-2xl mt-2">Ciarán</span>
            </h1>
            <p className="mt-4">
                I'm a software engineer / musician from Cape Town, South Africa. I have a keen interest in art and computers, history and people.
            </p>
            <p className="mt-4">
                I've been working as a software engineer for the past few years, and before that I spent a lot of time <Link href="#music">making
                    music</Link>, doing <Link href="#design">graphic design</Link>, and occasionally <Link href="#modelling">a bit
                        of modelling</Link>.
            </p>
        </div>
    )
}
