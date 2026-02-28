import { PropsWithChildren } from "react";

export default function Code({ children }: PropsWithChildren) {
    return <code className="bg-shell-900 text-coral-100 px-1 rounded text-sm md:text-base">
        {children}
    </code>
}
