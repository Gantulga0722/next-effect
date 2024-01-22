import { data } from "autoprefixer";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    async function getSData() {
      const getData = await fetch("https://randomuser.me/api/");
      const data = await getData.json();
      console.log(data);
      setUserName(data.results[0].name.first);
    }
    getSData();
  }, []);

  return <div>{userName}</div>;
}
