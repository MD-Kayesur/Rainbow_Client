import React from 'react';
import Banner from './Banner';
import RaunbowExtention from './RaunbowExtention';
import Built_for from './Built_for';
import Keybord_Sortcart from './Keybord_Sortcart';
import { Hundreds_wallets } from './hundreds_wallets';
import All_chains from './All_chains';
 

const Home = () => {
    return (
        <div className=' '>
            <Banner></Banner>
            <RaunbowExtention></RaunbowExtention>
            <Built_for></Built_for>
            <Keybord_Sortcart></Keybord_Sortcart>
            <Hundreds_wallets></Hundreds_wallets>
            <All_chains></All_chains>

        </div>
    );
};

export default Home;