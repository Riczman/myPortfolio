import React from 'react';
import { ReactComponent as SVGAboutMe} from './portfolioAboutMe.svg';


class AboutMeView extends React.Component{
    constructor(props){
        super(props);

        this.state = {
           
        }
        
       
    }
    
    

    render(){
        return(
            <div class="aboutMePageCard" id="card2">
                <div class="svgWrapper">
                <SVGAboutMe></SVGAboutMe>
                </div>
                <div class="textWrapper"><p id="field3" class="contentText textField2"></p></div>
                <div class="textWrapper"><p id="field4" class="contentText textField2"></p></div>
                <div class="skillWrapper" id="htmlSymbol">HTML5</div>
                <div class="skillWrapper" id="cssSymbol">CSS3</div>
                <div class="skillWrapper" id="jsSymbol">JavaScript</div>
                <div class="skillWrapper" id="reactSymbol">React</div>
            </div>
        );
    }
}
  
export default AboutMeView;