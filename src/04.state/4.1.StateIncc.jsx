import React from "react";

export class State_Class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      Profile: {
        name: "santosh",
        age: 24,
        job: "self",
        ismarried: false,
      },
    };
  }

  render() {
    const {
      counter,
      Profile: { name, age, job, ismarried },
    } = this.state;

    console.log(counter, "c");

    return (
      <React.Fragment>
        <p>{counter}</p>
        <h4>
          i am {name} and i am {age} years old & currently i am {job} employ ,
          {ismarried ? "married" : " unmarried"} guy
        </h4>
        <h1>Stateclass components</h1>
        <button
          onClick={() => {
            this.setState({
              ...this.state,
              counter: counter + 1,
            });
          }}
        >
          click me
        </button>
      </React.Fragment>
    );
  }
}
export default State_Class;
