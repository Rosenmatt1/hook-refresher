
import { useEffect, useState } from "react"
import { useFetch } from "./useFetch"
import './App.css';

const useStopWatch = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(`count = ${count}`)
      setCount((prev) => prev + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, []) //useEffect would keep getting rerun if count was a dependency
  return count

  //   (console.log("useEffect is run"))
  //   if (count >= 10) {
  //     return
  //   }
  //   else if (count < 10) {
  //     setCount(count + 1)
  //   }

  //   console.log(count)
  // }, [count])
  // return count

}


function App() {
  const [url, setUrl] = useState(null)
  const count = useStopWatch()
  const { data } = useFetch({ url })


  return (
    <div className="App">
      <div>Hello</div>
      <div> {count} </div>
      <div> {JSON.stringify(data)} </div>
      <div>
        <button onClick={() => setUrl("/jack.json")}> Jack </button>
        <button onClick={() => setUrl("/sally.json")}> Sally </button>
      </div>
    </div>
  );
}

export default App;
