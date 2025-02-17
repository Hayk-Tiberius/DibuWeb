import React from "react";
import Menu from "../tools/Menu";
import Footer from "../tools/Footer";

const Main = () => {
    return ( 
        <>
        
            <main>
                <div className="main__title">
                    <span className="order__title">Заказать мероприятие</span>
                    <img src={require('../img/selection/main.png')} alt="" height={'924vh'}  />
                    <span className="title">ДМИТРИЙ <span >БУЯНОВ</span></span>
                    <div className="messanger__title">
                        <a href="https://vk.com/dibuman" onClick={(e) => { e.preventDefault(); window.open("https://vk.com/dibuman", '_blank'); }}>
                            <img src={require("../img/icons/vk.webp")} alt="" width={"70wv"} style={{ border: "0.2em solid black", borderRadius: "1.2em", padding: "0.3em" }} />
                        </a>
                        <a href="https://t.me/Event_Buyanov" onClick={(e) => { e.preventDefault(); window.open("https://t.me/Event_Buyanov", '_blank'); }}>
                            <img src={require("../img/icons/telegram.webp")} alt="" width={"70wv"} />
                        </a>
                        <a href="www.instagram.com/tot_samiy_dibu" onClick={(e) => { e.preventDefault(); window.open("www.instagram.com/tot_samiy_dibu", '_blank'); }}>
                            <img src={require("../img/icons/instagramm.png")} alt="" width={"72wv"} />
                        </a>
                    </div>
                </div>
              
            </main>
            <Footer />
        </>
    )
}

export default Main;