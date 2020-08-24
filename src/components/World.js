import React, { Component } from 'react'

class World extends Component {
    
    render() {
        const data=this.props.value;
        console.log(data)
        return(<div>
            <h1>Hello {this.props.name}</h1>
            </div>
            ) ;
    };
}
export default World
