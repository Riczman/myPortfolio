import React from 'react';
import { ReactComponent as SVGName} from './portfolioName.svg';


class MainView extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            
        }
    }
    
  
    render(){
        return(
            <div class="mainPageCard" id="card1">
                <div class="svgWrapper">
                    <SVGName></SVGName>
                </div>
                <div class="textWrapper"><p id="field1" class="contentText textField1"></p></div>
                <div class="textWrapper"><p id="field2" class="contentText textField1"></p></div>
            </div>
        );
    }
}
  
export default MainView;