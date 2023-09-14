import axois from "axios";

const BASE_URL = "http://localhost:3000/notes";

export class NoteAPI {
  static async create(note) {
    return (await axois.post(`${BASE_URL}`, note)).data;
  }

  static async fetchAll() {
    return (await axois.get(`${BASE_URL}`)).data;
  }

  static async fetchById(noteId) {
    return (await axois.get(`${BASE_URL}/${noteId}`)).data;
  }

  static async deleteById(noteId) {
    return (await axois.delete(`${BASE_URL}/${noteId}`)).data;
  }

  static async updateById(note) {
    return (await axois.patch(`${BASE_URL}/${note}`, note)).data;
  }
}
