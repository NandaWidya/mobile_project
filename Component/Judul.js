import React, {Component} from 'react';
import {Text} from 'react-native'

class Judul extends Component{
	render(){
		return (
			<Text style={salon.Judul}>{this.props.title}</Text>
			)
	}
}

const salon = {
	Judul : {
		color : "b40036",
		fontSize : 50,
		fontWeight : 'bold'
	}
}

export default Judul ;