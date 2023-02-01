import { useEffect, useState } from "react";
import { userInfo } from "../zustand/store";

export default function useToken(url) {
  const { info, token } = userInfo();
  const [data, setData] = useState([]);

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