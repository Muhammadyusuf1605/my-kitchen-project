import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

function Home() {
  const [data, setData] = useState('')
  const url = 'http://localhost:3000/data'
  const date = useFetch(url)
  useEffect(() => {
    console.log(date);
  }, [url])
  return (
    <div>
      <h2>Hello</h2>
    </div>
  );
}

export default Home;
