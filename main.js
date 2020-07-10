const state= {};
const getInput = ()=> document.querySelector('.search__field').value;
const clearSearch = ()=> document.querySelector('.search__field').value='';
const clearUI= ()=> document.querySelector('.results').innerHTML="";
const clearMovie= ()=> document.querySelector('.movies-result').innerHTML= '';


document.querySelector('.search').addEventListener('submit',e =>{
    e.preventDefault();
    controlSearch();
});

const controlSearch = async ()=>{
    // Input from user
const query= getInput(); 
if(query){
    clearMovie();
    // Clear input field
    clearSearch();
    // Clear movies list after another input
    clearUI();
    // New search
state.search= new Search(query);

//UI result loading.....

// search for movies
 await state.search.getResults();

 // render results  on UI
 UIResult(state.search.movieResults);
 //console.log(state.search.movieResults)

};
};

const controlMovie = async()=> {
// Get id from url
const id = window.location.hash.replace('#', '');

if(id){
    // new id
    clearMovie();
    state.control = new Control(id);
    await state.control.getMovies();
   
    //UI results
UImovie(state.control);
}
return id;
};







['hashchange', 'load'].forEach(event => window.addEventListener(event, controlMovie));


