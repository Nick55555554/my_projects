import ProjectPage from "./ProjectPage"
import video from '../../images/projects/yra/video.mp4'

export default function YraPage(){
    return(
        <ProjectPage
        text="Статический сайт, захостенный через git-pages на собственном домене./n
        При разработке использовал Next.js ввиду удобства его архитектуры и обилии уже оптимизированных встроенных HTML-элементов./n
        Так же для упрощения работы с анимациями была подключена библиотека Frame-motion."
        name="Статический cайт"
        video={video}
        bg="#afe7f9"
        link="https://github.com/Nick55555554/psyhology_static"
        />
    )
}