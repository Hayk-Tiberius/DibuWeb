import React from "react";
import logo from "../img/logo/3.png";

const Footer = () => {
    return (
        <footer>
            <div className="footer__container__1">
                <span>Буянов Дмитрий Романович</span><br/>  
                <a className="footer_confidential" href={require("../img/confidential/ПолитикаКонфиденциальности.pdf")}
                    onClick={(e) => { e.preventDefault(); window.open("../img/confidential/ПолитикаКонфиденциальности.pdf", '_blank'); }}>
                    <span>Политика Конфиденциальности</span>
                </a>
            </div>
            <div className="footer__container__2">
                <span><img className="logo" src={logo} alt="" /></span><br/>  
                <span>© 2025</span><br/>
                <a className="footer_confidential" href="https://t.me/HaikHov" onClick={(e) => { e.preventDefault(); window.open("https://t.me/HaikHov", '_blank'); }}>  
                    <span className="footer__text">created and designed by Prus</span>
                </a>
            </div>
            <div className="footer__container__3">
                <span>+7 (910) 408-03-61</span><br/>  
                <a href="https://vk.com/dibuman" onClick={(e) => { e.preventDefault(); window.open("https://vk.com/dibuman", '_blank'); }}>
                        <img src={require("../img/icons/vk.png")} alt="" width={"70wv"} style={{ border: "0.2em solid black", borderRadius: "1.2em", padding: "0.3em" }} />
                </a>
                <a href="https://t.me/Event_Buyanov" onClick={(e) => { e.preventDefault(); window.open("https://t.me/Event_Buyanov", '_blank'); }}>
                        <img src={require("../img/icons/telegram.png")} alt="" width={"70wv"} />
                </a>
                <a href="https://www.instagram.com/tot_samiy_dibu" onClick={(e) => { e.preventDefault(); window.open("https://www.instagram.com/tot_samiy_dibu", '_blank'); }}>
                        <img src={require("../img/icons/instagramm.png")} alt="" width={"68wv"} />
                </a>
                <br/>
                
            </div>
        </footer>
    )
}

export default Footer