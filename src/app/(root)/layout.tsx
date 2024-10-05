import type {Metadata} from "next"
import {ReactNode} from "react"
import {Header} from "@/components/shared/header"

export const metadata: Metadata = {
    title: "Next Pizza | Главная"
}

export default function RootLayout({children, modal}: Readonly<{ children: ReactNode, modal: ReactNode }>) {
    return (
        <>
            <Header/>

            <main className={"min-h-screen"}>
                {children}
                {modal}
            </main>
        </>
    )
}
