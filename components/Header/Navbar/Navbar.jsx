import React from "react";
import Icontext from "../components/IconText";
import Singleicontext from "../components/SingleIconText";
import Singletext from "../components/SingleText";

export default function Navbar(props) {
  const {finalMenu} = props;
  const arr = [
    { id: 1, top: "item top", bottom: "item bottom" },
    { id: 2, top: "item top", bottom: "item bottom" },
    { id: 3, top: "item top", bottom: "item bottom" },
    { id: 4, top: "item top", bottom: "item bottom" },
    { id: 5, top: "item top", bottom: "item bottom" },
    { id: 6, top: "item top", bottom: "item bottom" },
  ];
  const smarr = [
    { id: 1, top: "item top", bottom: "item bottom" },
    { id: 2, top: "item top", bottom: "item bottom" },
    { id: 3, top: "item top", bottom: "item bottom" },
    { id: 4, top: "item top", bottom: "item bottom" },
  ];

  const iconText = [
    { id: 1, top: "item top" },
    { id: 2, top: "item top" },
    { id: 3, top: "item top" },
    { id: 4, top: "item top" },
  ];

  React.useEffect(() => {
    if(finalMenu != null) {
      console.log(finalMenu,"menu in navbar")
    }
   
  }, [])

  return (
    <nav className='nav__big'>
      <div className='logo'>Stripe</div>
      <ul className='list'>
        <li className='list__item item1'>
          Products
          <div className='list__content'>
            <div className='list__sublist'>
              <div className='heading'>Payments</div>
              {finalMenu['products'].map((item) => {
                return <Icontext item={item} />;
              })}
            </div>
            <div className='list__sublist'>
              <div className='heading'>Financial Services</div>
              {finalMenu['products'].map((item) => {
                return <Icontext item={item} />;
              })}
            </div>
            <div className='list__sublist'>
              <div className='heading'>Business Operations</div>
              {finalMenu['products'].map((item) => {
                return <Icontext item={item} />;
              })}
            </div>
          </div>
        </li>

        <li className='list__item item3'>
          Developers
          <div className='list__content content-wide sublist__modified'>
            <div className='icon__subhead'>
              <Icontext item={{"title":"Documentation"}} />
            </div>
            <div className='list__sublist list__modified'>
              <div className='sublist__content'>
                <div className='sublist__content__head'>Get Started</div>
                {finalMenu['developers']['getStarted'].map((item) => {
                  return (
                    <>
                      <div className='single__text' key={item.title}>
                        {item.title}
                      </div>
                    </>
                  );
                })}
              </div>
              <div className='sublist__content'>
                <div className='sublist__content__head'>Guides</div>
                {finalMenu['developers']['popular_topics'].map((item) => {
                  return <Singletext item={item} />;
                })}
              </div>
            </div>
          </div>
        </li>
        <li className='list__item item4'>
          Company
          <div className='list__content content-modified'>
            <div className='list__sublist subblist__modified__2'>
              {finalMenu['company'].map((item) => {
                return <Singleicontext item={item} />;
              })}
            </div>
          </div>
        </li>
        <li className='list__item item5'>Pricing</li>
      </ul>

      <div className='support'>Support</div>
    </nav>
  );
}
