import {
    motion,
    useMotionValue,
    useTransform,
    AnimatePresence,
    easeIn
} from "framer-motion";

import { useState } from "react";


function Card(props : {word : string, setCount : Function, count : number}) {
    const [exitX, setExitX] = useState(0);
    const x = useMotionValue(0);
    const rotate = useTransform(x, [-150, 0, 150], [-45, 0, 45], {
        clamp: false
    });
    const handleDragEnd = (_ : any, info : any, ) => {
        console.log(info)
        if (info.offset.x > 300) {
            setExitX(300);
            props.setCount((prev : number) => prev + 1)
        }
        else if (info.offset.x < -300){
            setExitX(-300);
            props.setCount((prev : number) => prev + 1)
        }
    }
    return (

        <motion.div
         style={{rotate, x}}
         initial={{ opacity: 0, scale : 0.8}}
         animate={{ opacity: 1, scale: 1}}
         transition={{type: 'spring', stiffness: 100, damping: 10}}
         whileTap={{cursor: 'grab'}}
         drag={true}
         dragConstraints={{left: 0, right: 0, top: 0, bottom: 0}}
         onDragEnd={handleDragEnd}

         exit={
            {
                
            }
         }


             className='h-full w-full flex justify-center items-center bg-card-color rounded-[50px]
        font-light font-sans text-text-color-light text-[64px]'>
            {props.count}
        </motion.div>
    );
}

export default Card;