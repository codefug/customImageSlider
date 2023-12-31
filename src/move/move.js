export default class move {
  totalslide = document.querySelector(".totalslide");

  button = document.querySelectorAll(".slideButton");

  oneslide = document.querySelector(".slideImage");

  itemWidth = this.oneslide.offsetWidth;

  pointerOverEvent=new CustomEvent('pointerover',{bubbles: true});

  index = 0;

  forward() {
    this.button[this.index].classList.remove("hover");
    if (this.index === 2) this.index = -1;
    this.index += 1;
    this.moveToIndex();
    this.button[this.index].classList.add('hover');
  }

  backward() {
    this.button[this.index].classList.remove("hover");
    if (this.index === 0) this.index = 3;
    this.index -= 1;
    this.moveToIndex();
    this.button[this.index].classList.add("hover");
  }

  exactNumber(number) {
    this.button[this.index].classList.remove("hover");
    this.index = number;
    this.moveToIndex();
    this.button[this.index].classList.add("hover");
  }

  moveToIndex() {
    this.totalslide.setAttribute(
      "style",
      `transform:translate(-${this.itemWidth * this.index}px)`,
    );
  }
}
