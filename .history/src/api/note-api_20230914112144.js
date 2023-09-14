import axois from "axios";

const BASE_URL = "http://localhost:3000/notes";

export class NoteAPI {
  static async create(note) {
    return (await axois.post(`${BASE_URL}`, note)).data;
  }

  static async fetchAll(note) {
    return (await axois.post(`${BASE_URL}`)).data;
  }

  static async fetchById(note) {
    return (await axois.post(`${BASE_URL}/${noteId}`)).data;
  }

  static async deleteById(note) {
    return (await axois.post(`${BASE_URL}`, note)).data;
  }
}
