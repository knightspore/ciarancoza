import { ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<'a'> {
    children: React.ReactNode;
}

export default function Link({ href, children, ...props }: Props) {

    props.target = props.target ??
        href?.startsWith("http") ? "_blank" : undefined

    props.rel = props.rel ??
        href?.startsWith("http") ? "noopener noreferrer" : undefined

    return <a {...props}
        href={href}
        className="border-b border-coral-500 hover:border-coral-200 transition-all duration-175"
    >
        {children}
    </a>
}
