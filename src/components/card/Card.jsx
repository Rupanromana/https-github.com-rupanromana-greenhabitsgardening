import './card.scss'
import {useState} from 'react'
import {motion} from "framer-motion"


function Card({heading,para}) {
    const [IsOpen,setIsOpen] = useState(false);

    return(
    <div className='motion_handle' >
            <motion.div whileHover={{scale:1.06}} transition={{ layout:{duration: 2,type: "spring"}}}
                layout 
                onClick={()=>setIsOpen(!IsOpen) } 
                style={{
                    zIndex:IsOpen ? 100:0
                }}
                className="card"> 
                {!IsOpen &&<motion.h2 
                style={{
                    zIndex:IsOpen ? 100:0,
                }} 
                layout="position">{heading}</motion.h2>}
                {IsOpen &&
                    <motion.div >
                        <p>{para}</p>
                    </motion.div>
                }
            </motion.div>
        </div>
    )
    
}

export default Card

    
