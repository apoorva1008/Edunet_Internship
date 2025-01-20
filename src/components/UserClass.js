import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state={
            count: 0,
        }

    }
    render(){
        const {name,place}=this.props;
        const{count}=this.state;

        return(
        <div className="user-card">
            <h3>Count: {count}</h3>
            <h3>Name: {name}</h3>
            <h3>Place: {place}</h3>
            <h3>Contact - sushilpatil1085@gmail.com</h3>
        </div>
       
    )}
}

export default UserClass;