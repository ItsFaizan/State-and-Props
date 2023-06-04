import { useState } from 'react';
import { sculptureList } from '../data.js';

export default function FirstComponent() {

  const [next, setNext] = useState(0);
  function clicknext(){
    setNext(next + 1);
  }

  function clickback(){
    setNext(next - 1);
  }


  let sc = sculptureList[next];
    return (
      <>
      <button onClick = {clicknext}>Go Ahead</button>
      <button onClick = {clickback}>Go Back</button>

      <h1>
        {sc.name} by {sc.artist}
      </h1>
      <h2>({next + 1} of {sculptureList.length})</h2>
      <img src={sc.url} alt={sc.alt}/>
      <p>{sc.description}</p>

      </>
    );
  }