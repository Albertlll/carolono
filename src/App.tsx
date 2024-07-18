import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence
} from "framer-motion";


function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <div className='h-[100vh] w-[100vw] bg-bg-color grid items-center justify-center grid-cols-[auto_650px_auto] grid-rows-3'>
        <motion.div className='h-full w-full col-start-2 row-start-2'>

          <AnimatePresence initial={false}>
              <Card setCount={setCount} key={count} count={count} word='Какашка'/>
          </AnimatePresence>

        </motion.div>

    </div>
  )
}

export default App
