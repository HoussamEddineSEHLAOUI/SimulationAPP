
import { Component } from 'react';
import './App.css';
import Formulaire from './Components/Formulaire/Formulaire';
import Table from './Components/Table/Table';
import PageSimulatin2C from './Pages/PageSimulatin2C/PageSimulatin2C';
import PageSimulatin3C from './Pages/PageSimulatin3C/PageSimulatin3C';




class App extends Component {
  constructor(props){
    super(props);
    this.state={
      page : 1,
      IX: 0,
      IY: 0,
      IZ: 0,
      nb: 0
    }
  }

  onChangeState =(IX , IY ,IZ ,nb)=>{
    this.setState({IX : IX});
    this.setState({IY : IY});
    this.setState({IZ : IZ});
    this.setState({nb : nb}) ;
  }

  goToPage = (index) =>{
    this.setState({page : index})
  }

  render(){
    const page = this.state.page
    return (
      <div className="App">
        
        <div className='pagination'>
          {page === 1
          ?<PageSimulatin2C IX={this.state.IX} IY={this.state.IY} IZ={this.state.IZ} nb={this.state.nb}/>
          :<PageSimulatin3C IX={this.state.IX} IY={this.state.IY} IZ={this.state.IZ} nb={this.state.nb}/>
          }
        </div>
        <div className='panelControlSim'> 
          <Formulaire goToPage={this.goToPage} onChangeState={this.onChangeState}/>
        </div>
      </div>
    );
  }
}

export default App;
