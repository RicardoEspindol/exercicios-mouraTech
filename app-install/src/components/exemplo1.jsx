import React from "react";
import ReactDOM from "react";
import "../index.css"


class Timer extends React.Component{

    constructor(props){
        super(props);
        this.state =  {seconds: this.props.start}
    }
    tick() {
        this.setState(state => ({
          seconds: state.seconds + 1
        }));
      }
      startStop(){
        console.log("clicou no botao")
      }
    
      componentDidMount() {
        this.interval = setInterval(() => this.tick(), this.props.ms );
      }
    
      componentWillUnmount() {
        clearInterval(this.interval);
      }
    
      render() {
        return (
          <>
            <div className="bg-azulEscuro border-2 border-yellow-600 w-96 h-16 mb-4  mt-4 rounded-xl flex flex-col items-center justify-center m-auto">
              <h1 className="text-white text-5xl cronometro">Segundos: {this.state.seconds}</h1>
            </div>
            <button 
            onClick={() => this.startStop()}
            className="bg-azulEscuro text-white m-auto flex px-4 py-4 rounded-xl">Iniciar/Parar</button>
          </>
        );
      }
    
}

export default Timer;