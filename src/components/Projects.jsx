import '../styles/Projects.css'
import { ProjectCard } from './ProjectCard'

export const Projects = () => {
    return(
        <div className="Projects" id='projects'>
            <h1>Key Projects</h1>
            <div className="projects_container">
               
                <ProjectCard title="Cooking Hub Website" description="A food Website build in HTML, CSS, BOOTSTRAP & JavaScript." projectImage="images/cooking.png" LiveDemo="https://naveedkhan09.github.io/cooking-hub/" GithubCode="https://github.com/NaveedKhan09/cooking-hub"/>
                <ProjectCard title="City Weather App" description="A Functional City Weather App that shows current weather Data of different cities across the world." projectImage="images/CityWeather.png"  LiveDemo="https://naveedkhan09.github.io/Current-Weather-App/" GithubCode="https://github.com/NaveedKhan09/Current-Weather-App"/>
                <ProjectCard title="Tic Tac Toe" description="A Tic Tac Toe game developed to be played by two players." projectImage="images/Tic_T.png" LiveDemo="https://naveedkhan09.github.io/Tic-Tac-Toe/"  GithubCode="https://github.com/NaveedKhan09/Tic-Tac-Toe"/>

            </div>
            <div className="seeAll">
                <button className='seeMore'>SEE MORE PROJECTS</button>
            </div>
            
        </div>
    )
}