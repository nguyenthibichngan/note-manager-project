import axois from "axios";

const BASE_URL = "http://localhost:3000/notes";

export class NoteAPI {
  static async create(note) {
    return (await axois.post(`${BASE_URL}`, note)).data;
  }
}
