import { useState } from 'react'
import Card from './components/Card'
import {
  motion,
  // useMotionValue,
  // useTransform,
  AnimatePresence
} from "framer-motion";

import data from "./data.json"

function App() {

  const [count, setCount] = useState(0);

  return (
    <>

    <div className='h-full w-full bg-bg-color grid items-center justify-center grid-cols-[auto_33%_auto] grid-rows-3'>
        <motion.div className='h-full w-full col-start-2 row-start-2 relative z-50'>

          <AnimatePresence initial={true}>
            
              <Card setCount={setCount} key={count} count={count} cardInfo={data[count]}/>
              
            
          </AnimatePresence>
        </motion.div>
    </div>    

    </>
   
  )
}

export default App
