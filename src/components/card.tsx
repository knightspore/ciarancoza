export default function Card({ title, children }: { title: string, children?: React.ReactNode }) {
    return <li className="border-2 border-shell-300 p-4 rounded space-y-2">
        <h3 className="font-semibold">{title}</h3>
        {children}
    </li>
}

