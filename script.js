const temas = {
  escola: {
    imagem: "img/images (3).jfif",
    titulo: "Gossip about school",
    sugestoes: [
      "-----What would you change at school?",
      "-----Which is the most unnecessary program?",
      "-----What could be better?",
      "-----What is the most enjoyable thing that happens?",
      "-----Se fosses diretor, or what would you do?",
    ],
  },

  professores: {
    imagem: "img/images (2).jfif",
    titulo: "Gossip about teachers",
    sugestoes: [
      "-----What is the most repeated phrase among teachers?",
      "-----What is the most difficult subject?",
      "-----What teaching method could be better?",
      "-----What is the most pleasant situation in the classroom?",
      "-----What makes a classroom interesting?",
    ],
  },

  colegas: {
    imagem: "img/images (4).jfif",
    titulo: "Gossip about colleagues",
    sugestoes: [
      "-----Who tells the best jokes?",
      "-----What was the funniest situation the group has experienced?",
      "-----What funny quirks or habits exist within the group?",
      "-----What is the group's most memorable moment?",
      "-----What makes the group unique?",
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
