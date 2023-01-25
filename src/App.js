
import { useState } from "react"
import { useFetch } from "./useFetch"
import './App.css';

function App() {
  const [url, setUrl] = useState(null)
  const { data } = useFetch({url})

  console.log("App", data)

  return (
    <div className="App">
      <div>Hello</div>
      <div> {JSON.stringify(data)} </div>
      <div>
        <button onClick={() => setUrl("/jack.json")}> Jack </button>
        <button onClick={() => setUrl("/sally.json")}> Sally </button>
      </div>
    </div>
  );
}

export default App;
