fetch("https://api.themoviedb.org/3/movie/popular?api_key=d5238145d4b9f2339fa5ffda73f36407&language=pt-BR&page=1")
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector('#container');
    const informacao = document.querySelector('#info-filme');

    data.results.map((item) => {
      const titulo = document.createElement("h1")
      titulo.textContent = item.original_title;
      titulo.classList.add('titulo');
      const buttton1 = document.createElement("button")
      const buttton2 = document.createElement("button")
      buttton1.innerHTML = "Informação"
      buttton2.innerHTML = "Traler"
      const div = document.createElement("div");
      const img = document.createElement("img");
      img.classList.add('banner');
      img.src = `https://image.tmdb.org/t/p/w500${item.poster_path}`
      img.alt = item.title;
      container.appendChild(titulo)
      container.appendChild(img);
      container.appendChild(div);
      div.appendChild(buttton1); div.appendChild(buttton2);
      div.classList.add('div')
      buttton1.classList.add('botao')
      buttton2.classList.add('botao')

      buttton1.addEventListener('click', () => {
        info(item)
      })

      function info(item) {

        container.classList.add('esconder')

        const btnVoltarAoInico = document.createElement("button")
        btnVoltarAoInico.innerText = 'voltar'
        informacao.appendChild(btnVoltarAoInico)
        btnVoltarAoInico.classList.add('botao-voltar')

        const tituloInfo = document.querySelector('#titulo-info');
        const imgInfo = document.querySelector('#img-info');
        const textInfo = document.querySelector('#text-info');


        tituloInfo.textContent = item.original_title;
        imgInfo.src = `https://image.tmdb.org/t/p/w500${item.backdrop_path}`;
        textInfo.innerText = item.overview;

        btnVoltarAoInico.addEventListener('click', () => {
          container.classList.remove('esconder')
          tituloInfo.textContent = '';
          imgInfo.src = '';
          textInfo.innerText = '';
          informacao.removeChild(btnVoltarAoInico);

        })

      }

    buttton2.addEventListener('click', ()=>{
      window.location.href =`https://youtube.com/results?search_query=${item.title} Trailer`
    })

    })
  })
