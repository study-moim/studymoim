import { useEffect, useState } from "react"

export default function useFetch (url) {
  const [data, setData] = useState([])

  useEffect(() => {
    // api호출
    fetch(url)
    .then(res => {
      // console.log(res,"이곳은 커스텀훅입니다 성공입니다")
      return res.json()
      // return res
    })
    .then(data => {
      setData(data)
    })
  }, [url])

  return data
}