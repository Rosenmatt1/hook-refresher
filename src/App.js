import './App.css';
import { useState, useMemo } from "react"
import { useFetch } from "./useFetch"

function App() {
  const [url, setUrl] = useState(null)
  const myOptions = useMemo(()=> ({ url}, [url]))
  const { data } = useFetch({myOptions})

  console.log("App rendering")

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
