import React, { useEffect, useState, useRef, useLayoutEffect } from "react"

export const useFetch = (options) => {
  console.log("options", options)
  const [data, setData] = useState(null);

  let useCallbackRef = (callback) => {
    let callbackRef = useRef(callback)
    //useLayoutEffect is synchornis
    useLayoutEffect(() => {
      callback.current = callback
    }, [callback])
    return callbackRef
  }

  // let savedOnSuccess = useCallbackRef(options.onSuccess)
  let savedOnSuccess = useRef(options.onSuccess)
  console.log("savedOnSuccess", savedOnSuccess)

  useEffect(() => {
    if (options.url) {
      let isCancelled = false
      fetch(options.url)
        .then((response) => response.json())
        .then((json) => {
          if (!isCancelled) {
            savedOnSuccess.current?.(json)
            setData(json)
          }
        })
      return () => {
        isCancelled = true
      }
    }
  }, [options.url, options.onSuccess])


  return {
    data,
  }
}