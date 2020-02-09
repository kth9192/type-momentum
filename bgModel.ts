class BackgroundModel {
  private IMG_NUMBER: number = 3;
  constructor() {}

  get imgNumber() {
    return this.IMG_NUMBER;
  }

  createRandomBG = () => {
    const num = Math.floor(Math.random() * this.IMG_NUMBER);
    console.log(num);

    return num;
  };
}

export default BackgroundModel;
