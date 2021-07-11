import React from "react";
import Link from 'next/link';    

export default function Singletext({ item }) {
  return (
    
    <div className='single__text' key={item.id}>

    <Link href={item.link} passHref={true}>
  <a>{item.title}</a>
</Link>
</div>

  //     <Link href={item.link} passHref={true}>
  //      <div className='single__text' key={item.id}>
  //     {item.title}
  // </Link>
  );
}
