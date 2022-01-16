
import { Component } from 'react';
import './Formulaire.css';


class Formulaire extends Component {
  constructor(props){
    super(props);
    this.state={
      IX: 0,
      IY: 0,
      IZ: 0,
      nb: 0
    }
    this.onChangeHandlerNB = this.onChangeHandlerNB.bind(this);
    this.onChangeHandlerX = this.onChangeHandlerX.bind(this);
    this.onChangeHandlerY = this.onChangeHandlerY.bind(this);
    this.onChangeHandlerZ = this.onChangeHandlerZ.bind(this);
  }

  onChangeHandlerNB=(event)=>{
    this.setState({
        nb:event.target.value
    })
  }

  onChangeHandlerX=(event)=>{
    this.setState({
      IX:event.target.value
    })
  }

  onChangeHandlerY=(event)=>{
    this.setState({
      IY:event.target.value
    })
  }

  onChangeHandlerZ=(event)=>{
    this.setState({
      IZ:event.target.value
    })
  }

  submitChange2C = ()=>{
    const {IX , IY ,IZ ,nb}= this.state ;
    this.props.onChangeState(IX , IY ,IZ ,nb)
    this.props.goToPage(1)

  }

  submitChange3C = ()=>{
    const {IX , IY ,IZ ,nb}= this.state ;
    this.props.onChangeState(IX , IY ,IZ ,nb)
    this.props.goToPage(2)
  }

  

  render(){
    return (
      <div className="container">
        <h1>Simulation App</h1>
        <div className='form'>
            <div className="group">      
            <input type="text" required onChange={this.onChangeHandlerNB} />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Nombre de simulation</label>
            </div>
            
            <div className="group">      
            <input type="text" required onChange={this.onChangeHandlerX} />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>lX</label>
            </div>

            <div className="group">      
            <input type="text" required onChange={this.onChangeHandlerY}/>
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>lY</label>
            </div>

            <div className="group">      
            <input type="text" required onChange={this.onChangeHandlerZ}/>
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>lZ</label>
            </div>
        </div>
        <div className='panelControl'>
            <button className='btn2Caiss' onClick={()=>this.submitChange2C()}>Simuler deux caisses</button>
            <button className='btn3Caiss' onClick={()=>this.submitChange3C()}>Simuler trois caisses</button>
        </div>
      </div>
    );
  }
}

export default Formulaire;
