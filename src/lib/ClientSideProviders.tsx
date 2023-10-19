'use client'
import { FC, ReactNode } from 'react'
import { NextUIProvider } from "@nextui-org/react";
interface ClientSideProvidersProps {
  children : ReactNode
}

const ClientSideProviders: FC<ClientSideProvidersProps> = ({children}) => {
  return <NextUIProvider>{children}</NextUIProvider>;
}

export default ClientSideProviders;