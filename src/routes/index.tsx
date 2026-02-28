import { createFileRoute } from '@tanstack/react-router'
import Link from "../components/link"
import Title from '../components/page-title'

export const Route = createFileRoute('/')({
    component: Homepage,
    ssr: true,
})

function Homepage() {
    return <>
        <Title subtitle="Hi, I'm" preTitle>
            Ciarán
        </Title>
        <p>
            I'm a full-stack software engineer and musician from Cape Town 🇿🇦.
            I love the South African countryside and I'm fascinated by learning about art, computers, history and
            people. I've worked as a <Link href="/projects">software engineer</Link> for
            the past few years, and I've been <Link href="/art">making music</Link> a few
            years longer. I'm currently working at Tripco, home of <Link href="https://lekkeslaap.co.za">LekkeSlaap</Link>.
        </p>
    </>
}
