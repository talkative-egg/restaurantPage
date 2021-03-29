const makeMenuPage = () => {
    const menu = document.createElement("div");
    menu.id = "menu";

    const title = document.createElement("h2");
    title.textContent = "Menu";

    const menuContainer = document.createElement("div");
    menuContainer.id = "menu-items";
    appendNewItem(menuContainer, "../images/classic-pizza.png", "Classic Pizza", 7.99);
    appendNewItem(menuContainer, "../images/mushroom-pizza.png", "Yuck Mushroom Pizza", 5.99);
    appendNewItem(menuContainer, "../images/pepperoni-pizza.png", "Pepperoni Pizza", 7.99);
    appendNewItem(menuContainer, "../images/bread.png", "Bread", 0.99);
    appendNewItem(menuContainer, "../images/egg-fried-rice.png", "Egg Fried Rice", 5.99);

    menu.appendChild(title);
    menu.appendChild(menuContainer);

    return menu;
};

function appendNewItem(parent, imgSrc, itemName, itemPrice){

    const item = document.createElement("figure");
    item.className = "item";

    const image = document.createElement("img");
    image.setAttribute("src", imgSrc);
    image.setAttribute("alt", itemName);

    const name = document.createElement("figcaption");
    name.textContent = itemName;

    const price = document.createElement("figcaption");
    price.textContent = `$${itemPrice}`;

    item.appendChild(image);
    item.appendChild(document.createElement("br"));
    item.appendChild(name);
    item.appendChild(price);

    parent.appendChild(item);

}

export { makeMenuPage };