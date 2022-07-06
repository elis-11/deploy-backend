export const db = {
  users: [
    { _id: "u1", email: "u1@gmail.com", password: "u1", books: ["b1"] },
    { _id: "u2", email: "u2@gmail.com", password: "u2", books: ["b1", "b2"] },
    {
      _id: "u3",
      email: "u3@gmail.com",
      password: "u3",
      books: ["b1", "b2", "b3"],
    },
    {
      _id: "u4",
      email: "u4@gmail.com",
      password: "u4",
      books: ["b1", "b2", "b3", "b4"],
    },
    {
      _id: "u5",
      email: "u5@gmail.com",
      password: "u5",
      books: ["b1", "b2", "b3", "b4", "b5"],
    },
  ],
  books: [
    { _id: "b1", title: "Der Prozess", author: "Franz Kafka" },
    { _id: "b2", title: "Alice in Wonderland", author: "Lewis Carrol" },
    { _id: "b3", title: "Das Glasperlenspiel", author: "Hermann Hesse" },
    { _id: "b4", title: "The Tourist", author: "Hermann Hesse" },
    { _id: "b5", title: "The Gladiator", author: "Hermann Hesse" },
  ],
}
