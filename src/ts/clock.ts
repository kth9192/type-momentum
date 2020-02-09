class Clock {
  private clockContainer = <HTMLElement>document.querySelector(".clock");
  private clockTitle = <HTMLElement>this.clockContainer.querySelector("h1");
  constructor() {}

  getTime = () => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    this.clockTitle.innerText = `${hour >= 10 ? `${hour}` : `0${hour}`}:${
      minute >= 10 ? `${minute}` : `0${minute}`
    }:${second >= 10 ? `${second}` : `0${second}`}`;
  };

  init = () => {
    this.getTime();

    setInterval(() => {
      this.getTime();
    }, 1000);
  };
}

export default Clock;
