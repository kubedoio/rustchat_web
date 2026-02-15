import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'RustChat - Self-hosted, Open Source Team Collaboration',
    description: '100% open source, self-hosted chat server written in Rust. Fast, safe, and built for teams who own their stack.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <Script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-4W6D9KTQDS"
                />
                <Script id="google-analytics">
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-4W6D9KTQDS');
                    `}
                </Script>
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    )
}
