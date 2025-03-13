import { motion } from "framer-motion";
import "./projectPage.scss"
import arrow from "../../images/projects/arrowBottom.png"
import { Link } from "react-router";
interface ProjectPageProps{
    name: string
    text: string
    video: string;
    bg: string
    link: string

}

export default function ProjectPage({
    name, text,video,bg, link
}: ProjectPageProps){
    
    const lines = text.split('/n')
    return(
        <div className="prj-page">
            
            <div className="Fblock">
                <div
                className="title_flex"
                >
            <motion.h1 className="name"
                initial={{x: "-200px", opacity: 0}}
                animate={{x: 0, opacity: 1,}}
                transition={{
                    delay: 0.5,
                    duration: 0.5
                }}
                
                >
                    {name}
                </motion.h1>
                <motion.a
                style={{backgroundColor: bg}} 
                className="link"
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1,}}
                    transition={{
                        delay: lines.length,
                        duration: 0.5
                    }}
                    href={`${link}`}
                    target="'_blank">
                            Ссылка на исохдный код
                </motion.a>
                    </div>
                <motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{
                    stiffness:100,  
                    damping:300,
                    duration: 1, 
                    ease: "easeInOut"}}
                className="text"
                style={{
                    backgroundColor: bg
                }}
                >
                    {lines.map((line, index) => (
                        <motion.p key={index}
                        initial={{y: "-50px", opacity: 0}}
                        animate={{y: 0, opacity: 1,}}
                        transition={{
                            delay: index + 1,
                            duration: 0.5
                        }}
                        style={{
                            paddingBottom:"10px"
                        }}
                        >
                            {line}
                        </motion.p>
                    ))}
                    
                </motion.div>
            </div>
            <div className="Fblock">
                <div className="videoHs">
                <h1 className="hvideo">Ниже представлено видео</h1>
                </div>
                <iframe
                className="video"
                src={video}
                />
                    <Link to={'/'}
                    className="backBtn"
                    style={{textDecoration: "none", display:"flex",flexDirection: "column"}}>
                <div 
                style={{textDecoration: "none", display:"flex",flexDirection: "row", justifyContent:"center"}}>
                    <img src={arrow} className="arrow"/>
                    <img src={arrow} className="arrow"/>
                    <img src={arrow} className="arrow"/>
                    <img src={arrow} className="arrow"/>
                </div>
                    </Link>
            </div>
            
        </div>
    )
}