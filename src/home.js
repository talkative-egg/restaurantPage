const makeHomePage = () => {
    const titleContainer = document.createElement("div");
    titleContainer.id = "title";

    const titleLeft = document.createElement("h1");
    titleLeft.id = "title-left";
    titleLeft.textContent = "Uncle Roger's";

    const titleRight = document.createElement("h1");
    titleRight.id = "title-right";
    titleRight.textContent = "Egg Fried Rice";

    const firstDescription = document.createElement("h2");
    firstDescription.textContent = "Haiyaa, Gordon Ramsay no good";

    const secondDescription = document.createElement("h2");
    secondDescription.textContent = "Fuiyoo, Uncle Roger show you real food";

    titleContainer.appendChild(titleLeft);
    titleContainer.appendChild(titleRight);
    titleContainer.appendChild(document.createElement("hr"));
    titleContainer.appendChild(firstDescription);
    titleContainer.appendChild(secondDescription);

    return titleContainer;
};

export { makeHomePage };