import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faGithub, faTwitter, faLinkedin, faReact } from '@fortawesome/free-brands-svg-icons';
import '../font.css';
export default class Home extends Component {
    componentDidMount() {
        document.getElementById('toggleB').addEventListener('click', function () {
            let htmlClasses = document.querySelector('html').classList;

            if (localStorage.theme == 'dark') {
                htmlClasses.remove('dark');
                localStorage.removeItem('theme');
            } else {
                htmlClasses.add('dark');
                localStorage.theme = 'dark';
            }
        });
        document.getElementById('toggleA').addEventListener('click', function () {
            let htmlClasses = document.querySelector('html').classList;

            if (localStorage.theme == 'dark') {
                htmlClasses.remove('dark');
                localStorage.removeItem('theme');
            } else {
                htmlClasses.add('dark');
                localStorage.theme = 'dark';
            }
        });
        if (localStorage.theme === 'dark' || (!'theme' in localStorage && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.querySelector('html').classList.add('dark');
        } else if (localStorage.theme === 'dark') {
            document.querySelector('html').classList.add('dark')
        }
    }
    render() {
        return (
            <html className="w-full h-full">
                {/* MASAÜSTÜ BAŞLANGIÇ */}
                <div className="w-screen h-screen sm:flex hidden justify-center transform transition duration-200 ease-in bg-primary-iki dark:bg-primary-bir">
                    <div className="flex-1">
                        <div className="w-36 h-full justify-center items-center flex flex-col">
                            <a href="https://instagram.com/hknclk00" target="_blank">
                                <FontAwesomeIcon className="transform text-primary-bir dark:text-primary-iki my-3 transition duration-150 ease-out hover:scale-150" icon={faInstagram} size="3x" />
                            </a>
                            <a href="https://twitter.com/celikhakan0" target="_blank">
                                <FontAwesomeIcon className="transform text-primary-bir dark:text-primary-iki my-3 transition duration-150 ease-out hover:scale-150" icon={faTwitter} size="3x" />
                            </a>
                            <a href="https://github.com/HKNCLK0" target="_blank">
                                <FontAwesomeIcon className="transform text-primary-bir dark:text-primary-iki my-3 transition duration-150 ease-out hover:scale-150" icon={faGithub} size="3x" />
                            </a>
                            <a href="https://www.linkedin.com/in/hknclk0/" target="_blank">
                                <FontAwesomeIcon className="transform text-primary-bir dark:text-primary-iki my-3 transition duration-150 ease-out hover:scale-150" icon={faLinkedin} size="3x" />
                            </a>
                            <a href="mailto:contact@hakancelik.me" target="_blank">
                                <FontAwesomeIcon className="transform text-primary-bir dark:text-primary-iki my-3 transition duration-150 ease-out hover:scale-150" icon={faEnvelope} size="3x" />
                            </a>
                        </div>
                    </div>
                    <div className="w-2/3 h-screen">
                        <div className="flex justify-end pr-4 pt-4">
                            <button id="toggleB" className="focus:outline-none">
                                <FontAwesomeIcon size="2x" type="solid" className="text-primary-bir dark:text-primary-iki" icon={faMoon} />
                            </button>
                        </div>
                        <div className="h-5/6 flex items-center mt-4 flex-col">
                            <img src="https://hakancelik.me/assets/shy_moment.png" className="transform transition duration-100 ease-out hover:scale-125 w-48 h-48 rounded-full border-4 border-primary-bir dark:border-primary-iki" />
                            <h3 className="text-primary-bir dark:text-primary-iki sf-font text-xl mt-8 transform transition duration-100 ease-out hover:scale-125">Hakan Çelik</h3>
                            <h3 className="text-primary-bir dark:text-primary-iki sf-font text-xl mt-2 transform transition duration-100 ease-out hover:scale-125">Junior Front-end Developer</h3>
                            <div className="sm:w-3/4 md:w-1/2 sm:h-3/6 md:h-auto h-2/6 mt-8 shadow-inner rounded-3xl px-8 py-4 flex items-center flex-col bg-green-300 bg-opacity-80 dark:bg-opacity-30 hover:scale-110 transform text-center transition duration-150 ease-out">
                                <h2 className="sf-font text-2xl text-primary-bir dark:text-primary-iki pb-4">Hakkımda</h2>
                                <h2 className="sf-medium-font text-lg text-primary-bir dark:text-primary-iki">Merhaba ben Hakan . Meslek lisesi Elektronik mezunuyum . Elektronik olarak hobi devreleri yapıyorum , ayrıca React ve React-Native ile projeler , Figma ve Adobe Photoshop ile orta düzeyde UI ve UX ve panel , banner vb. tasarımlar yapıyorum.</h2>
                                <h2 className="sf-medium-font text-lg text-primary-bir dark:text-primary-iki">Benimle iletişime geçmek için sol menüdeki sosyal medya hesaplarımı kullanabilirsiniz.</h2>
                            </div>
                        </div>
                        <div className="w-full flex items-center flex-col">
                            <p className="sf-medium-font text-sm text-primary-bir dark:text-primary-iki mb-2">Powered By</p>
                            <FontAwesomeIcon className="text-primary-bir dark:text-primary-iki" icon={faReact} size="2x" />
                        </div>
                    </div>
                    <div className="flex-1">
                        {/* BOŞ */}
                    </div>
                </div>
                {/* MASAÜSTÜ BİTİŞ */}
                {/* MOBİL BAŞLANGIÇ */}
                <div className="sm:hidden flex w-screen h-screen items-center flex-col transform transition duration-200 ease-in bg-primary-iki dark:bg-primary-bir">
                    <div className="w-screen h-12 flex items-center justify-end pr-4 pt-4">
                        <button id="toggleA" className="focus:outline-none">
                            <FontAwesomeIcon size="2x" type="solid" className="text-primary-bir dark:text-primary-iki" icon={faMoon} />
                        </button>
                    </div>
                    <div className="h-screen w-screen flex items-center flex-col">
                        <div className="w-3/4 h-auto flex flex-col items-center pt-4">
                            <img className="w-44 h-44 rounded-full border-4 border-primary-bir dark:border-primary-iki" src="https://hakancelik.me/assets/shy_moment.png" />
                            <h3 className="text-primary-bir dark:text-primary-iki sf-font text-m mt-3">Hakan Çelik</h3>
                            <h3 className="text-primary-bir dark:text-primary-iki sf-font text-m mt-1">Junior Front-end Developer</h3>
                            <div className="w-full h-80 bg-green-300 mt-4 p-4 text-center shadow-inner rounded-2xl bg-opacity-80 dark:bg-opacity-30">
                                <h2 className="sf-font text-2xl text-primary-bir dark:text-primary-iki pb-4">Hakkımda</h2>
                                <h2 className="sf-medium-font text-m text-primary-bir dark:text-primary-iki">Merhaba ben Hakan . Meslek lisesi Elektronik mezunuyum . Elektronik olarak hobi devreleri yapıyorum , ayrıca React ve React-Native ile projeler , Figma ve Adobe Photoshop ile orta düzeyde UI ve UX ve panel , banner vb. tasarımlar yapıyorum.</h2>
                                <h2 className="sf-medium-font text-m text-primary-bir dark:text-primary-iki">Benimle iletişime geçmek için alttaki sosyal medya hesaplarımı kullanabilirsiniz.</h2>
                            </div>
                        </div>
                        <div className="mt-4">
                            <a href="https://instagram.com/hknclk00" target="_blank">
                                <FontAwesomeIcon className="transform text-primary-bir dark:text-primary-iki mx-3" icon={faInstagram} size="3x" />
                            </a>
                            <a href="https://twitter.com/celikhakan0" target="_blank">
                                <FontAwesomeIcon className="transform text-primary-bir dark:text-primary-iki mx-3" icon={faTwitter} size="3x" />
                            </a>
                            <a href="https://github.com/HKNCLK0" target="_blank">
                                <FontAwesomeIcon className="transform text-primary-bir dark:text-primary-iki mx-3" icon={faGithub} size="3x" />
                            </a>
                            <a href="https://www.linkedin.com/in/hknclk0/" target="_blank">
                                <FontAwesomeIcon className="transform text-primary-bir dark:text-primary-iki mx-3" icon={faLinkedin} size="3x" />
                            </a>
                            <a href="mailto:contact@hakancelik.me" target="_blank">
                                <FontAwesomeIcon className="transform text-primary-bir dark:text-primary-iki mx-3" icon={faEnvelope} size="3x" />
                            </a>
                        </div>
                    </div>
                    <div className="w-full h-14 flex justify-center items-end flex-row mb-14">
                        <p className="sf-medium-font text-sm text-primary-bir dark:text-primary-iki mb-2 mr-2">Powered By</p>
                        <FontAwesomeIcon className="text-primary-bir dark:text-primary-iki" icon={faReact} size="2x" />
                    </div>
                </div>
                {/* MOBİL BİTİŞ */}
            </html>
        )
    }
}
