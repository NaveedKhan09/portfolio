export const ProjectCard = (props) =>{
    return(
        <div className="project_card">
            <div className="project_img_container">
                <img src={props.projectImage} alt={props.title} title={props.title}/>
            </div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <div className="buttons">
                <a href={props.LiveDemo} target="_blank" className='Preview'>Live Demo ➔</a>
                <a href={props.GithubCode} target="_blank" className='Preview'>Github Code ➔</a>
            </div>
        </div>
    )
}