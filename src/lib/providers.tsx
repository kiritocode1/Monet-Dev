import { FC } from 'react'
import { ReactNode } from 'react'
import { ClerkProvider } from "@clerk/nextjs";
import { dark, neobrutalism } from "@clerk/themes";
interface providersProps {
  children : ReactNode
}

const Providers: FC<providersProps> = ({children}) => {
  return <ClerkProvider appearance={{
    baseTheme :dark
  }} >{children}</ClerkProvider>
}

export default Providers;