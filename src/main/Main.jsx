import React from "react";
import Menu from "../tools/Menu";
import Footer from "../tools/Footer";

const Main = () => {
    return ( 
        <>
            <Menu />
            <main>
                <div className="main__title">
                    <img src={require('../img/selection/main.png')} alt="" height={'884vh'}  />
                    <span className="title">ДМИТРИЙ БУЯНОВ</span>
                </div>
                <div>

                </div>
            </main>
            <Footer />
        </>
    )
}

export default Main;