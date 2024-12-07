export default function Link({ href, children }: { href: string, children: React.ReactNode }) {
    return <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="border-b border-coral-500 hover:border-coral-200 transition-all duration-175"
    >
        {children}
    </a>
}
