import "./App.css";
const axios = require("axios");

function App() {
  function doFetch() {
    var data = JSON.stringify({
      query:
        'query Query {postsByUser(userId: "mulefish") {content}    currentUser {posts {content, userId}}}',
    });

    var config = {
      method: "post",
      url: "http://localhost:4001",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        alert("Look at the console! ");
      })
      .catch(function (error) {
        alert("oh no " + error);
        console.log(error);
      });
  }

  return (
    <div className="App">
      <button
        onClick={() => {
          doFetch();
        }}
      >
        Fetch!!
      </button>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
