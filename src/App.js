import Navbar from "./Components/Navbar";
import Main_Text from "./Components/Main_Text";
import Card from "./Components/Card";
import Card_Data from "./Card_Data";

console.log(Card_Data)

function App() {
  const cardData = Card_Data.map((data) => {
    return (
      <Card
        key={data.id}
        data={data}
        // {...data} => spread syntax, similar to breaking properties in app.js file
      />
    )
  })

  return (
    <div>
      <Navbar />
      <Main_Text /> 
      {cardData}
    </div>
  );
}

export default App;
