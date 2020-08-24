import React, { Component } from 'react'

export class defo extends Component {
    render() {
        return (
            <form onSubmit={this.submitHandler}> 
				     <p className='username'>Username:</p>
					<div>
					   <input type='text' name="user" onChange={this.onC} value={this.state.user} placeholder='Username'></input>
					</div>
				   <p className='password'>Password:</p>
				   <div>
				      <input type='text' name="password" onChange={this.onC} value={this.state.password} placeholder='Password'></input>
				   </div>
				   <button type='submit'>Login</button>
				</form>
        )
    }
}

export default defo
