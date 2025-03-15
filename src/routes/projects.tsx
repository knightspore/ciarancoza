import { createFileRoute } from '@tanstack/react-router'
import { useState } from "react"
import Section from "../components/section"
import Card from "../components/card"
import Link from "../components/link"
import SEO from '../components/seo'

const KEYWORD_MAP = [
    ["hitch", "hiker"],
    ["ford", "prefect"],
    ["arthur", "dent"],
    ["zaphod", "beeblebrox"],
    ["trillian", "astra"],
    ["marvin", "android"],
    ["deep", "thought"],
    ["heart", "gold"],
    ["slartibartfast", "fjords"],
    ["vogon", "poetry"],
    ["babel", "fish"],
    ["infinite", "improbability"],
    ["pan", "galactic"],
    ["dont", "panic"],
    ["mostly", "harmless"],
    ["42", "life"],
    ["universe", "everything"],
    ["tea", "earl grey"],
]

export const Route = createFileRoute('/projects')({
    component: Projects,
    ssr: true,
})

function Projects() {

    const [password, setPassword] = useState<string | null>(null)

    function randomPassword() {
        setPassword(KEYWORD_MAP[Math.floor(Math.random() * KEYWORD_MAP.length)][Math.floor(Math.random() * 2)])
    }

    return <>
        <SEO
            title="Apps, Projects & Experiments"
            description="A collection of projects, experiments and apps I've worked on."
            keywords={["XML", "Spotify", "Trivia", "RSS", "Go", "Typescript", "Machine Learning", "Event Sourcing", "Web Development", "Software Engineering", "Ciarán Slemon"]}
            image="https://ciaran.co.za/img/logo-square.png"
            url="https://ciaran.co.za/projects"
        />
        <Section
            id="projects"
            title="Projects &amp; Experiments"
        >
            <ul className="grid gap-5">

                <Card title="🖥️ XML Trap">
                    <p>
                        A basic RSS/Atom feed parser written in Typescript, using Bun, with full test coverage. It can parse feeds and create an AST of the feed in JSON.
                        Very fun to write since there's so much writing online on XML parsers.
                    </p>
                    <p>Try it out: <code className="bg-shell-500 text-shell-50 px-1 rounded">npm install xml-trap</code></p>
                    <div>
                        <Link href="https://github.com/knightspore/xml-trap/">XML Trap on Github</Link>
                    </div>
                </Card>

                <Card title="📀 Selecta">
                    <p>Selecta is a web app that allows you to put your hands onto Spotify's controls to get precise or rare recommendations they wouldn't usually show you.</p>
                    <p>
                        I'd grown tired of pigeon-holing in Spotify's recommendations and decided to see what was possible with their API.
                        After a few weeks I launched with a <Link href="https://www.reddit.com/r/Beatmatch/comments/13f17c7/i_made_a_spotify_crate_digging_tool_for_djs/">Reddit Post in
                            r/Beatmatch</Link> (a subreddit for DJs).
                    </p>
                    <p>More than 10k users later, I can safely say users agree that Spotify could offer a little more interactivity in recommendations.</p>
                    <div>
                        <Link href="https://selecta.ciaran.co.za">Give it a Spin</Link> |  <Link href="https://github.com/knightspore/selecta">Selecta on Github</Link>
                    </div>
                </Card>

                <Card title="📙 Trivia Event Sourcing Experiments">
                    <p>
                        Starting as a POC for a Twitch trivia game, this project explores writing a Trivia engine written in Typescript (Powered by Bun), using an Event Log.
                        Having worked with CQRS before, replaying the game state was very appealing, as well as the potential to easily sync across clients.
                    </p>
                    <p>It's well tested with good documentation, and examples.</p>
                    <div>
                        <Link href="https://github.com/knightspore/trivia">Trivia on Github</Link>
                    </div>
                </Card>

                <Card title="🗞️ RAG Feed Reader">
                    <p>
                        Rag is a free RSS reader for the browser (or PWA) which is pretty good at bypassing paywalls. It uses a combination of Go and Typescript, with Supabase
                        on the back-end.
                    </p>
                    <div>
                        <Link href="https://rag.ciaran.co.za">Try it out</Link> | <Link href="https://github.com/knightspore/rag">RAG on Github</Link>
                    </div>
                </Card>

                <Card title="🐬 42: A Birthday ARG">
                    <p>
                        This was a gift for my partner, who suggested a fantastic game for her <i>Hitchhiker's Guide to the Galaxy</i>-themed party. Each guest gets a
                        secret password. The goal is for the guest to talk to other attendees and find their matching password partner. They then consule the all-knowing
                        computer and the first pairs to do so win a prize (just about everyone ended up receiving a prize in the end).
                    </p>
                    <p>You can check out the project at the link below, and get a random password underneath that. Get a friend to open this page and try and find matching clues!</p>
                    <div>
                        <Link href="https://42.ciaran.co.za/">Play the Game</Link>
                    </div>
                    <div>
                        <button disabled={password ? true : false} onClick={randomPassword} className="block bg-shell-500 disabled:text-shell-300 text-shell-50 px-2 rounded-sm uppercase text-sm">Get a Random Password</button>
                        {password && <p>Your password is: <span className="uppercase tracking-widest">{password}</span></p>}
                    </div>
                </Card>

                <Card title="🥁 Parabyl - Lizard People EP">
                    <p>A <Link href="https://parabyl.co.za/">fun little web page</Link> I made for an EP release.</p>
                </Card>

                <Card title="🎨 Go Experiments">
                    <p>
                        Having both worked with Go professionally, and loving it as a hobby language, I've got a number of small projects in this language. At times,
                        because it is the better tool for the job - and at other times just because it's a fun language to work with.
                    </p>
                    <p>These experiments include 2D and 3D rendering, some utilities, and some compiler work.</p>
                    <div>
                        <Link href="https://github.com/knightspore/go-experiments">Go Experiments on Github</Link>
                    </div>
                </Card>

                <Card title="🤖 Machine Learning Experiments">
                    <p>
                        I've tried hard to follow and understand how modern ML models work both out of interest, as well as to make sure I can make informed decisions about how I use them.
                        What better way than to follow some tutorials, and experiment with the results. This project contains some experiments of mine in Vector Search, as well as GAN models.
                    </p>
                    <div>
                        <Link href="https://github.com/knightspore/machinelearning-experiments">Machine Learning Experiments on Github</Link>
                    </div>
                </Card>

                {/* TODO: Check internet archive for RED Cape Town */}

            </ul>
        </Section>
        <Section id="open-source" title="Open Source Contributions">
            <p>I've made a few contributions to open source projects that I've used.</p>
            <div className="flex items-center flex-wrap gap-4">
                <span><Link href="https://github.blog/open-source/social-impact/skilling-african-developers-through-all-in-africa/" target="_blank">■ GitHub's All-In-Africa 2023 Cohort</Link> [<a href="/certificates/all-in-open-source.pdf" target="_blank" className="opacity-50">Certificate</a>]</span>
                <Link href="https://github.com/oven-sh/bun/pull/7983">■ oven-sh/bun #7983: Testing Documentation</Link>
                <Link href="https://github.com/oven-sh/bun/pull/7800">■ oven-sh/bun #7800: Testing Documentation</Link>
                <Link href="https://github.com/oven-sh/bun/pull/7766">■ oven-sh/bun #7766: Testing Documentation</Link>
                <Link href="https://github.com/gridsome/gridsome.org/pull/533">■ gridsome/gridsome.org #533: TailwindCSS Starter</Link>
            </div>
        </Section>
        <Section id="learning-tutorials" title="Learning">
            <p>
                While I often learn in practice or through experimentation, there's nothing like a good teacher.
                Here are some learning materials I've found educational and enjoyable.
            </p>
            <div className="flex items-center flex-wrap gap-4">
                <p>🌐</p>
                <Link href="https://developer.mozilla.org/en-US/">■ MDN Web Docs</Link>
                <Link href="https://github.com/rust-lang/rustlings">■ Rustlings</Link>
                <Link href="https://quii.gitbook.io/learn-go-with-tests">■ Learn Go with Tests</Link>
                <p>📚</p>
                <Link href="https://justjavascript.com/">■ Just Javascript</Link>
                <Link href="https://www.refactoringui.com/">■ Refactoring UI</Link>
                <Link href="https://www.oreilly.com/library/view/typescript-cookbook/9781098136642/">■ Typescript Cookbook</Link>
                <Link href="https://laravel-beyond-crud.com/">■ Laravel Beyond CRUD</Link>
                <Link href="https://www.gopl.io/">■ The Go Programming Language</Link>
                <Link href="https://www.manning.com/books/grokking-algorithms">■ Grokking Algorithms</Link>
            </div>
        </Section>
    </>
}
