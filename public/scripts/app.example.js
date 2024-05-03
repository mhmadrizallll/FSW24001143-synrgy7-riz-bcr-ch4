class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
    this.tipeDriver = document.getElementById("tipeDriver");
    this.tanggal = document.getElementById("tanggal");
    this.waktuJemput = document.getElementById("waktuJemput");
    this.jumlahPenumpang = document.getElementById("jumlahPenumpang");
  }

  async init() {
    await this.load();
    this.run();

    // Register click listener
    // this.loadButton.onclick = this.run;
    // this.clearButton.onclick = this.clear;
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.classList.add("w-full", "md:w-4/12", "p-4");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  async loadFilter() {
    const cars = await Binar.listCars((car) => {
      const tipeDriver = this.tipeDriver.value;
      const tanggal = this.tanggal.value;
      // ambil tahun ajah dari tanggal
      const year = new Date(tanggal).getFullYear();
      const waktuJemput = this.waktuJemput.value;
      const jumlahPenumpang = Number(this.jumlahPenumpang.value);
      // console.log(jumlahPenumpang);

      // if (tipeDriver && car.available) {
      //   return car;
      // }

      if (tipeDriver === "true" && car.available && year === car.year) {
        return car;
      } else if (
        tipeDriver === "false" &&
        !car.available &&
        year === car.year
      ) {
        return car;
      }

      // if (year === car.year) {
      //   console.log(car);
      //   return car;
      // }

      // if (jumlahPenumpang === car.capacity) {
      //   return car;
      // }
    });
    console.log(cars);
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
