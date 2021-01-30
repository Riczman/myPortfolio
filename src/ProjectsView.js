import React from 'react';
import { ReactComponent as SVGProjects} from './portfolioProjects.svg';


class ProjectsView extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            
        }
    }
    
  
    render(){
        return(
            <div class="projectsPageCard" id="card3">
                <div class="svgWrapper">
                    <SVGProjects></SVGProjects>
                </div>
                <div class="projectsContainer">
                <div class="projectTileswrapper">
                    <div class="projectTile">
                        <div class="projectPreview">  
                        </div>
                        <div class="projectTitle">
                            Equation Companion
                        </div>
                    </div>
                    <div class="projectTile"></div>
                    
                </div>
                </div>
            </div>
        );
    }
}
  
export default ProjectsView;