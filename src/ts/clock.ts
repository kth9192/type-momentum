class Clock {
  private clockContainer = <HTMLElement>document.querySelector(".clock");
  private dayTitle = <HTMLElement>this.clockContainer.querySelector("h1");
  private timeTitle = <HTMLElement>this.clockContainer.querySelector("h2");
  private yearTitle = <HTMLElement>this.clockContainer.querySelector(".year");
  monthNames: Array<String>;

  constructor() {
    this.monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
  }

  initTime = () => {
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDay() + 1;
    const hour = date.getHours();
    const minute = date.getMinutes();

    this.dayTitle.innerHTML = `${this.monthNames[month]} ${
      day >= 10 ? `${day}` : `0${day}`
    } `;

    this.timeTitle.innerText = `${hour >= 10 ? `${hour}` : `0${hour}`}:${
      minute >= 10 ? `${minute}` : `0${minute}`
    }`;
  };

  init = () => {
    this.initTime();

    setInterval(() => {
      this.initTime();
    }, 1000);
  };
}

export default Clock;
