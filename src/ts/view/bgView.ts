class BackgroundView {
  private body: HTMLElement;
  private imgArr!: Array<string>;
  constructor() {
    this.body = <HTMLElement>document.querySelector("body");
    // this.imgArr = [
    //   "https://cdn.pixabay.com/photo/2020/02/03/17/39/beach-4816249_960_720.jpg"
    // ];
  }

  paintImg(imgNumber: number) {
    const newImg = new Image();
    // newImg.src = this.imgArr[imgNumber];
    newImg.src = `../../assets/img/bg${imgNumber + 1}.jpg`;
    newImg.classList.add("bgImg");

    console.log(newImg.src);

    this.body.prepend(newImg);
  }
}

export default BackgroundView;
