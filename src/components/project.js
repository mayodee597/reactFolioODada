import React, {Component} from 'react';
class Project extends Component{
    render(){
        return (
            <div className='project'>
                <h1>{this.props.title}</h1>
                <img src={this.props.img} alt= {this.props.title}></img>
                <br />
                <a href={this.props.url}>{this.props.url}</a>
                <br />
                <hr></hr>
           
            </div>
        )
    }
}
export default Project;
