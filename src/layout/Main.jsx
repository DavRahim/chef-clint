import React from 'react';
import Header from '../contanier/Header/Header';
import AboutUs from '../contanier/AboutUs/AboutUs';
import SpecialMenu from '../contanier/SpecialMenu/SpecialMenu';
import Chef from '../contanier/Chef/Chef';
import AllChef from '../contanier/Chef/AllChef';
import Findus from '../contanier/Findus/Findus';
import Gallery from '../contanier/Gallery/Gallery';

const Main = () => {
    return (
        <>
            <Header></Header>
            <AllChef></AllChef>
            <SpecialMenu></SpecialMenu>
            <AboutUs></AboutUs>
            <Gallery></Gallery>
            <Findus></Findus>
            {/* <Chef></Chef> */}
        </>
    );
};

export default Main;