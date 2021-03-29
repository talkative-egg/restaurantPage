const makeContactPage = () => {

    const contact = document.createElement("div");
    contact.id = "contact";

    const title = document.createElement("h2");
    title.textContent = "Contact Us";

    const contactContainer = document.createElement("div");
    contactContainer.id = "contact-container"

    contactContainer.appendChild(makeOurContact());
    contactContainer.appendChild(makeMessageBox());

    contact.appendChild(title);
    contact.appendChild(contactContainer);

    return contact;

};

function makeOurContact(){
    
    const ourContact = document.createElement("div");
    ourContact.className = "contact-box";
    ourContact.id = "our-contact";

    ourContact.appendChild(makeTextElement("h3", "Customer Service:"));
    ourContact.appendChild(makeTextElement("p", "339-XXX-XXXX"));
    ourContact.appendChild(makeTextElement("h3", "Food Ordering:"));
    ourContact.appendChild(makeTextElement("p", "781-XXX-XXXX"));

    return ourContact;
}

function makeTextElement(tag, text){
    const element = document.createElement(`${tag}`);
    element.textContent = text;

    return element
}

function makeLabel(forAttribute, text){
    const label = document.createElement("label");
    label.setAttribute("for", forAttribute);
    label.textContent = text;

    return label;
}

function makeInputBox(tag, type, name, placeholder){

    const element = document.createElement(`${tag}`);
    element.setAttribute("type", type);
    element.setAttribute("id", name);
    element.setAttribute("name", name);
    element.setAttribute("placeholder", placeholder);

    return element;

}

function makeButton(type, text){

    const button = document.createElement("button");
    button.setAttribute("type", "submit");
    button.textContent = "submit";

    return button;

}

function makeMessageBox(){

    const messageBox = document.createElement("div");
    messageBox.className = "contact-box";
    messageBox.id = "message-box";

    messageBox.appendChild(makeTextElement("h3", "Send a message (advices or complaints)"));
    
    const form = document.createElement("form");

    form.appendChild(makeLabel("name", "Your Name:"));
    form.appendChild(document.createElement("br"));
    form.appendChild(makeInputBox("input", "text", "name", "Uncle Roger"));
    form.appendChild(document.createElement("br"));

    form.appendChild(makeLabel("phone", "Your Number (How We Can Contact You)"));
    form.appendChild(document.createElement("br"));
    form.appendChild(makeInputBox("input", "tel", "phone", "123-456-7890"));
    form.appendChild(document.createElement("br"));

    form.appendChild(makeLabel("message", "Your Message:"));
    form.appendChild(document.createElement("br"));
    form.appendChild(makeInputBox("textarea", "text", "message", "Type your message here"));
    form.appendChild(document.createElement("br"));

    form.appendChild(makeButton("submit", "submit"));

    messageBox.appendChild(form);

    return messageBox;

}

export { makeContactPage };