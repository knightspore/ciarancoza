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
                <span className="font-medium">Hi, I'm<br /></span>
                <span className="text-4xl mt-2">Ciarán</span>
            </h1>
            <p className="mt-4">
                I'm a full-stack software engineer and musician from Cape Town 🇿🇦.
                I love the Karoo and can't stop learning about art, computers, history and
                people. I've worked as a <Link href="/projects">software engineer</Link> for
                the past few years, and I've been <Link href="/art">making music</Link> a few
                years longer.
            </p>
            <p className="mt-4">
                I'm currently working at <Link href="https://tripco.africa">Tripco</Link>, South Africa's
                biggest OTA and home of <Link href="https://lekkeslaap.co.za">LekkeSlaap</Link>. These days,
                I'm trying to read more (you can <Link href="https://www.goodreads.com/user/show/158618240-ciar-n">see
                what I'm reading here</Link>), and find time to work on <Link href="https://selecta.ciaran.co.za">Selecta</Link>,
                an app I built for finding hidden gems on Spotify.
            </p>
            <p className="mt-4">
                
            </p>
        </div>
    )
}
