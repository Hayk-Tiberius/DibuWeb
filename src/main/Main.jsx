import React, { useState, useEffect } from "react";
import Menu from "../tools/Menu";
import Footer from "../tools/Footer";
import Carousel from "../tools/Carousel";

const Main = () => {
    const [isMenuVisible, setMenuVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const mainTitle = document.querySelector(".main__title");
            if (mainTitle) {
                const rect = mainTitle.getBoundingClientRect();
                setMenuVisible(rect.bottom <= 0); 
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        formData.append("access_key", "6c3f406a-689e-49a2-837c-32965c04d50e");
    
        
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }
    
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
    
            const data = await response.json();
    
            if (data.success) {
                console.log("Форма успешно отправлена!");
                event.target.reset();
            } else {
                console.log("Ошибка отправки формы", data);
                setResult(data.message);
            }
        } catch (error) {
            console.log("Ошибка запроса", error);
            setResult("Ошибка отправки. Попробуйте позже.");
        }
    };
    
    return ( 
        <>

            <main>
                <Menu isVisible={isMenuVisible}/>
                <div className="main__title">
                    <span className="title">ДМИТРИЙ <span >БУЯНОВ</span></span>
                        <div className="main__items">
                                <span className="order__title"><a href="#application">Заказать мероприятие</a></span>
                                <img src={require('../img/selection/main.png')} className="img__title"  />
                                <div className="messanger__title">
                                <a href="https://vk.com/dibuman" onClick={(e) => { e.preventDefault(); window.open("https://vk.com/dibuman", '_blank'); }}>
                                    <img src={require("../img/icons/vk.webp")} alt=""  style={{ border: "0.2em solid black", borderRadius: "1.2em", padding: "0.3em" }} />
                                </a>
                                <a href="https://t.me/Event_Buyanov" onClick={(e) => { e.preventDefault(); window.open("https://t.me/Event_Buyanov", '_blank'); }}>
                                    <img src={require("../img/icons/telegram.webp")} alt="" />
                                </a>
                                <a href="https://www.instagram.com/tot_samiy_dibu" onClick={(e) => { e.preventDefault(); window.open("https://www.instagram.com/tot_samiy_dibu", '_blank'); }}>
                                    <img src={require("../img/icons/instagramm.png")} alt=""  />
                                </a>
                        </div>    
                    </div>
                </div>
            </main>
            <section id="self__section" className="self__section">
                <div>
                    <span className="self__title">ОБО МНЕ</span>
                    <div className="self__grid">
                        <span><span className="bold__self__grid">Больше не хочу повторять:</span> <br/> Вёл фестиваль 18 часов, а потом 2 дня отсыпался</span>
                        <span><span className="bold__self__grid">Что кроме ведения?</span> <br/> Актёр театра и кино, импровизация и юмор - моя основа</span>
                        <span><span className="bold__self__grid">Постоянный ведущий</span> <br/> Программы «Мы-граждане России!» в Московской области</span>
                        <span><span className="bold__self__grid">В ивенте с 2020 года,</span><br/> Вёл корпоративы сотрудникам Газпрома и Мегафона,<br/>  но в уже детстве разогревал зал перед Игорем Николаевым</span>
                    </div>
                </div>
            </section>
            <section id="visit__card" className="visit__card">
                
                <div className="visit__video">
                <iframe 
                    src="https://vk.com/video_ext.php?oid=215281820&id=456240044&hd=2&autoplay=1" 
                    width="360" 
                    height="716" 
                    allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
                    frameborder="0" 
                    allowfullscreen>
                </iframe>
                </div>
                <div className="visit__items">
                    <span className="visit__title">ВИЗИТКА</span>     
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
            </section>
            <section id="reviews" className="reviews">
                <span className="reviews__title">ОТЗЫВЫ</span>
                <Carousel />
            </section>
            <section id="application" className="application">
                <img src={require('../img/selection/application.png') } className="img__title" alt="" />
                <div>
                    <span className="application__text">НАПИСАТЬ МНЕ</span>
                    <form onSubmit={onSubmit}>
                            <div className="application__items">
                                <input type="date" name="date" placeholder="Дата мероприятия" required/>

                                <input id="telNo" name="eventType" type="text" list="defaultTels" placeholder="Мероприятие" required/>
                                <datalist id="defaultTels">
                                    <option value="Свадьба"></option>
                                    <option value="Корпоратив"></option>
                                    <option value="Юбилей"></option>
                                    <option value="Другое"></option>
                                </datalist>

                                <input type="text" name="name" placeholder="Ваше имя" required/>
                                <input type="tel" name="phone" placeholder="Номер телефона" required/>

                                <button type="submit">Отправить заявку</button>

                                <span className="confidential__text">
                                    Нажимая кнопку, я соглашаюсь с   <br/>
                                    <a href={require("../img/confidential/ПолитикаКонфиденциальности.pdf")}
                                        onClick={(e) => { e.preventDefault(); window.open("../img/confidential/ПолитикаКонфиденциальности.pdf", '_blank'); }}>
                                         политикой конфиденциальности
                                    </a>
                                </span>
                            </div>
                    </form>
                    <span>{result}</span>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Main;