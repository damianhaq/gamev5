export class NewGui {
  newElement: HTMLElement;
  constructor(
    public elName: string,
    public text: string,
    public value: number | string,
    public parent: HTMLElement
  ) {
    this.elName = elName;
    this.text = text;
    this.value = value;
    this.parent = parent;
    this.newElement;

    this.create();
  }
  update(value: number | string) {
    if (this.newElement.innerText !== this.text + value) {
      this.newElement.innerText = this.text + value;
      console.log(this.newElement.innerText, this.text + value);
    }
  }

  create() {
    this.newElement = document.createElement(this.elName);
    this.newElement.innerText = this.text + this.value;
    this.parent.appendChild(this.newElement);
  }
}
