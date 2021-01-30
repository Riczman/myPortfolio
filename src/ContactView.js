import React from 'react';
import { ReactComponent as SVGName} from './portfolioName.svg';


class ContactView extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            
        }
    }
    
  
    render(){
        return(
            <div class="contactPageCard" id="card4">
                <div class="svgWrapper">
                    <SVGName></SVGName>
                </div>
                <div class="textWrapper"><p id="field7" class="contentText textField4"></p></div>
                <div class="textWrapper"><p id="field8" class="contentText textField4"></p></div>
            </div>
        );
    }
}
  
export default ContactView;