import { Component } from "react";

import { Navigate } from "react-router-dom";

class Home extends Component {
  state = {
    print: false,
  };
  render() {
    const { print } = this.state;
    return (
      <>
        {print && <Navigate to="/print" />}
        <div>
          <h1>hii</h1>
          <button onClick={() => this.setState({ print: true })}>Print</button>
        </div>
      </>
    );
  }
}

export default Home;
