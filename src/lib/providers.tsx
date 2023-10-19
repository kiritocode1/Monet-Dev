import { FC } from 'react'
import { ReactNode } from 'react'
import { ClerkProvider } from "@clerk/nextjs";

interface providersProps {
  children : ReactNode
}

const Providers: FC<providersProps> = ({children}) => {
    return <ClerkProvider>{children}</ClerkProvider>
}

export default Providers;