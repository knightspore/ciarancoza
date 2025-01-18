export default function Section({ id, title, children }: { id: string, title: string, children?: React.ReactNode }) {
    return <section id={id} className="space-y-4 pb-4 lg:pb-8">
        <h2 className="text-lg lg:text-xl font-medium">&nabla; {title}</h2>
        {children}
    </section>
}

