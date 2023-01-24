import React, { useEffect, useState, useRef, useLayoutEffect } from "react"

let useCallbackRef =  (callback) => {
  let callbackRef = useRef(callback)
  //useLayoutEffect is synchornis
  useLayoutEffect(() => {
    callback.current = callback
  }, [options.onSuccess])
  return callbackRef
}


export const useFetch = (options) => {
  const [data, setData] = useState(null);

  // let savedOnSuccess = useCallbackRef(options.onSuccess)
  let savedOnSuccess = useRef(options.onSuccess)

  useEffect(() => {
    if (options.url) {
      fetch(options.url)
        .then((response) => response.json())
        .then((json) => {
          savedOnSuccess.current?.(json)
          setData(json)
          console.log("useEffect", data)
        })
    }
  }, [options.url, options.onSuccess])


  return {
    data,
  }
}