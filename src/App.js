import {useState} from 'react';
import './App.css';


function App() {
  const [weight,setWeight] = useState();
  const [bottles,setBottles] = useState();
  const [time, setTime] = useState();
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsLeft = grams - (burning * time);
    let alcoholinblood

    if (gender== "male"){
      alcoholinblood = gramsLeft / (weight * 0.7)

    } else {
      alcoholinblood = gramsLeft / (weight * 0.6)

    }
      setResult(alcoholinblood)

  }

  return (
    <form onSubmit={handleSubmit}>
        <h3>Calculatin blood alcohol</h3>
        <div>
          <label>Weight</label>
          <input name="weight" type="number" step="1" value={weight} onChange={e => setWeight(e.target.value)}></input>
        </div>
        <div>
          <label>Bottles</label>
          <input name="bottles" type="number" step="1" value={bottles} onChange={e => setBottles(e.target.value)}></input>
        </div>
        <div>
          <label>Time</label>
          <input name="time" type="number" step="1"value={time} onChange={e => setTime(e.target.value)}></input>
        </div>
        <div>
          <label>Gender</label>
          <input type="radio" name="gander" value="male" defaultChecked onChange={e => setGender(e.target.value)}  /><label>Male</label>
          <input type="radio" name="gander" value="female" onChange={e => setGender(e.target.value)} /><label>Female</label>
        </div>
        <div>
          <output> {result.toFixed(2)} </output>
        </div>
        <button>Calculate</button>

    </form>
  );
}

export default App;
