import React, { useEffect, useState } from "react"

export const useFetch = (options) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log(options)
    fetch(options.url)
      .then((response) => response.json())
      .then((json) => setData(json))
    }, [])


  return {
    data,
  }
}