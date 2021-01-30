import React from 'react';
import MainView from './MainView.js';
import {ReactComponent as SVGCircle} from './portfolioCircle.svg';
import {BrowserView,MobileView} from "react-device-detect";
import AboutMeView from './AboutMeView.js';
import ProjectsView from './ProjectsView.js';
import ContactView from './ContactView.js';

class App extends React.Component{
  constructor(props){
		super(props);
		this.state = {
      currentCard: 1,
      renderSVG: 1,
      textFields: [ "Lorem ipsum dolor ",
                    "Sed ut perspiciatis.",
                    "I am a self-thought junior frontend developer. Currently I am studing Mechatronic Engineering at AGH University of Science and Technology in Cracow. I love learning about new technologies and trends in web developement. What I lack in experience, I make up with creativity and willingnes to learn.",
                    "Technologies I work with:"]
    }
    this.textFieldsNumbers = [[1,2],[3,4],[-1,-1],[-1,-1]];
    this.typeWriterSpeed = 20;
    this.noStartingPoints = 8;
    this.textPartsArr = [];
    this.textPartsOutArr = [];
    this.startAnimHandler();

    this.startTypewriter = this.startTypewriter.bind(this);
    this.startTypewriter(this.textFieldsNumbers[0]);
	}
  
  startAnimHandler(){
    setTimeout(() => {
      let arr = document.getElementsByClassName("menuElTextCont");
      for(let i = 0; i < arr.length; i++)
      {
        arr[i].style.borderStyle = 'solid';
      }
      this.setState({
        renderSVG: 0
      });
    }, 2000);
  }
  
  changeCursorToActive(){
    let cursor = document.getElementById("customCoursorOuter");
    cursor.style.width = "20px";
    cursor.style.height = "20px";
    cursor.style.borderRadius = "10px";
  }

  changeCursorToDefault(){
    let cursor = document.getElementById("customCoursorOuter");
    cursor.style.width = "32px";
    cursor.style.height = "32px";
    cursor.style.borderRadius = "16px";
  }

  renderCircle(){
    if(this.state.renderSVG == 1)
    {
      return(<SVGCircle></SVGCircle>);
    }else{
      return(<></>);
    }
  }

  startTypewriter(fieldsNumbers)
  {
    
    let startingField = fieldsNumbers[0];
    let endingField = fieldsNumbers[1];
    if(endingField != -1 && startingField != -1)
    {
      let textFieldsTemp = this.state.textFields.slice(0);
      this.textPartsArr = [];
      this.textPartsOutArr = [];
      for(let i = startingField; i <= endingField; i++)
      {
          let lengthToCut = Math.floor(textFieldsTemp[i-1].length/this.noStartingPoints);
          let singleFieldTextParts = [];
          let textFieldsOutTemp = [];
          
          for(let j = 1; j < this.noStartingPoints;j++)
          {
              singleFieldTextParts.push( textFieldsTemp[i-1].substring(0,lengthToCut) );
              textFieldsTemp[i-1] = textFieldsTemp[i-1].substring(lengthToCut);
              textFieldsOutTemp.push("");
          }
          singleFieldTextParts.push(textFieldsTemp[i-1]);
          textFieldsOutTemp.push("");
          this.textPartsArr.push(singleFieldTextParts);
          this.textPartsOutArr.push(textFieldsOutTemp);
      }
      
      console.log(this.textPartsArr);

      var self = this;
      this.animationId = setInterval((self, startingField, endingField)=>{
          let isFinished = true;
          for(let i = 0; i <= endingField-startingField; i++)
          {
              for(let j = 0; j < self.noStartingPoints; j++)
              {
                  if(self.textPartsArr[i][j] != '')
                  {
                      this.textPartsOutArr[i][j] += this.textPartsArr[i][j].substring(0,1);
                      this.textPartsArr[i][j] = this.textPartsArr[i][j].substring(1);
                      isFinished = false;
                  }
              }
              document.getElementById("field"+(i+startingField)).innerHTML = this.textPartsOutArr[i].join("");
          }
          if(isFinished){
              clearInterval(self.animationId);
          }
      },this.typeWriterSpeed, self, startingField, endingField);
    }
  }

  slideCard(toCard){
    if(toCard != this.state.currentCard)
    {
      let vector = toCard < this.state.currentCard ? 1 : -1;
      document.getElementById("card"+this.state.currentCard).style.transform = "translateY(-50%) scale(0.8)";
      document.getElementById("card"+toCard).style.visibility = "visible";
      setTimeout((vector, toCard) => {
        document.getElementById("card"+this.state.currentCard).style.top = 100*vector + 'vh';
        for(let i = 1; i <= 4; i++){
          if(i != toCard && i != this.state.currentCard)
          {
            console.log('moving card ' + i);
            document.getElementById("card"+i).style.visibility = "hidden";
            if(i < toCard)
            {
              document.getElementById("card"+i).style.top = "-100vh";
            }else{
              document.getElementById("card"+i).style.top = "100vh";
            }
          }
        }
        this.state.currentCard = toCard;
        document.getElementById("card"+this.state.currentCard).style.top = "0px";
      },500,vector,toCard);
      setTimeout(() => {
        let arr = document.getElementsByClassName("textField" + (this.state.currentCard + vector));
        for(let i = 0; i < arr.length; i++)
        {
          arr[i].innerHTML = "";
        }
        this.startTypewriter(this.textFieldsNumbers[this.state.currentCard-1]);
        document.getElementById("card"+this.state.currentCard).style.transform = "translateY(-50%) scale(1)";
      },1000,vector);
    }
  }

	render(){
    return(
    <div class="centeredVp">
      <BrowserView>
      <div class="cardWrapper">
          <MainView/>
          <AboutMeView/>
          <ProjectsView/>
          <ContactView/>
      </div>
      <div class="sideMenu">
        <div class="sideMenuEl">
            <div id="circle1" class="svgCircleContainer">
            {this.renderCircle()}
            </div>
            <div class="menuElTextCont" id="menuText1" onClick={() => this.slideCard(1)} onMouseEnter={this.changeCursorToActive} onMouseLeave={this.changeCursorToDefault}>
              <p class="menuText">Home</p>
            </div>
        </div>
        <div class="sideMenuEl">
            <div id="circle2" class="svgCircleContainer">
            {this.renderCircle()}
            </div>
            <div class="menuElTextCont" id="menuText2" onClick={() => this.slideCard(2)} onMouseEnter={this.changeCursorToActive} onMouseLeave={this.changeCursorToDefault}>
            <p class="menuText">About me</p>
            </div>
        </div>
        <div class="sideMenuEl">
            <div id="circle3" class="svgCircleContainer">
            {this.renderCircle()}
            </div>
            <div class="menuElTextCont" id="menuText3" onClick={() => this.slideCard(3)} onMouseEnter={this.changeCursorToActive} onMouseLeave={this.changeCursorToDefault}>
            <p class="menuText">Projects</p>
            </div>
        </div>
        <div class="sideMenuEl">
            <div id="circle4" class="svgCircleContainer">
            {this.renderCircle()}
            </div>
            <div class="menuElTextCont" id="menuText4" onClick={() => this.slideCard(4)} onMouseEnter={this.changeCursorToActive} onMouseLeave={this.changeCursorToDefault}>
            <p class="menuText">Contact</p>
            </div>
        </div>
      </div>
      </BrowserView>

      <MobileView>
      </MobileView>
    </div>
    );
  }
}

export default App;
