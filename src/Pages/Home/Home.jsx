import React from "react";
import Banner from "./Banner";
import RaunbowExtention from "./RaunbowExtention";
import Built_for from "./Built_for";
import Keybord_Sortcart from "./Keybord_Sortcart";
import { Hundreds_wallets } from "./hundreds_wallets";
import All_chains from "./All_chains";
import Convenient_interface from "./convenient_interface";
import Swap_Expariance from "./Swap_Expariance";
import Your_Pokets from "./Your_Pokets";
import Notified_Money from "./notified_Money";
import Exclusive_drops from "./Exclusive_drops";
import Frequently from "./Frequently";

const Home = () => {
  return (
    <div className=" ">
      <Banner></Banner>
      <RaunbowExtention></RaunbowExtention>
      <Built_for></Built_for>
      <Keybord_Sortcart></Keybord_Sortcart>
      <Hundreds_wallets></Hundreds_wallets>
      <All_chains></All_chains>
      <Convenient_interface></Convenient_interface>
      <Swap_Expariance></Swap_Expariance>
      <Your_Pokets></Your_Pokets>
      <Notified_Money></Notified_Money>
      <Exclusive_drops></Exclusive_drops>
      <Frequently></Frequently>
    </div>
  );
};

export default Home;
