import React from "react";
import Smallicontext from "../components/Smallicontext";

export default function Navres(props) {
  const {finalMenu} = props;

  const arr = [
    { id: 1, text: "My text" },
    { id: 2, text: "My text" },
    { id: 3, text: "My text" },
    { id: 4, text: "My text" },
    { id: 5, text: "My text" },
    { id: 6, text: "My text" },
    { id: 7, text: "My text" },
    { id: 8, text: "My text" },
    { id: 9, text: "My text" },
    { id: 10, text: "My text" },
    { id: 11, text: "My text" },
    { id: 12, text: "My text" },
    { id: 13, text: "My text" },
  ];
  const sm = [
    { id: 1, text: "My text" },
    { id: 2, text: "My text" },
    { id: 3, text: "My text" },
    { id: 4, text: "My text" },
    { id: 5, text: "My text" },
    { id: 6, text: "My text" },
    { id: 7, text: "My text" },
    { id: 8, text: "My text" },
  ];
  const supsm = [
    { id: 1, text: "My text" },
    { id: 2, text: "My text" },
    { id: 3, text: "My text" },
    { id: 4, text: "My text" },
    { id: 5, text: "My text" },
    { id: 6, text: "My text" },
  ];
  React.useEffect(() => {
    if(finalMenu != null) {
      console.log(finalMenu,"menu in navbar")
    }
   
  }, [])

  const openMenu = () => {
    document.querySelector(".navres__cover").classList.add("navopen");
  };
  const closeMenu = () => {
    document.querySelector(".navres__cover").classList.remove("navopen");
  };

  return (
    <>
      <nav className='navres'>
        <div className='logo'>Stripe</div>
        <div
          className='menu'
          onClick={openMenu}
          style={{
            fontSize: "2rem",
            cursor: "pointer",
          }}
        >
          =
        </div>
      </nav>
      <div className='navres__cover'>
        <div className='navcross' onClick={closeMenu}>
          &#9587;
        </div>
        <div className='section-products'>
          <div className='heading'>Products</div>
          <div className='items'>
            {finalMenu['products'].map((item) => (
              <Smallicontext item={item} />
            ))}
          </div>
        </div>

        <div className='section-devs'>
          <div className='heading'>Developers</div>
          <div className='items'>
            {finalMenu['developers']['getStarted'].map((item) => (
              <Smallicontext item={item} />
            ))}
          </div>
        </div>
        <div className='section-company'>
          <div className='heading'>Company</div>
          <div className='items'>
            {finalMenu['company'].map((item) => (
              <Smallicontext item={item} />
            ))}
          </div>
        </div>
        <div className='prc'>Pricing</div>
        <div className='srt'>Support</div>
      </div>
    </>
  );
}
