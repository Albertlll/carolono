import { useState } from 'react'
import Card from './components/Card'
import {
  motion,
  // useMotionValue,
  // useTransform,
  AnimatePresence
} from "framer-motion";


function App() {
  const [count, setCount] = useState<number>(0)
  // const [bg, setBg] = useState()
  return (
    <div className='h-[100vh] w-[100vw] bg-bg-color grid items-center justify-center grid-cols-[auto_650px_auto] grid-rows-3'>
        <motion.div className='h-full w-full col-start-2 row-start-2 relative'>

          <AnimatePresence initial={true}>
              <Card setCount={setCount} key={count} count={count} word='Какашка'/>
          </AnimatePresence>

        </motion.div>

    </div>
  )
}

export default App
