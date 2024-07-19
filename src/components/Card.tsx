import {
    motion,
    transform,
    useAnimationControls,
    useMotionValue,
    useTransform,
    // AnimatePresence,
    // easeIn
} from "framer-motion";

import { useEffect, useState } from "react";


function Card(props : {cardInfo : {word : string, translation : string}, setCount : Function, count : number }) {
    const [exitX, setExitX] = useState(0);
    console.log(exitX)
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const [isReversed, setIReversed] = useState(true)

    const variants = {
            animate: { opacity: 1, y: 0, scale: 1 },
            exit: (custom : number) => {
                return {
                    x : custom,
                    opacity: 0,
                    scale: 0.5,
                    transition: { duration: 0.2 }
                };
            },
            initial : {
                 opacity: 0,
                 y : 0,
                 scale : 0.8
            },
            reverse : {
                rotateX : '360deg',
                opacity : 1,
                scale : 1
            }
    }
    
    const rotate = useTransform(x, [-150, 0, 150], [-45, 0, 45], {
        clamp: false
    });

    const handleDragEnd = (_ : any, info : any, ) => {
        console.log(info)
        if (info.offset.x > 200) {
            setExitX(500);
            props.setCount((prev : number) => prev + 1)
            
        }
        else if (info.offset.x < -200){
            setExitX(-500);
            props.setCount((prev : number) => prev + 1)
        }


    }



    return (

        <motion.button
         onClick={() => setIReversed(!isReversed)}
         variants={variants}
         custom={exitX}
         style={{rotate, x, cursor: 'grab', top: 0, position: 'absolute'}}
         initial='initial'
         animate={isReversed ? 'animate' : 'reverse'}
         transition={{type: 'spring', stiffness: 100, damping: 10}}
        //  whileTap='reverses'
         drag={true}
         dragConstraints={{left: 0, right: 0, top: 0, bottom: 0}}
         onDragEnd={handleDragEnd}

         exit='exit'

         className='h-full w-full flex justify-center items-center bg-card-color rounded-[50px]
        font-light font-sans text-text-color-light text-[64px]'>
            {isReversed ? props.cardInfo.word : props.cardInfo.translation}
        </motion.button>


    );
}

export default Card;