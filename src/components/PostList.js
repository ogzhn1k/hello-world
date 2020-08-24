import React, { Component } from 'react'
import axios from 'axios'
import World from './World'


class PostList extends Component {
	constructor(props) {
		super(props);

		this.state = {
      posts: [],
	  errorMsg: '',
	  user:'',
	  password:'',
	  control:false,
        }
       this.onC=this.onC.bind(this); 
    }
    onC(e){
        this.setState({[e.target.name]:e.target.value});

	}

	componentDidMount() { 
		axios
			.get('https://localhost:44397/api/users')
			.then(response => {
			
				this.setState({ posts: response.data })
				
			})
			.catch(error => {

        this.setState({errorMsg: 'Error retrieving data'})
			})
	}


	submitHandler = e => {

		e.preventDefault()

		for(let i=0;i<this.state.posts.length;i++){
			if(this.state.user==this.state.posts[i].Id&&this.state.password==this.state.posts[i].UserName){
				window.alert("Logged in succesfully :)");
				this.setState({control:true})	
			}
			
		}
	
	}

	render() {
		const { posts, errorMsg,user,password,control} = this.state
		
		if(control===true){
		return(<div>
				 <World name="datas" value={this.state.posts}></World>
			   </div>
		);
				
		}
		return (
            <div>
				<form onSubmit={this.submitHandler}> 
				     <p className='username'>ID:</p>
					<div>
					   <input type='text' name="user" onChange={this.onC} value={this.state.user} placeholder='Username'></input>
					</div>
				   <p className='password'>Username:</p>
				   <div>
				      <input type='text' name="password" onChange={this.onC} value={this.state.password} placeholder='Password'></input>
				   </div>
				   <button type='submit'>Login</button>
				</form>
				
        {errorMsg ? <div>{errorMsg}</div> : null}
			</div>
		)
		
		}

}

export default PostList