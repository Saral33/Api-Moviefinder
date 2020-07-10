
class Search{
    constructor(query){
        this.query=query;
    }

 async getResults(){
    const key = '36b63494';
    
    const res = await fetch(`https://www.omdbapi.com/?s=${this.query}&apikey=${key}`);
    const data= await res.json();
    this.movieResults = data.Search;
    //console.log(this.movieResults);
 }
    
};

class Control{
    constructor(id){
        this.id = id;
    }
   async getMovies(){

   const key = '36b63494';
   const res = await fetch (`https://www.omdbapi.com/?i=${this.id}&apikey=${key}`);
   const data = await res.json();
  this.title= data.Title;
  this.year= data.Year;
  this.writer= data.Writer;
  this.story = data.Plot;
  this.image = data.Poster;
  this.rating = data.imdbRating;
  this.seasons = data.totalSeasons;
  this.actors = data.Actors;
  //console.log(this.title);
    
   }
}

