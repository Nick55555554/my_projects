import React, { useRef, useState } from 'react';
import "./main.scss"
import {  motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Iam from "../../images/Iam.jpg"
import next from "../../images/skills/nextjs.webp"
import reactquery from "../../images/skills/react.png"
import scss from "../../images/skills/scss.webp"
import react from "../../images/skills/rquery.webp"
import git from "../../images/skills/git.png"
import sql from "../../images/skills/sql.png"
import zustand from "../../images/skills/zusntand_circle.png"
import jotai from "../../images/skills/jotai-vector-logo-seeklogo/jotai-seeklogo.png"
import Yra_Title from "../../images/projects/Yra_title.png"
import USSR_Title from "../../images/projects/USSR_title.png"
import C1Hac from "../../images/projects/C1Hac_title.png"
import { Link } from 'react-router';
import {a, useSpring } from '@react-spring/web'

interface ProjectProps{
    name: string
    id: number
    image: string
    text: string
    scrollRef?: React.RefObject<HTMLDivElement>
    bg: string
}

const lines = [
    "Я, Грачев Николай -",
    "Web developer.",
    "Ниже представлен опыт моей работы."
]
const skills = [
    react,
    next,
    git,
    jotai,
    zustand,
    reactquery,
    scss,
    sql
]


const projects: ProjectProps[] = [
    { name: 'Сайт-визитка', image: Yra_Title, text: "Статический одностраничный сайт, написаный для частного психолога-психоаналитика на Next.js c использованием Framed Motion, SASS и TailwindCSS.", id: 1, bg: "#afe7f9", },
    { name: "Образовательный ресурс", image: USSR_Title, text: "Платформа с множеством разделов и статей на тему Советского времени.\nБекэнд написан на express.js, в качестве базы данных был используем Postgres.", id: 2, bg: "#a52a2a"},
    { name: "Система управления спецтехникой", image: C1Hac, text: 'Кейс хакатона 1С на базе РТУ МИРЭА. Моя компетенция, - фронтенд, - написан на React.\nЗаняли 1 место по нашему кейсу. ', id: 3, bg: "#80a9a1"},

]

export default function Main(){
    const scrollRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll()
    const backgroundColor = useTransform(scrollYProgress, [0, 0.5, 0.75, 1], ['#ffffff', "#509ec3", "#bf6060",'#8dc8bc']);



    return (
        <motion.div className='page' ref={scrollRef} style=
        {{
            position: 'relative',
            backgroundColor: backgroundColor  
        }}> 
            <ScrollMotion
            left={true}
            // @ts-ignore
            scrollRef={scrollRef}
            className='title'>
            <div className='Iam'
                
                >
                    <motion.img
                    initial={{ scale: 0 }} 
                    animate={{
                        scale: 1 ,
                        transition:{
                            type:"tween",
                            ease:"easeInOut"
                        }
                    }} 
                    whileHover={{scale: 1.1}}
                    alt='Моё фото'
                    src={Iam}
                    className='myImage'
                    />
                </div>
                    <div className=''>
                        {lines.map((line, index)=> (
                            <motion.div
                                key={index}
                                initial=
                                {{ y:-20, opacity:0}}
                                animate={{y:0,opacity:1,
                                    transition:{
                                        delay:index*0.4 +0.5
                                    }
                                }}
                                >
                                {line}
                            </motion.div>
                        ))}
                    </div>
            </ScrollMotion>
            <ScrollMotion
            left={false}
            // @ts-ignore
            scrollRef={scrollRef}
            className='skills-window'>
                <div>
                    <h1>Имею опыт работы</h1>
                    <motion.div className='skills'>
                        {skills.map((skill,index) => (
                            <motion.img
                            className='skill'
                            key={index}
                            src={skill}
                            initial={{opacity:0, y: -20}}
                            animate={{opacity:1, 
                                y: 0,
                                transition: 
                                {type:"spring", delay: 0.5 + index * 0.5}
                            }}
                            />
                        ))}
                    </motion.div>
                </div>
            </ScrollMotion>
            <div className='window'>
                <h1>Мои проекты</h1>
                <motion.div className='projects'>
                    {projects.map((project,index) => (
                        <Project
                        name={project.name}
                        id={project.id}
                            // @ts-ignore
                        scrollRef={scrollRef}
                        image={project.image}
                        text={project.text}
                        key={index}
                        bg={project.bg}
                        
                        />
                    ))}
                </motion.div>
            </div>
            
        </motion.div>
    );
};

function ScrollMotion(props: 
    {
        className?: string, 
        children:  React.ReactNode, 
        scrollRef: React.RefObject<HTMLDivElement>,
        left: boolean,
        style?: string
    }){
    const {className, children, scrollRef, left, style} = props
    return(
        <AnimatePresence>
            <motion.div className={className}
            initial={{ opacity: 0, x: left ? "-100%" : "100%", backgroundClip:style}}
            whileInView={{ opacity: 1, x:"0", backgroundClip:style}}
            transition={{
                opacity: {duration: 0.5},
                x: {duration: 0.4}
            }}
            viewport={{ root: scrollRef}}
            style={{backgroundColor:style}}>
                {children}
        </motion.div>
        </AnimatePresence>
    )
}

function Project({ id, name, image, text, scrollRef, bg}: ProjectProps) {
    const [isHovered, setIsHovered] = useState(false);
    const buttonAnimation = useSpring({
        backgroundColor: isHovered ? "#dbe2f0" : "#ffffff", 
        transform: isHovered ? "scale(1.05)" : "scale(1)", 
        config: { tension: 200, friction: 20 },
    });

    const random = id % 2 == 0
    const lined_text = text.split('\n')

    return (
        <ScrollMotion
            left={random}
            // @ts-ignore
            scrollRef={scrollRef}
            className='projects-window'
            style={bg}
            
        >
                <h2 className="project-name">{name}</h2>
                <div className='innerPrjct'
                style={{position:"relative"}}
                >
                <a.img className="project-image"
                src={image}
                alt={name}
                />
                    <div className="project-descn">
                        {lined_text.map((line, index) => (
                            <p
                            key={index}
                            >{line}</p>
                        ))}

                    </div>
                    <Link to={`project/${id}`}>
                <a.button className='project-btn'
                    style={buttonAnimation}
                    onMouseEnter={() => setIsHovered(true)} 
                    onMouseLeave={() => setIsHovered(false)} 
                >Подробнее</a.button>
                </Link>
                </div>

        </ScrollMotion>
    );
}

