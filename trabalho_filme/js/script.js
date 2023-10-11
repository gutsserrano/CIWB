const card_box = document.getElementById('card-box');
const template_card = document.getElementById('template-card');


const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODUzODg0NjU4NGUwMGJmNDJkZGNjNjUzNTNhNWZjNiIsInN1YiI6IjY1MWY0Y2EzNzQ1MDdkMDExYzEwNTY3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NR8IyeayJlbiRqYDPdybtxroR3yc1eRTJhLRQ9zeLV0'
    }
  };
  
fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
.then(response => response.json())
.then(response => {
    console.log(response.results)

    for(let i = 0; i < 18; i++){
        const div = template_card.content.cloneNode(true);
        div.getElementById('imagem').src = "https://image.tmdb.org/t/p/w300"+response.results[i].poster_path;
        div.getElementById('titulo').innerHTML = response.results[i].title;
        div.getElementById('botao').href = "paginas/filme.html?id="+response.results[i].id;
        card_box.append(div);
    }
    

})
.catch(err => console.error(err));

//Pagina filme
const url = window.location.href;
let new_url = new URL (url);
let id = new_url.searchParams.get("id");
console.log(id);

fetch('https://api.themoviedb.org/3/movie/'+id, options)
.then(response => response.json())
.then(response => {
    console.log(response);
    
    //document.getElementById('titulo_filme').innerText = response.title;
    document.getElementById('imagem_filme').src = "https://image.tmdb.org/t/p/w300"+response.poster_path;
    document.getElementById('resumo_filme').innerText = response.overview;
    //document.getElementById('release').innerText = response.release_date;
    

})

//https://api.themoviedb.org/3/movie/980489

