import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/lib/providers';
import ClientSideProviders  from '@/lib/ClientSideProviders';
import MainNextNavBar from '@/components/ui/MainNextNavbar';
const inter = Inter({ subsets: ['latin'] })




export const metadata: Metadata = {
	title: "Monet~Api as a service",
	description: "tailor made api to suit your needs",


};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
		<Providers>
		  <html lang="en">
			  <head>
				  <link rel='icon' href='/public/logo.png'  sizes='any'/>
			  </head>
				<body className={inter.className}>
					<ClientSideProviders>
					  <main className='dark text-foreground bg-background'>
						  <MainNextNavBar/>
						  {children}
					  </main>
					</ClientSideProviders>
				</body>
			</html>
		</Providers>
	);
}
