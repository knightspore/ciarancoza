export default function Section({ id, title, children }: { id: string, title: string, children?: React.ReactNode }) {
    return <section id={id} className="flex flex-col gap-4 pb-4 lg:pb-8">
        <h2 className="text-xl lg:text-2xl font-medium">{title}</h2>
        {children}
    </section>
}

