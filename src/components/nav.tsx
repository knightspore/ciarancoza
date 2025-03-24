import { Link, linkOptions } from "@tanstack/react-router";

const links = [
    linkOptions({
        to: '/',
        label: 'Home',
    }),
    linkOptions({
        to: '/projects',
        label: 'Projects & OSS',
    }),
    linkOptions({
        to: '/art',
        label: 'Art ',
    }),
    // linkOptions({
    //     to: '/read',
    //     label: 'Read',
    // }),
];

export default function Nav() {
    return <nav className="flex flex-wrap gap-2 md:gap-4 uppercase text-sm lg:text-lg font-medium">
        {links.map((link) => (<Link
            key={link.label}
            className="transition-all duration-175 flex items-center gap-1"
            activeProps={{ className: 'text-coral-500' }}
            {...link}
        >
            <span className="text-coral-500">•</span> {link.label}
        </Link>))}
    </nav>
}
