import {Nunito} from "next/font/google"
import "./globals.css"
import {ReactNode} from "react"
import {Providers} from "@/components/shared/providers"

const nunito = Nunito({
    subsets: ["cyrillic"],
    variable: "--font-nunito",
    weight: ["400", "500", "600", "700", "800", "900"]
})

export default function Layout({children}: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="ru">
            <head>
                <link rel="icon" type="image/png" href="/favicon/favicon-48x48.png" sizes="48x48"/>
                <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg"/>
                <link rel="shortcut icon" href="/favicon/favicon.ico"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
                <link rel="manifest" href="/favicon/site.webmanifest"/>

                <meta name="apple-mobile-web-app-title" content="Next Pizza"/>
            </head>

            <body className={nunito.className}>
                {/*<Providers>*/}{children}{/*</Providers>*/}
            </body>
        </html>
    )
}
