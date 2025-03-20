import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
var ingredients = [];
var measures = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

//add search

app.post("/drink", async (req, res) => {
  const drink = req.body.drink;

  try {
    const response = await axios.get(API_url + drink);
    const result = response.data;
    if(result.drinks == null || result.drinks == 'no data found'){

      res.render('index.ejs', {error: 'Enter valid cocktail'})
    }else{
     
      res.render("mixes.ejs", { choices: result.drinks, drink: drink });
    }
  } catch (error) {
    res.render("mixes.ejs", { error: error.message });
  }
});

app.post('/mixture', async (req, res) => {
    const drink = req.body.drink;

    try{
        const response = await axios.get(API_url + drink);
        const result = response.data;
     
        if (result.drinks.length > 1){
          res.render("mixes.ejs", { choices: result.drinks, drink: drink });
        }else{
          for(let i = 1; i<16; i++){
            let ingredient = 'strIngredient' + i;
            let need = result.drinks[0][ingredient];
            if (need!=null){
                ingredients.push(need)
            }
        }

        for(let i = 1; i<16; i++){
            let measure = 'strMeasure' + i;
            let need = result.drinks[0][measure];
            if (need!=null){
                measures.push(need)
            }
        }

          res.render('instructions.ejs', {instructions: result.drinks[0].strInstructions, mix: drink, listI: ingredients, listM: measures})
          ingredients= [];
          measures=[];
        }

        

        

    }catch(error){
        res.render('instructions.ejs', {error: error.message});
    }
})

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
