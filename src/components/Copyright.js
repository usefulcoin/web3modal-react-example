import * as React from "react";

class Copyright extends React.Component {
  render() {
    return (
      <div className="App">
      {/* Start Copyright */}
        <div id="copyright">
          <ul><li>© {new Date().getFullYear()} SETTLEMENT DAO. ALL RIGHTS RESERVED.</li><li>APP CREATOR: <a href="https://twitter.com/shalaquiana">SHALAQUIANA</a></li></ul>
        </div>
      {/* End Copyright */}
      </div>
    );
  }
}

export default Copyright;
