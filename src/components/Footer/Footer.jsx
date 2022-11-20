import React from 'react'
import  './Footer.css'
import footer from '../../assets/img/footer.png'
import fb from '../../assets/img/Facebook-Footer.svg'
import inst from '../../assets/img/instagram.png'
const Footer = () => {
  return (
    <footer class="case">
            <div class="case__container _container-narrow">
            <div class="case__wrapper"> 
                    <div class="case__right">
                        <div class="case__right__column">
                            <p class="case__right__column__title">Інформація</p>
                            <ul>
                                <li class="case__right__column__item"> 
                                    <a href="#" class="case__right__column__link">Оплата</a>
                                </li>
                                <li class="case__right__column__item"> 
                                    <a href="#" class="case__right__column__link">Обмін і повернення</a>
                                </li>
                                <li class="case__right__column__item"> 
                                    <a href="#" class="case__right__column__link">Карта сайту</a>
                                </li>
                            </ul>
                        </div>
                        <div class="case__right__column">
                            <p class="case__right__column__title">Про компанію</p>
                            <ul>
                                <li class="case__right__column__item"> 
                                    <a href="#" class="case__right__column__link">Магазини</a>
                                </li>
                                <li class="case__right__column__item"> 
                                    <a href="#" class="case__right__column__link">Блог</a>
                                </li>
                                <li class="case__right__column__item"> 
                                    <a href="#" class="case__right__column__link">Відгуки</a>
                                </li>
                            </ul>
                        </div>
                        <div class="case__right__column">
                            <p class="case__right__column__title">Ми в соцмережах</p>
                            <ul>
                                <li class="case__right__column__item"> 
                                    <a href="#" class="case__right__column__link">
                                        <img src={inst} alt="" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="case__right__column">
                            <p class="case__right__column__title">Контакти:</p>
                            <ul>
                                <li class="case__right__column__item"> 
                                    <a href="#" class="case__right__column__link">(091) 852-57-71</a>
                                </li>
                                <li class="case__right__column__item"> 
                                    <a href="#" class="case__right__column__link">Localize@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <div class="footer__content">
                        <div class="footer__content__left">
                            <div class="footer__content__left__logo">
                                <img src={footer} alt="footer"/>
                            </div>
                        </div>
                        <div class="footer__content__right">
                            <p class="footer__content__right__text">©2001-2020</p>
                            <p class="footer__content__right__text">All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer