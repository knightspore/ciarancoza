export default function Section({ id, title, children }: { id: string, title: string, children?: React.ReactNode }) {
    return <section id={id} className="flex flex-col gap-2 md:gap-4">
        <h2 className="text-xl md:text-2xl font-medium">{title}</h2>
        {children}
    </section>
}

