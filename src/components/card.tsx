export default function Card({ title, children }: { title: string, children?: React.ReactNode }) {
    return <li className="border-2 border-shell-900 p-4 flex flex-col gap-2">
        <h3 className="font-semibold">{title}</h3>
        {children}
    </li>
}

