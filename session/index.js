import express from 'express';
import router from "./routes/auth.routes.js";

async function main() {
  const app = express();

  app.use(express.json());

  app.use("/api/auth", router);

  const server = app.listen(3000, () => {
    console.log(`Server is listening at http://localhost:3000`);
  });
}

main()