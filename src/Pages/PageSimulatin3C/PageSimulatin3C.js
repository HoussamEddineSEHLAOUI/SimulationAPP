
import { Component } from 'react';
import Chart from '../../Components/Chart/Chart';
import Table from '../../Components/Table/Table';
import './PageSimulatin3C.css';
import MyService from "../../Services/MyService";




class PageSimulatin3C extends Component {
  constructor(props){
    super(props);
    this.state={
      showGraphe : false ,
      outputs:[],
      data:[],
    }
  }

  componentDidMount() {
    this.setState({
        outputs:MyService.effetuerSimulation3(this.props.nb,this.props.IX, this.props.IY, this.props.IZ)
    })

  }

  createMap =()=>{
    let list = []
    for(let i=0;i<this.state.outputs.length;i++){
        list.push({
            index:this.state.outputs[i].index+1,
            NCP:this.state.outputs[i].NCP,
        })
    }
    return list
  }

  showGraphe = (val)=>{
    this.setState({showGraphe : val}) ;
    this.setState({isChartHidden:false,data:this.createMap()}) ;
  }

  render(){
    const {showGraphe ,outputs ,data}= this.state ;
    return (
      <div className="page3C">
        <h1>Simulation de trois Caisses</h1>
        <Table outputs={outputs}/>
        <button 
          onClick={()=>this.showGraphe(!showGraphe)}
          className='DessinerGraphe1'>Dessiner graphe</button>
        {showGraphe 
        ?<Chart data={data}/>
        :<></>
        }
      </div>
    );
  }
}

export default PageSimulatin3C;
