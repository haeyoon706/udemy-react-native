class Place {
  constructor(title, imageUri, address, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location; // { lat: 0.2323, lng:12.235 }
    this.id = new Date().toString() + Math.random().toString();
  }
}
