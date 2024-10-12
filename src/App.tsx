import { useEffect, useState } from "react"

const BIO = <>
    I'm a software engineer / musician from Cape Town, South Africa. I have a keen interest in art and computers, history and people.
    I've been working as a software engineer for the past few years, and before that I spent a lot of time <Link href="#music">making
        music</Link>, doing <Link href="#design">graphic design</Link>, and occasionally <Link href="#modelling">a bit
            of modelling</Link>.
</>

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

export default function App() {

    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDarkMode(true)
        }
    }, [darkMode])

    const [password, setPassword] = useState<string | null>(null)

    function randomPassword() {
        setPassword(KEYWORD_MAP[Math.floor(Math.random() * KEYWORD_MAP.length)][Math.floor(Math.random() * 2)])
    }

    return (
        <div className={`p-4 max-w-[800px] mx-auto mb-12`}>

            <nav className="flex flex-wrap gap-2 uppercase text-sm font-black">
                <Link href="#projects"><span className="text-coral-500">&gt;</span> Projects</Link>
                <Link href="#music"><span className="text-coral-500">&gt;</span> Music</Link>
                <Link href="#blog"><span className="text-coral-500">&gt;</span> Writing</Link>
                <Link href="#open-source"><span className="text-coral-500">&gt;</span> Open Source</Link>
                <Link href="#contact"><span className="text-coral-500">&gt;</span> Contact</Link>
            </nav>

            <header className="mt-4">
                <h1>
                    <span className="text-xs font-bold">Hi, I'm<br /></span>
                    <span className="text-2xl mt-2">Ciarán</span>
                </h1>
                <p className="mt-4">{BIO}</p>
            </header>

            <div id="content" className="mt-8 space-y-8">

                <Section
                    id="projects"
                    title="Projects &amp; Experiments"
                >
                    <ul className="mt-4 space-y-4">

                        <Card title="🖥️ XML Trap">
                            <p>
                                A basic RSS/Atom feed parser written in Typescript, using Bun, with full test coverage. It can parse feeds and create an AST of the feed in JSON.
                                Very fun to write since there's so much writing online on XML parsers.
                            </p>
                            <p>Try it out: <code className="bg-shell-400 text-shell-900 px-1 rounded">npm install xml-trap</code></p>
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
                            <p>You can check out the project here, and get a random password below. Get a friend to open this page and try and find matching clues!</p>
                            <div>
                                <Link href="https://talis-42.vercel.app/">Play the Game</Link>
                            </div>
                            <div>
                                <button disabled={password ? true : false} onClick={randomPassword} className="block bg-shell-400 disabled:text-shell-300 text-shell-900 px-2 rounded uppercase text-sm">Get a Random Password</button>
                                {password && <p>Your password is: <span className="uppercase tracking-widest">{password}</span></p>}
                            </div>
                        </Card>

                        <Card title="🥁 Parabyl - Lizard People EP">
                            <p>A <Link href="https://parabyl.co.za/">fun little web page</Link> I made for an EP release.</p>
                        </Card>

                        <Card title="Go Experiments">
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

                <Section id="music" title="Music">
                    <p>I've released a number of albums, singles and EPs as Parabyl, as well as in my previous band Three Witches. Here are some of my favourites:</p>
                    <div className="flex flex-row overflow-x-auto space-x-4">
                        <div
                            id="lizard-people"
                            className="w-min"
                            dangerouslySetInnerHTML={{ __html: `<iframe style="border: 0; width: 380px; height: 500px;" src="https://bandcamp.com/EmbeddedPlayer/album=1549326037/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://parabyl.bandcamp.com/album/lizard-people">Lizard People by Parabyl</a></iframe>` }}
                        />
                        <div
                            id="dispersion"
                            className="w-min"
                            dangerouslySetInnerHTML={{ __html: `<iframe style="border: 0; width: 380px; height: 500px;" src="https://bandcamp.com/EmbeddedPlayer/album=1893600787/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://parabyl.bandcamp.com/album/dispersion">Dispersion by Parabyl</a></iframe>` }}
                        />
                        <div
                            id="entanglement"
                            className="w-min"
                            dangerouslySetInnerHTML={{ __html: `<iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=3021373265/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://parabyl.bandcamp.com/album/entanglement-ep">Entanglement EP by Parabyl</a></iframe>` }}
                        />
                        <div
                            id="music-for-dogs"
                            dangerouslySetInnerHTML={{ __html: `<iframe width="350px" height="470px" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/361985640&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/three-witches-1" title="Three Witches" target="_blank" style="color: #cccccc; text-decoration: none;">Three Witches</a> · <a href="https://soundcloud.com/three-witches-1/sets/music-for-dogs-ep" title="Music for Dogs EP" target="_blank" style="color: #cccccc; text-decoration: none;">Music for Dogs EP</a></div>` }}
                        />
                        <div
                            id="miscommunication-skills"
                            dangerouslySetInnerHTML={{ __html: `<iframe width="350px" height="470px" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/224393598&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/three-witches-1" title="Three Witches" target="_blank" style="color: #cccccc; text-decoration: none;">Three Witches</a> · <a href="https://soundcloud.com/three-witches-1/sets/miscommunication-skills" title="Miscommunication Skills" target="_blank" style="color: #cccccc; text-decoration: none;">Miscommunication Skills</a></div>` }}
                        />
                    </div>
                </Section>

                <Section id="blog" title="Writing">
                </Section>

                <Section id="open-source" title="Open Source Contributions">
                    <p>I've made a few contributions to open source projects that I've used.</p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="https://github.com/oven-sh/bun/pull/7983">■ oven-sh/bun #7983: Testing Documentation</Link>
                        <Link href="https://github.com/oven-sh/bun/pull/7800">■ oven-sh/bun #7800: Testing Documentation</Link>
                        <Link href="https://github.com/oven-sh/bun/pull/7766">■ oven-sh/bun #7766: Testing Documentation</Link>
                        <Link href="https://github.com/gridsome/gridsome.org/pull/533">■ gridsome/gridsome.org #533: TailwindCSS Starter</Link>
                    </div>
                </Section>

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
        </div>
    )
}

function Section({ id, title, children }: { id: string, title: string, children?: React.ReactNode }) {
    return <section id={id} className="space-y-4">
        <h2 className="text-lg">&rarr; {title}</h2>
        {children}
    </section>
}

function Card({ title, children }: { title: string, children?: React.ReactNode }) {
    return <li className="border-2 border-shell-300 p-4 rounded space-y-2">
        <h3 className="font-extrabold">{title}</h3>
        {children}
    </li>
}

function Link({ href, children }: { href: string, children: React.ReactNode }) {
    return <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="border-b border-coral-500 hover:border-coral-200 transition-opacity duration-175"
    >
        {children}
    </a>
}
