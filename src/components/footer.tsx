import Link from "../components/link"
import Section from "../components/section"

export default function Footer() {
    return <Section id="contact" title="Online">
        <div className="flex flex-wrap gap-2 md:gap-4 text-sm font-medium">
            <Link href="https://github.com/knightspore">⊹ Github</Link>
            <Link href="https://soundcloud.com/parabyl">⊹ Soundcloud</Link>
            <Link href="https://parabyl.bandcamp.com/">⊹ Bandcamp</Link>
            <Link href="https://bsky.app/profile/ciaran.co.za">⊹ Bluesky</Link>
        </div>
    </Section>
}
