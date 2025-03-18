import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/drink", async (req, res) => {
  const drink = req.body.drink;

  try {
    const response = await axios.get(API_url + drink);
    const result = response.data;
    res.render("mixes.ejs", { choices: result.drinks, drink: drink });
  } catch (error) {
    res.render("mixes.ejs", { error: error.message });
    console.log(error.message);
  }
});

app.post('/mixture', async (req, res) => {
    const drink = req.body.drink;

    try{
        const response = await axios.get(API_url + drink);
        const result = response.data;
        res.render('instructions.ejs', {instructions: result.drinks[0].strInstructions, mix: drink})

    }catch(error){
        res.render('instructions.ejs', {error: error.message});
    }
})

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
