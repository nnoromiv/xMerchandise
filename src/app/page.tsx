"use client"

import { Ads, Hero, NavBar, Store } from "../../components";
import { STORE_CONTENT } from "../../constants";
import { useToggler } from "../../hooks";


export default function Home() {
  const {handleMenu, show} = useToggler()

  return (
    <main>
      <NavBar super={{ handleMenu:handleMenu, show:show}}/>
      <Hero show={show} />
      {
        STORE_CONTENT.map((content, index) => (
          <Store key={index} super={{ show:show }} storeTitle={content.storeTitle} storeItems={content.storeItems} />
        ))
      }
      <Ads show={show} />
    </main>
  );
}
