const card_box = document.getElementById('card-box');
const card_box_avaliados = document.getElementById('card-box-avaliados');
const card_box_estreia = document.getElementById('card-box-estreias');
const card_box_vendidos = document.getElementById('card-box-vendidos');
const template_card = document.getElementById('template-card');

/* const carregando = document.getElementById('carregando');
const template_load = document.getElementById('template-load'); */


const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODUzODg0NjU4NGUwMGJmNDJkZGNjNjUzNTNhNWZjNiIsInN1YiI6IjY1MWY0Y2EzNzQ1MDdkMDExYzEwNTY3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NR8IyeayJlbiRqYDPdybtxroR3yc1eRTJhLRQ9zeLV0'
    }
  };
  
/* for(let i = 0; i < 12; i++){
  const div = template_load.content.cloneNode(true);
  carregando.append(template_load);
}
 */

// HOME
fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
  .then(response => response.json())
  .then(response => {
      console.log('Home')
      console.log(response.results)

      for(let i = 0; i < 12; i++){
          const div = template_card.content.cloneNode(true);
          div.getElementById('imagem').src = "https://image.tmdb.org/t/p/w300"+response.results[i].poster_path;
          //div.getElementById('titulo').innerHTML = response.results[i].title;
          div.getElementById('botao').href = "paginas/filme.html?id="+response.results[i].id;
          card_box.append(div);
      }
      

  })
  .catch(err => console.error(err));

// MAIS BEM AVALIADOS
busca('vote_count.desc', 'avaliados');


// MAIS VENDIDOS
busca('revenue.desc', 'vendidos')

// ESTREIAS
busca ('primary_release_date.desc', 'estreia');

function busca(link, aba){
  fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by='+link, options)
.then(response => response.json())
.then(response => {
    console.log('Próximos lançamentos')
    console.log(response.results)

    for(let i = 0; i < 12; i++){
        const div = template_card.content.cloneNode(true);
        if(response.results[i].poster_path != null){
        div.getElementById('imagem').src = "https://image.tmdb.org/t/p/w300"+response.results[i].poster_path;
        //div.getElementById('titulo').innerHTML = response.results[i].title;
        div.getElementById('botao').href = "filme.html?id="+response.results[i].id;
        /* if(aba == 'home'){
          card_box.append(div);
        }else if(aba == 'vendidos'){
          card_box_vendidos.append(div);
        }else if(aba == 'estreia'){
          card_box_estreia.append(div);
        }else if(aba == 'avaliados'){
          card_box_avaliados.append(div);
        } */

        switch (aba) {
          case 'vendidos':
            card_box_vendidos.append(div);
            break;
          case 'estreia':
            card_box_estreia.append(div);
            break;
          case 'avaliados':
            card_box_avaliados.append(div);
            break;
          case 'home':
            card_box.append(div);
            break;
        }
        
        }
      }
        

})
.catch(err => console.error(err));
}

//Pagina filme
const url = window.location.href;
let new_url = new URL (url);
let id = new_url.searchParams.get("id");
console.log(id);

fetch('https://api.themoviedb.org/3/movie/'+id, options)
.then(response => response.json())
.then(response => {
    console.log(response);
    
    document.getElementById('fundo').style = "background-image: linear-gradient(217deg, rgb(182 168 168 / 80%), rgb(196 186 186 / 38%) 70.71%), url('https://image.tmdb.org/t/p/w500"+response.backdrop_path+"')";
    document.getElementById('titulo_filme').innerText = response.title;
    document.getElementById('imagem_filme').src = "https://image.tmdb.org/t/p/w300"+response.poster_path;
    document.getElementById('resumo_filme').innerText = "Sinopse: "+response.overview;
    document.getElementById('release').innerText = response.release_date+" ("+response.original_language+")";
    document.getElementById('average').innerText = "• Avaliação dos usuários: "+response.vote_average.toFixed(1);
    

})
.catch(err => console.error(err));



//https://api.themoviedb.org/3/movie/980489

