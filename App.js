const maindiv = React.createElement("h1", {id:"mainDiv"} ,[ React.createElement("p", {className:"childdiv"} , "this is the data"), React.createElement("p", {className:"childdiv"} , "this is the data"), React.createElement("p", {className:"childdiv"} , "this is the data")]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(maindiv);