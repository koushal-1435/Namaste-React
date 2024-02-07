const manyChild = [];

for(i = 0; i<=5; i++){
  manyChild.push(
    React.createElement("p",{key:i},"array data one")
  )
}


const maindiv = React.createElement("h1", { id: "mainDiv" }, manyChild);


console.log(maindiv )
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(maindiv);
