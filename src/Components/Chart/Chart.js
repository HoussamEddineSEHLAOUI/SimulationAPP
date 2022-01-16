import './Chart.css';
import data from './data'
import {
	LineChart,
	ResponsiveContainer,
	Legend, Tooltip,
	Line,
	XAxis,
	YAxis,
	CartesianGrid
} from 'recharts';
import { Component } from 'react';

class Chart extends Component{	
	render(){
		const data = this.props.data ;
		console.log(data)
		return (
			<div className='chartContainer'>
				<h1 className="text-heading">
					Graphe
				</h1>
				<ResponsiveContainer width="100%" aspect={3}>
					<LineChart data={data} margin={{ right: 60 }}>
						<CartesianGrid />
						<XAxis dataKey="index" interval={'preserveStartEnd'} />
						<YAxis ></YAxis>
						<Legend />
						<Tooltip />						
						<Line 
							dataKey="NCP"
							stroke="#8884d8" 
							activeDot={{ r: 8 }} />
					</LineChart>
				</ResponsiveContainer>
			</div>
		);
	}
}

export default Chart;
