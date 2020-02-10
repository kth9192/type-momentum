import bg1 from "../../../public/assets/img/bg1.jpg";
import bg2 from "../../../public/assets/img/bg2.jpg";
import bg3 from "../../../public/assets/img/bg3.jpg";
// const bg1 = require("../../../public/assets/img/bg1.jpg");
// const bg2 = require("../../../public/assets/img/bg2.jpg");
// const bg3 = require("../../../public/assets/img/bg3.jpg");

class BackgroundView {
  private body: HTMLElement;
  private imgArr!: Array<string>;
  constructor() {
    this.body = <HTMLElement>document.querySelector("body");
    this.imgArr = [bg1, bg2, bg3];
  }

  paintImg(imgNumber: number) {
    const newImg = new Image();
    newImg.src = this.imgArr[imgNumber];
    // newImg.src = `../../assets/img/bg${imgNumber + 1}.jpg`;

    newImg.classList.add("bgImg");

    console.log(newImg.src);

    this.body.prepend(newImg);
  }
}

export default BackgroundView;
