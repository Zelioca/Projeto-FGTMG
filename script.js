const temas = {
  escola: {
    imagem: "img/images (3).jfif",
    titulo: "Criticar escola",
    sugestoes: [
      "-----O que mudarias na escola?",
      "-----Qual é a regra mais desnecessária?",
      "-----O que poderia melhorar?",
      "-----Qual é a coisa mais engraçada que acontece?",
      "-----Se fosses diretor, o que farias?",
    ],
  },

  professores: {
    imagem: "img/images (2).jfif",
    titulo: "Criticar professores",
    sugestoes: [
      "-----Qual é a frase mais repetida pelos professores?",
      "-----Qual é a matéria mais difícil?",
      "-----Que método de ensino poderia melhorar?",
      "-----Qual é a situação mais engraçada da aula?",
      "-----O que torna uma aula interessante?",
    ],
  },

  colegas: {
    imagem: "img/images (4).jfif",
    titulo: "Criticar colegas",
    sugestoes: [
      "-----Quem conta as melhores piadas?",
      "-----Qual foi a situação mais engraçada da turma?",
      "-----Que mania engraçada existe na turma?",
      "-----Qual é a memória mais marcante da turma?",
      "-----O que torna a turma única?",
    ],
  },
};

const parametros = new URLSearchParams(window.location.search);
const temaSelecionado = parametros.get("tema");

const tema = temas[temaSelecionado];

if (tema) {
  document.getElementById("imagemTema").src = tema.imagem;
  document.getElementById("tituloTema").textContent = tema.titulo;

  const lista = document.getElementById("listaSugestoes");

  tema.sugestoes.forEach((sugestao) => {
    const item = document.createElement("li");
    item.textContent = sugestao;
    lista.appendChild(item);
  });
} else {
  document.getElementById("tituloTema").textContent = "Tema não encontrado";
}
