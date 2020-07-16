import React from 'react';
import ReactDOM from 'react-dom';


class OneButton extends React.Component {
  constructor(props){
    super(props);
    this.state={
      color: props.color
    }
  }
  playSound=()=>{
    var sound = new Audio(this.props.url);
    sound.play();
  }
  render(){
    let color = this.props.color
    return(
        <button style={{width:100,height:100,margin:5,backgroundColor:color,borderRadius:30}} id={this.props.id} onClick={this.playSound}>{this.props.buttonName}</button>
    )
  }
}

class Board extends React.Component{
  KeyFunction=(event)=>{
    let valid = [81,87,69,82,65,83,68,70,90,88,67,86]
    var exists = valid.includes(event.keyCode);
    if(exists){
      var pressed = document.getElementById(event.keyCode)
      pressed.click();
    }
  }
  componentDidMount(){
    document.addEventListener("keydown", this.KeyFunction, false);
  }
  render(){
    return (
        <div >
        <OneButton url="bass1.mp3" id="81" buttonName="Bass 1(Q)" color="#ed9751"/>
        <OneButton url="bass2.mp3" id="87" buttonName="Bass 2(W)" color="#ed9751"/>
        <OneButton url="bass3.mp3" id="69" buttonName="Bass 3(E)" color="#ed9751"/>
        <OneButton url="bass4.mp3" id="82" buttonName="Bass 4(R)" color="#ed9751"/>
        <br/>
        <OneButton url="drum1.mp3" id="65" buttonName="Drum 1(A)" color="#e8736b"/>
        <OneButton url="drum2.mp3" id="83" buttonName="Drum 2(S)" color="#e8736b"/>
        <OneButton url="drum3.mp3" id="68" buttonName="Drum 3(D)" color="#e8736b"/>
        <OneButton url="drum4.mp3" id="70" buttonName="Drum 4(F)" color="#e8736b"/>
        <br/>
        <OneButton url="beat1.mp3" id="90" buttonName="Beat 1(Z)" color="#6be871"/>
        <OneButton url="beat2.mp3" id="88" buttonName="Beat 2(X)" color="#6be871"/>
        <OneButton url="beat3.mp3" id="67" buttonName="Beat 3(C)" color="#6be871"/>
        <OneButton url="beat4.mp3" id="86" buttonName="Beat 4(V)" color="#6be871"/>
        <br/>
        <OneButton buttonName="Drum 1" color="#6bcbe8"/>
        <OneButton buttonName="Drum 2" color="#6bcbe8"/>
        <OneButton buttonName="Drum 3" color="#6bcbe8"/>
        <OneButton buttonName="Drum 4" color="#6bcbe8"/>
        <br/>
        <OneButton buttonName="Piano 1" color="#b46be8"/>
        <OneButton buttonName="Piano 2" color="#b46be8"/>
        <OneButton buttonName="Piano 3" color="#b46be8"/>
        <OneButton buttonName="Piano 4" color="#b46be8"/>
        <br/>
      </div>
    )
  }
}
ReactDOM.render(<Board/>, document.getElementById('root'));
