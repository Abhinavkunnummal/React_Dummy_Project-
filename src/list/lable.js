import React from "react";
import './label.css';


class Label extends React.Component{
    render(){
        const props=this.props;
        const style=props.isActive?{background:'green'}:{background:'red'}
        return <span onClick={props.onAction} className="list-label-item" style={style}>{props.isActive?'Active':'Inactive'}</span>
    }
}

export default Label;