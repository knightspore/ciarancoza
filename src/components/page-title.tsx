export default function Title({ children, subtitle, preTitle = false }: { children: React.ReactNode, subtitle?: string, preTitle?: boolean }) {
    return <div className="border-coral-500 border-l-2 p-2 md:p-4 mb-2 md:mb-4 flex flex-col gap-1">
        {subtitle && preTitle && <p className="opacity-80">{subtitle}</p>}
        <h1 className="text-3xl lg:text-4xl">{children}</h1>
        {subtitle && !preTitle && <p className="opacity-80">{subtitle}</p>}
    </div>
}
