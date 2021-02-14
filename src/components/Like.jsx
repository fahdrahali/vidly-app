import React, { Component } from 'react';


class Like extends Component {
    render() { 
        return ( <div>
            <a onClick={this.props.onChange} 
            style = {{ 'cursor' :'pointer'}}  >
                <i className={this.getClass()} 
                aria-hidden="true"
                ></i></a>
                
            </div>
            );
    }


  getClass = () => {

    let classLike = 'fa';

    if (this.props.liked === true)
    return classLike += ' fa-heart'

    return classLike += ' fa-heart-o'
 }
}
export default Like;