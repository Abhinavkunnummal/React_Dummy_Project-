import React from "react";
// import ListItem from "./listItem";
import Tools from "../components/Tools";
import SimpleList from "./simpleList";

let arr = [
  {
    id:1,
    title: "Appointment for October",
    descr: "The Patient is rescheduled to october",
    isActive: true,
  },
  {
    id:2,
    title: "Appointment for November",
    descr: "The Patient is rescheduled to November",
    isActive: false,
  },
  {
    id:3,
    title: "Appointment for Descember",
    descr: "The Patient is rescheduled to Descember",
    isActive: true,
  },
];

class List extends React.Component {

  constructor(props){
      super(props)
      this.state={
        data:arr,
        activeState:'all'
      }
  }

  onListChange=(event)=>{
    console.log(event.target.value);
    const value=event.target.value;
    
    // console.log(newList);
    // this.setState({
    //   data:newList
    // }) 

    this.setState({
      activeState:value
    })
  }

  handleDelete=(item)=>{
      console.log('Delete',item);
      const newList=this.state.data.filter((element)=>element.id!==item.id)

      this.setState({
        data:newList
      })
  }

  render() {
    const {
      data,
      activeState
    }=this.state
   const newList=data.filter((item)=>{
        if(activeState==='all'){
          return true
        }
        if(activeState==='active'){
          return item.isActive===true;
        }
        if(activeState==='inactive'){
          return item.isActive===false;
        }
        return false;
    });
    
    return (
      <Tools onAction={this.onListChange}>
          <SimpleList onAction={this.handleDelete} data={newList}/>
      </Tools>
    );
  }
}

export default List;
