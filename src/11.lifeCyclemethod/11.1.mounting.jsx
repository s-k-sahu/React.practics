import React from "react";

class Mounting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "_santosh kumar",
      age: -24,
      iam: "__mhgvhv",
      hii: "_hello",
    };
    console.log("i am constructor +1" + this.state.name);
  }
  static getDerivedStateFromProps(props, state) {
    return {
        ...state,
        name:"bando pelo"
    }
  }
  componentDidMount(props, state) {
    console.log("i am componen tDidMoun +2" + this.state.iam);
  }

  render(state) {
    console.log("i am from render +3 " + this.state.hii);
    return <h1>i am render {this.state.name}</h1>;
  }
}
export default Mounting;
