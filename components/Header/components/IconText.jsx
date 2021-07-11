import React from "react";
import Link from 'next/link';    

export default function Icontext({ item }) {
  return (
    <div className='list__sublist__item' key={item.id}>
      <img
        src='https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3'
        alt='lol'
        className='img'
      />
       <Link href="/" passHref={true}>
       <div className='content'>
        {item.title} <br />
        {item.description}
      </div>
  </Link>
     
    </div>
  );
}
