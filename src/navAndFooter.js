const makeNavbar = () => {

    const navbar = document.createElement("nav");

    navbar.appendChild(makeLink("home-button", "Home"));
    navbar.appendChild(makeLink("menu-button", "Menu"));
    navbar.appendChild(makeLink("contact-button", "Contact Us"));

    return navbar;

};

const makeFooter = () => {

    const footer = document.createElement("footer");

    const text = document.createElement("p");
    text.textContent = "Made by Talkative Egg";

    footer.appendChild(text);

    return footer;

}

function makeLink(id, text){
    const link = document.createElement("a");
    link.id = id;
    link.setAttribute("href", "#");
    link.textContent = text;

    return link;
}

export { makeNavbar, makeFooter };