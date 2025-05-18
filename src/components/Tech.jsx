import '../styles/Tech.css'
import { TechCard } from "./TechCard";
export const Tech = () => {
    return(
        <div className="Tech" id="Technologies">
            <h1>Tech Stack</h1>
            <div className="container">

                <TechCard image="images/html.webp" TechnologyName="HTML" custom_class="html_custom_class" text_class="html_text"/>
                <TechCard image="images/css.jpg" TechnologyName="CSS" custom_class="css_custom_class" text_class="css_text"/>
                <TechCard image="images/javascript official.png" TechnologyName="JavaScript" custom_class="js_custom_class" text_class="js_text"/>
                <TechCard image="images/bootstrap.png" TechnologyName="Bootstrap" custom_class="bootstrap_custom_class" text_class="bootstrap_text"/>
                <TechCard image="images/git&github.webp" TechnologyName="Version Control" custom_class="github_custom_class" text_class="github_text"/>
                <TechCard image="images/React_Logo.png" TechnologyName="React" custom_class="react_custom_class" text_class="react_text"/>
            
            </div>
        </div>
    )
}