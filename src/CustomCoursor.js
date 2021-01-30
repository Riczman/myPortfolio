import React from 'react';
class MainView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
        this.initCoursor();
    }

    initCoursor(){
        document.addEventListener("mousemove", (e) => {
            document.getElementById("customCoursor").style.top = e.clientY + 'px';
            document.getElementById("customCoursor").style.left = e.clientX + 'px';
        });
    }
    
    render(){
        return(
        <div id="customCoursor">
            <div id="customCoursorOuter">
            </div>
        </div>
        );
    }
}
  
export default MainView;