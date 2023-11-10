import "./App.css";
import Accueil from "./components/Accueil";
import AccueilF from "./components/AccueilF";
import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";
import PresentationHook from "./components/PresentationHook";
/*const todo = (
  <ol>
    <li>Working</li>
    <li>go shopping</li>
    <li>Dinner</li>
  </ol>
);
let x = "Bonjour";
var y = " tout";
const z = " le monde !";

const user = {
  prenom: "anis",
  nom: "assas",
};

var myStyle = {
  fontSize: 100,
  color: "#FF0000",
};

function formatName(user) {
  return user.prenom + "--" + user.nom;
}

const disBonjour = (user) => {
  if (user.prenom === "anis") {
  }
};

var number = [1, 4, 6, 7];
const max = number.reduce((a, b) => (a > b ? a : b));
const display = number.map((e, i) => <li key={i}>{e}</li>);*/
function App() {
  return (
    <>
      {/*<Navbar />*/}
      <Accueil />
      <PresentationHook />
    </>
  );
}

export default App;
