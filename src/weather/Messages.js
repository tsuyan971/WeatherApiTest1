import React from "react";

class Messages extends React.Component {
  render() {
    return (
      <div id="messages">
        <p id="advice">It might take about 2 seconds to load the statements.</p>
        <p id="error" />
        <div id="loadingif">
          <p>Loading...</p>
          <img
            alt="a"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/f1055231234507.564a1d234bfb6.gif"
            width="10%"
            height="10%"
          />
        </div>
      </div>
    );
  }
}
export default Messages;
