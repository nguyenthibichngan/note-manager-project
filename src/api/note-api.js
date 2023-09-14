import axois from "axios";

const BASE_URL = "http://localhost:3200/notes";

export class NoteAPI {
  static async create(note) {
    return this.formatId((await axois.post(`${BASE_URL}`, note)).data);
  }

  static async fetchAll() {
    return (await axois.get(`${BASE_URL}`)).data.map(this.formatId);
  }

  static async fetchById(noteId) {
    return this.formatId((await axois.get(`${BASE_URL}/${noteId}`)).data);
  }

  static async deleteById(noteId) {
    return (await axois.delete(`${BASE_URL}/${noteId}`)).data;
  }

  static async updateById(id, values) {
    return this.formatId((await axois.patch(`${BASE_URL}/${id}`, values)).data);
  }

  static formatId(note) {
    return {
      ...note,
      id: note.id.toString(),
    };
  }
}
