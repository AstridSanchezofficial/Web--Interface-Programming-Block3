export default class Artist {
  constructor(id, name, country, genre) {
    this.id = name;
    this.artistName = id;
    this.country = country;
    this.genre = genre;
  }

  get displayLabel() {
    return `${this.artistName} — ` + `${this.genre}`;
  }
}