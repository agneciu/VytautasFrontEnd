//start ir stop mygtukai

//kai paspaudziame start, kas  sekunde sekame kintanti laika
//ir isrodome didejanti laika laikroduke

//kai paspaudziame stop, laikrodukas turi sustoti

class TimerState {
  constructor() {
    this.secondsElapsed = 0;

    this.intervalId = null;
  }

  start(updateCallBack) {
    // paleisti intervalą, kuris tiksi ir didina laiką

    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.secondsElapsed++;

        updateCallBack(this.secondsElapsed);
      }, 1000);
    }
  }

  stop() {
    // sustabdo intervalą, kuris "tiksi"

    if (this.intervalId) {
      clearInterval(this.intervalId);

      this.intervalId = null;
    }
  }
}

export default TimerState;
