import { useEffect, useState } from "react";

export default function useFetchObject(url) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, [url]);
  return data;
}