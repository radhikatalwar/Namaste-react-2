import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    // Create State Variables Here
    this.state = {
      userInfo: { name: "Radhika", location: "Delhi" },
    };
    console.log("Profile / constructor " + this.state.userInfo.name);
  }

  componentDidMount() {
    // API CALLS
    // const data = await fetch("https://api.github.com/users/radhikatalwar");
    // const json = await data.json();

    this.setState = {
      userInfo: { name: "Radhika Talwar", location: " New Delhi" },
    };
    console.log("Profile / componentDidMount " + this.state.userInfo.name);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.userInfo !== prevState.userInfo) {
      console.log("Anything you want to do when userInfo changes");
    }
    console.log("Profile / componentDidUpdate " + this.state.userInfo.name);
  }

  componentWillUnmount() {
    console.log("Profile / componentWillUnmount " + this.state.userInfo.name);
  }

  render() {
    return (
      <>
        <h1> Profile Class Component</h1>
        {/* <>{console.log(this)}</> */}
        <>{console.log("Profile / render " + this.state.userInfo.name)}</>
        <h2>Name : {this.state.userInfo.name}</h2>
        <h3>Location : {this.state.userInfo.location}</h3>
        {/* <button onClick={() => this.setState({ count: 1, count2: 3 })}>
          Set to 1 & 3
        </button> */}
      </>
    );
  }
}

export default ProfileClass;
