import '../styles/TechCard.css'
export const TechCard = (props) => {
    return(
        <div className="Card">
            <div className="imgContainer">
                <img className={props.custom_class} src={props.image} alt={props.TechnologyName} />
            </div>
            <h3 className={props.text_class}>{props.TechnologyName}</h3>
        </div>
    )
}