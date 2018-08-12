import React, {Component} from 'react'
import { browserHistory } from 'react-router'

/**
 * Component, for displaying ethical ad from CodeFund.
 */
class CodeFundWidget extends Component {
  componentDidMount() {
    this.unlisten = browserHistory.listen((location) => {
      if (location.action == "PUSH") {
        document.getElementById("codefund_ad").innerHTML = "";
        window._codefund.serve();
      }
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    return (
      <div ref="codefund" id="codefund_ad" />
    );
  }
}

export default CodeFundWidget
