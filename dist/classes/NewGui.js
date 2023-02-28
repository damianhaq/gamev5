export class NewGui {
    constructor(elName, text, value, parent) {
        this.elName = elName;
        this.text = text;
        this.value = value;
        this.parent = parent;
        this.elName = elName;
        this.text = text;
        this.value = value;
        this.parent = parent;
        this.newElement;
        this.create();
    }
    update(value) {
        if (this.newElement.innerText !== this.text + value) {
            this.newElement.innerText = this.text + value;
            // console.log(this.newElement.innerText, this.text + value);
        }
    }
    create() {
        this.newElement = document.createElement(this.elName);
        this.newElement.innerText = this.text + this.value;
        this.parent.appendChild(this.newElement);
    }
}
