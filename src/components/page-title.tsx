export default function Title({ children, subtitle, preTitle = false }: { children: React.ReactNode, subtitle?: string, preTitle?: boolean }) {
    return <div className="flex flex-col gap-1 py-4 lg:pb-5">
        {subtitle && preTitle && <p className="opacity-80">{subtitle}</p>}
        <h1 className="text-3xl lg:text-4xl">{children}</h1>
        {subtitle && !preTitle && <p className="opacity-80">{subtitle}</p>}
    </div>
}
