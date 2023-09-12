import { DataSource } from "typeorm";
import { Photo } from "./entity/photo.js";

const db = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "hak",
  entities: [Photo],
  synchronize: true,
});

const initialize = () => {
  db.initialize()
    .then(() => {
      console.log("connected");
    })
    .catch((err) => console.log(err));
};

export default { initialize, db };
 