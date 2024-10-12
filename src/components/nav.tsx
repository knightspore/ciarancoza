import Link from "./link";

export default function Nav() {
    return <nav className="flex flex-wrap gap-4 uppercase text-sm font-medium">
        <Link href="#projects"><span className="text-coral-500">&gt;</span> Projects</Link>
        <Link href="#music"><span className="text-coral-500">&gt;</span> Music</Link>
        <Link href="#blog"><span className="text-coral-500">&gt;</span> Writing</Link>
        <Link href="#art"><span className="text-coral-500">&gt;</span> Art</Link>
        <Link href="#open-source"><span className="text-coral-500">&gt;</span> Open Source</Link>
        <Link href="#contact"><span className="text-coral-500">&gt;</span> Contact</Link>
    </nav>
}
