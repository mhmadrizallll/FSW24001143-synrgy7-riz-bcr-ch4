class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
    
    <div class="p-4 rounded-xl shadow-xl space-y-2">   
        <img
          src="${this.image}"
          alt="${this.manufacture}"
          class="w-full h-[200px] object-cover"
        />
        <p class="text-sm font-normal">${this.manufacture}/${this.model}</p>
        <p class="text-base font-bold">Rp. ${this.rentPerDay} / Hari</p>
        <p class="font-light text-sm text-slate-700 w-full car-description">${this.description}</p>
        <p class="font-light flex items-center gap-3"><i class="fa fa-solid fa-user-group"></i> <span> ${this.capacity} orang </span></p>
        <p class="font-light flex items-center gap-3"><i class="fa fa-solid fa-gear"></i> <span> ${this.transmission} </span></p>
        <p class="font-light flex items-center gap-3"><i class="fa fa-solid fa-calendar"></i> <span> tahun ${this.year} </span></p>
        <button
                class="bg-[#5cb85f] text-white py-2 px-4 rounded-sm hover:bg-[#0a800e] transition duration-300 ease-in-out w-full"
              >
                Pilih Mobil
              </button>
      </div>
    
    `;
  }
}
