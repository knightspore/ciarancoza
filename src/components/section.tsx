export default function Section({ id, title, children, className }: { id: string, title: string, className?: string, children?: React.ReactNode }) {
    return <section id={id} className={"flex flex-col gap-2 md:gap-4 " + className}>
        <h2 className="text-xl md:text-2xl font-medium">{title}</h2>
        {children}
    </section>
}

