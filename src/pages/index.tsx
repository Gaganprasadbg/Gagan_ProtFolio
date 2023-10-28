import About from '@/components/About'
import Introduction from '@/components/Intro'


import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
    <div>
<Introduction/>
</div>
<div>

<About/>
</div>

   </div>
  )
}
