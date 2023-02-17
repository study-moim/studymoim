import { useEffect, useState } from "react";

export default async function useFetchObject(url) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((want) => {
        setData(want);
      });
  }, []);
  return data;
}