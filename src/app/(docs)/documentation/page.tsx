import { FC } from 'react'
import MonetDisplayFont from '@/utils/fonts'
interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return <div className={`min-h-screen w-full ${MonetDisplayFont.className}`}>docs page</div>
}

export default page