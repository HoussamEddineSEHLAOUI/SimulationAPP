
import { Component } from 'react';
import './Table.css';




class Table extends Component {
  constructor(props){
    super(props);
    this.state={
      i:0
    }
  }

  //moyennne NCE
  MoyenneNCE(outputs){
    var moy = 0 ;
    outputs.forEach(element =>{
      moy=moy+element.NCE ;
    })
    return moy / outputs.length ;
  }

  //moyenne NCP
  MoyenneNCP(outputs){
    var moy = 0 ;
    outputs.forEach(element =>{
      moy=moy+element.NCP ;
    })
    return moy / outputs.length ;
  }

  //Moyenne TATmoy
  MoyenneTATmoy(outputs){
    var moy = 0 ;
    outputs.forEach(element =>{
      moy=moy+parseInt(element.TATmoy) ;
    })
    return moy / outputs.length ;
  }

  //moyenne TSmy
  MoyenneTSmy(outputs){
    var moy = 0 ;
    outputs.forEach(element =>{
      moy=moy+parseInt(element.TSmy) ;
    })
    return moy / outputs.length ;
  }

  // Moyenne tauxC1
  MoyennetauxC1(outputs){
    var moy = 0 ;
    outputs.forEach(element =>{
      moy=moy+element.tauxC1 ;
    })
    return moy / outputs.length ;
  }

  // Moyenne tauxC2
  MoyennetauxC2(outputs){
    var moy = 0 ;
    outputs.forEach(element =>{
      moy=moy+element.tauxC2 ;
    })
    return moy / outputs.length ;
  }

  // Moyenne tauxC3
  MoyennetauxC3(outputs){
    var moy = 0 ;
    outputs.forEach(element =>{
      moy=moy+element.tauxC3 ;
    })
    return moy / outputs.length ;
  }

  // Moyenne DFS
    MoyenneDFS(outputs){
      var moy = 0 ;
      outputs.forEach(element =>{
        moy=moy+element.DFS ;
      })
      return moy / outputs.length ;
    }

  render(){
    const outputs = this.props.outputs ;
    const page = this.props.page ;
    console.log(outputs)
    return (
      <div className="Table">
            <div class="table-wrapper">
                <table class="fl-table">
                    <thead>
                        <tr>
                            <th>No Simulation</th>
                            <th>NCE</th>
                            <th>NCP</th>
                            <th>TATmoy</th>
                            <th>TSmoy</th>
                            <th>TauC1</th>
                            <th>TauC2</th>
                            {page !==1
                              ? <th>TauC3</th>
                              :<></>
                            }
                            <th>DFS</th>
                        </tr>
                    </thead>
                    <tbody>
                    {outputs.map(output=>{
                          return(
                          <tr>
                              <td >{output.index+1}</td>
                              <td >{output.NCE}</td>
                              <td >{output.NCP}</td>
                              <td >{output.TATmoy} min</td>
                              <td >{output.TSmy} min</td>
                              <td >{output.tauxC1.toFixed(2)}</td>
                              <td >{output.tauxC2.toFixed(2)}</td>
                              {page !== 1
                              ? <td >{output.tauxC3.toFixed(2)}</td>
                              :<></>
                              }
                              <th>{output.DFS}</th>
                          </tr>
                          );
                      })}

                            <tr>
                              <td >Moyenne</td>
                              <td >{this.MoyenneNCE(outputs)}</td>
                              <td >{this.MoyenneNCP(outputs)}</td>
                              <td >{this.MoyenneTATmoy(outputs)}</td>
                              <td >{this.MoyenneTSmy(outputs)}</td>
                              <td >{this.MoyennetauxC1(outputs).toFixed(2)}</td>
                              <td >{this.MoyennetauxC2(outputs).toFixed(2)}</td>
                              {page !== 1
                              ? <td >{this.MoyennetauxC3(outputs).toFixed(2)}</td>
                              :<></>
                              }
                              <th>{this.MoyenneDFS(outputs)}</th>
                          </tr>

                    </tbody>
                </table>
            </div>
                
      </div>
    );
  }
}

export default Table;
