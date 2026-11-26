export const book = {
  title: "Eloquent JavaScript",
  author: "Marijn Haverbeke",
  year: 2024,
  read: true,

  Read() {
    if (this.read) {
      return false;
    } else {
      return true;
    }
  },
};