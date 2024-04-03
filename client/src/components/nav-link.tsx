import { ComponentProps } from "react"

interface MeuNavLink extends ComponentProps<'a'>{
    children: string
}

export function NavLink(props: MeuNavLink){
    return(
        <a {...props} className="font-medium text-sm text-zinc-300">{props.children}</a>
    )
}