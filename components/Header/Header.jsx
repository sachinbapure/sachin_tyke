import React from "react";
import { menuApi } from "../../utils/api";
import Navbar from "./Navbar/Navbar";
import Navres from "./Navbar/NavResponsive";

export default function Header() {

  const [menu,setMenu] = React.useState(["products","developers","company"])
  const [finalMenu, setFinalMenu] = React.useState({})
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {

    menu.map(function(item, i){
    (async function () {
      try {
        const menuItems = await menuApi({
          item
        });
        // if (typeof menuItems === 'object' && menuItems !== null) {
        //     console.log(typeof menuItems,"object")
        // }
        // else {
          setFinalMenu(prevState => ({
            ...prevState,
            [item]: menuItems
        }));
        setTimeout(console.log(finalMenu,"menu"), 3000);


        // }
       
      } catch (err) {
          console.log(err)
      }
      return finalMenu
    })();
  })
  }, []);

  React.useEffect(() => {
    if (menu.length == Object.keys(finalMenu).length) {
      setLoading(false)
    }
    else {
      setLoading(true)
    }
  }, [loading,finalMenu])

  if (loading) {
    return (
      <>
        ....Loading
      </>
    )
   
  }

  return (
    <div className='header'>
      <div className='bigNav' >
        <Navbar finalMenu = {finalMenu}/>
      </div>
      <div className='smallNav' >
        <Navres finalMenu = {finalMenu}/>
      </div>
    </div>
  );
}
