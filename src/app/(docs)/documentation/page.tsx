import { FC } from 'react'
import {MonetDisplayFont} from '@/utils/fonts'
interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return <div className={`min-h-screen w-full   sm:text-9xl ${MonetDisplayFont.className}`}>M</div>
}

export default page