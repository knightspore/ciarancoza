import { createFileRoute } from '@tanstack/react-router'
import Link from "../components/link"
import Title from '../components/page-title'

export const Route = createFileRoute('/')({
    component: Homepage,
    ssr: true,
})

function Homepage() {
    return (
        <div>
            <Title subtitle="Hi, I'm" preTitle>
                Ciarán
            </Title>
            <p className="mt-4">
                I'm a full-stack software engineer and musician from Cape Town 🇿🇦.
                I love the South African countryside and I'm fascinated by learning about art, computers, history and
                people. I've worked as a <Link href="/projects">software engineer</Link> for
                the past few years, and I've been <Link href="/art">making music</Link> a few
                years longer.
            </p>
            <p className="mt-4">
                I'm currently working at Tripco, home of <Link href="https://lekkeslaap.co.za">LekkeSlaap</Link>. These days,
                You can <Link href="https://www.goodreads.com/user/show/158618240-ciar-n">see
                    what I'm reading here</Link>, and check out what I'm working on software-wise on <Link href="https://github.com/knightspore">GitHub</Link>.
            </p>
            <p className="mt-4">

            </p>
        </div>
    )
}
