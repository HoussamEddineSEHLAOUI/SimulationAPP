
import { Component } from 'react';
import './Table.css';




class Table extends Component {
  constructor(props){
    super(props);
    this.state={
      i:0
    }
  }

  render(){
    const outputs = this.props.outputs ;
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
                        </tr>
                    </thead>
                    <tbody>
                    {outputs.map(output=>{
                          return(<tr>
                              <td >{output.index+1}</td>
                              <td >{output.NCE}</td>
                              <td >{output.NCP}</td>
                              <td >{output.TATmoy} min</td>
                              <td >{output.TSmy} min</td>
                              <td >{output.tauxC1.toFixed(2)}</td>
                              <td >{output.tauxC2.toFixed(2)}</td>
                          </tr>);
                          })}
                    </tbody>
                </table>
            </div>
                
      </div>
    );
  }
}

export default Table;
