import { makeHomePage } from './home';
import { makeMenuPage } from './menu';
import { makeContactPage } from './contact';
import { makeNavbar, makeFooter } from './navAndFooter';

const mainModule = (() => {

    const content = document.querySelector("#content");

    const mainContent = document.createElement("div");
    mainContent.id = "main-content";

    content.appendChild(makeNavbar());
    content.appendChild(mainContent);
    content.appendChild(makeFooter());

    const homeButton = document.querySelector("#home-button");
    const menuButton = document.querySelector("#menu-button");
    const contactButton = document.querySelector("#contact-button");

    const removeMainContent = function(){

        while(mainContent.firstChild){
            mainContent.removeChild(mainContent.firstChild);
        }

    }

    const renderHomePage = function(){

        removeMainContent();
        mainContent.appendChild(makeHomePage());

    }

    const renderMenuPage = function(){

        removeMainContent();
        mainContent.appendChild(makeMenuPage());

    }

    const renderContactPage = function(){

        removeMainContent();
        mainContent.appendChild(makeContactPage());

    }

    renderHomePage();
    homeButton.addEventListener("click", renderHomePage);
    menuButton.addEventListener("click", renderMenuPage);
    contactButton.addEventListener("click", renderContactPage);

})();