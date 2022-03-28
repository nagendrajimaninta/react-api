import React,{useState,useEffect} from "react";
import "./style.css";

export default function App() {
  const [data,setData] = useState();
  const url = 'https://jsonplaceholder.typicode.com/todos';
  useEffect(()=>{
    fetch(url)
    .then(response=>response.json())
    .then((dat)=>setData(dat))
  })
  return (
    <div>
      <h1>Featching the data from the api</h1>
      <p>Api's  :)</p>
      <ol>
        {data && data.map((el)=>{ 
          return <li>{ el.title}</li>;
        })
        }
        {/* {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })} */}
      </ol>
    </div>
  );
}
