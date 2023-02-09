import { useEffect, useState } from "react";
import tokenInformation from "../zustand/token";

export default function useToken(url) {
  const [data, setData] = useState([]);
  const { token } = tokenInformation();
  
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, [url]);

  return data
}