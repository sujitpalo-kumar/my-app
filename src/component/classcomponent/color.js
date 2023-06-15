import React from "react";
import './color.css'

class Color extends React.Component {
    state = {
      btn_color:'button-red'
    };
    Click =(event)=>{
      this.setState({
        btn_color:'button-grey'
      })
    }
    render(){
      return(
        <div>
          <button 
            onClick={this.Click}
            className={this.state.btn_color}
            >
            click me
          </button>
        </div>
      
      
      )
    }
  }
  export default Color
//   ReactDOM.render(
//   <App/>,
//     document.querySelector('#root')
//   )