const UIResult = (movie)=>{
movie.forEach(UIres);
    

}

const UIres = (movie)=>{
    const markup = `
    
    <ul class="results__list">
                
                <li>
                    <a class="results__link results__link--active" href="#${movie.imdbID}">
                        <figure class="results__fig">
                            <img src="${movie.Poster}" alt="${movie.Title}">
                        </figure>
                        <div class="results__data">
                            <h4 class="results__name">${movie.Title}</h4>
                           
                        </div>
                    </a>
                </li>
    `
document.querySelector('.results').insertAdjacentHTML('afterbegin',markup);
};



const UImovie = (info)=> {
    const markup = `
    <div class="img-fig">
    <img src="${info.image}" alt="${info.title}" class="movie-img">
    </div>
    
   <div class="movie_details">
    
           <br>
           <h3 style="align-items: center; font-weight: bold;"> ${info.title}</h3>
        <p>Writer: ${info.writer}</p>
               <p>Released date: ${info.year}</p>
               <p>Actors: ${info.actors} </p>
               <p>imdbRating: ${info.rating}</p>
               <p>Total seasons: ${info.seasons}</p>
               <p style="font-style: italic; color: red; font-size: 16px;"> "${info.story}"</p>
               <button class= "add">+ Add to watchlist</button>
              
           </div>
       </div>
    `;
   document.querySelector('.movies-result').insertAdjacentHTML('afterbegin', markup);
};

