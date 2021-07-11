import React from "react";
import Link from 'next/link';    

export default function Smallicontext({ item }) {
  return (
  //   <Link href={item.link} passHref={true}><a><div className='smallicontext' key={item.id}><img
  //     src='https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3'
  //     alt=''
  //     className='img'
  //   />
  //   <div className='context'>{item.title}</div>
  // </div></a></Link>
   <div className='smallicontext'>
     <img
      src='https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3'
      alt=''
      className='img'
    />
    <Link href={item.link !== undefined? item.link : "/" } passHref={true}>
  <a className='context'>{item.title}</a>
</Link>
   </div>
  
  );
}
