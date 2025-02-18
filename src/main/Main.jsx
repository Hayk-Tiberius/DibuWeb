import React from "react";
import Menu from "../tools/Menu";
import Footer from "../tools/Footer";
import Carousel from "../tools/Carousel";

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
                        <a href="https://www.instagram.com/tot_samiy_dibu" onClick={(e) => { e.preventDefault(); window.open("https://www.instagram.com/tot_samiy_dibu", '_blank'); }}>
                            <img src={require("../img/icons/instagramm.png")} alt="" width={"72wv"} />
                        </a>
                    </div>
                </div>
            </main>
            <section className="self__section">
                <div>
                    <span className="self__title">ОБО МНЕ</span>
                    <div className="self__grid">
                        <span><span className="bold__self__grid">Больше не хочу повторять:</span> <br/> Вёл фестиваль 18 часов, а потом 2 дня отсыпался</span>
                        <span><span className="bold__self__grid">Что кроме ведения?</span> <br/> Актёр театра и кино, импровизация и юмор - моя основа</span>
                        <span><span className="bold__self__grid">Постоянный ведущий</span> <br/> программы «Мы-граждане России!» в Московской области</span>
                        <span><span className="bold__self__grid">В ивенте с 2020 года,</span><br/> вёл корпоративы сотрудникам Газпрома и Мегафона,<br/>  но в уже детстве разогревал зал перед Игорем Николаевым</span>
                    </div>
                </div>
            </section>
            <section className="visit__card">
                
                <div className="visit__video">
                <iframe src="https://vk.com/video_ext.php?oid=215281820&id=456240044&hd=2&autoplay=1" 
                    width="360" 
                    height="716" 
                    allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
                    frameborder="0" 
                    allowfullscreen>
                </iframe>
                </div>
                <div className="visit__items">
                    <span className="visit__title">ВИЗИТКА</span>
                    <div className="visit__text-container">
                        <span className="visit__text">
                            <span className="visit__greetings">Познакомьтесь со мной ещё больше!</span> <br />
                            Я беру на себя творческие моменты, что помогает Вам не переживать о деталях. <br />
                            Внимателен к пожеланиям клиентов и гостей, что помогает создать идеальную атмосферу на мероприятии. <br />     
                            Не умею не выкладываться на 100%, поэтому всю свою энергию оставлю на Вашем мероприятии! <br />
                            Стараюсь находить подход к каждому гостю, даже к самым угрюмым, делая так, чтобы Вы улыбались и участвовали в мероприятии.<br />
                            Ну и конечно всегда на связи и готов помочь со всеми вопросами, потому что Ваше мероприятие - Моя любимая работа. <br />
                            Стремлюсь быть не просто ведущим, а генератором позитива и радости и заряжать своей энергией Вас.<br />
                        </span>
                    </div>
                </div>
            </section>
            <section className="reviews">
                <span className="reviews__title">ОТЗЫВЫ</span>
                <Carousel />
            </section>
            <section className="application">
                <img src={require('../img/selection/application.png') } height={'924vh'} alt="" />
                <span className="application__text">НАПИСАТЬ МНЕ</span>
            </section>

        </>
    )
}

export default Main;