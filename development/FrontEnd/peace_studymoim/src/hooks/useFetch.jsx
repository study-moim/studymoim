import { useEffect, useState } from "react"

export default function useFetch (url) {
  const [data, setData] = useState([])

  useEffect(() => {
    // api호출
    fetch(url)
    .then(res => {
      return res.json()
    })
    .then(data => {
      setData(data)
    })
  }, [url])

  return data
}