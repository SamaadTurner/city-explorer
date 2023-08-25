import React from "react";

class Error extends React.Component {

  render () {
    return (
      <>
        <span className="error-message"> Error Returned: {this.props.error}</span>
      </>
    )
  }
}

export default Error