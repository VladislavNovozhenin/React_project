import express from "express";
import ReactDOM from "react-dom/server";
import { indexTemplate } from "./indexTemplate";
import { App } from "../App";
import axios from "axios";

const PORT = process.env.PORT || 3000;

const app = express();
app.use("/static", express.static("./public/client"));

app.get("/auth", (req, res) => {
  axios.post(
    'https://www.reddit.com/api/v1/access_token',
    `grant_type=authorization_code&code=${req.query.code}&redirect_uri=https://react-project-vlads-projects-cde9d0a5.vercel.app/auth`,
    {
      auth: { username: 'YAABv9cZr02grvuNW3fkkA', password: 'jZJHslrxd6CADeAqyNwZ_8niyd_c8A'},
      headers: { 'Content-type': 'application/x-www-form-urlencoded' }
    }
  )
    .then(({ data }) => {
      res.send(indexTemplate(ReactDOM.renderToString(App()), data['access_token'])
      );
      console.log(data)
    
    })
    .catch((err) => {
      
      res.send(indexTemplate(ReactDOM.renderToString(App()), ''));
    });
});
app.get("*", (req, res) => {
  res.send(indexTemplate(ReactDOM.renderToString(App())));
 
});

app.listen(PORT, () => {
  console.log(`server started on port http://localhost:${PORT}`);
});
