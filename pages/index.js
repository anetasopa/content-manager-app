import React, { useState } from 'react';

function ComA(props) {
  return(
    <>
      <h1>Hi comA</h1>
      <div>Prop1: {props.myProp1}</div>
      <div>Prop2: {props.myProp2.toString()}</div>
      <div>Prop3: {props.myProp3}</div>
      <div>Prop4: {<props.myProp4 />}</div>
    </>
  )
}

class ComB extends React.Component {

   constructor() {
     super();
     this.state = {
        value: 10
      }
   }

  changeState(incrementor) {
    this.setState({
      value: incrementor
    })
  }

  render() {
    const { value } = this.state;
      
    return (
      <>
        <h1>Hello CompB</h1>
        Current Value: <h1>{ value }</h1>
        <button onClick={() => this.changeState(value + 1)}>+</button>
        <button onClick={() => this.changeState(value - 1)}>-</button>
      </>
    )
  }
}

function Home() {
  const [value, setValue] = useState(10);

  console.log(value);
  return (
    <>
      Current Value: <h1>{ value }</h1>
      <button onClick={() => setValue(value+1)}>+</button>
      <button onClick={() => setValue(value-1)}>-</button>
      <ComA 
        myProp1={value}
        myProp2={true}
        myProp3="I am comA"
        myProp4={() => <div>My new JSX</div>}
      />
      {/* <ComB /> */}
    </>
  )
}

export default Home;
