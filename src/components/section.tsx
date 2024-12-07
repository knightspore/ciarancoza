export default function Section({ id, title, children }: { id: string, title: string, children?: React.ReactNode }) {
    return <section id={id} className="space-y-4">
        <h2 className="text-lg font-medium">&nabla; {title}</h2>
        {children}
    </section>
}

