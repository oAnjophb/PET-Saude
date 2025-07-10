// Conteúdo informativo de cada card
const infoContent = {
  sobre: {
    title: "SOBRE O PROJETO",
    body: `O PET-Saúde "Informação para Ação" visa fortalecer a comunicação entre Unidades Básicas de Saúde e a população de Parnaíba-PI, facilitar o gerenciamento dos dados do SUS e otimizar a análise da situação de saúde local. Nossa proposta é digital, inovadora e focada em resultados práticos.`,
  },
  problema: {
    title: "PROBLEMA",
    body: `A fragmentação informacional dificulta a comunicação e a gestão de dados em saúde. O desafio é superar esses obstáculos para melhorar decisões, prevenção e cuidado na Atenção Primária.`,
  },
  "como-atuamos": {
    title: "COMO ATUAMOS",
    body: `Desenvolvemos soluções digitais que integram profissionais e comunidade, promovendo transparência, eficiência e colaboração para enfrentar os desafios da saúde pública.`,
  },
  beneficios: {
    title: "BENEFÍCIOS",
    body: `Aprimora a comunicação, otimiza a gestão de dados, apoia decisões clínicas e engaja a população, resultando em melhorias reais na saúde local.`,
  },
  colaboracao: {
    title: "COLABORAÇÃO MULTIDISCIPLINAR",
    body: `Reúne profissionais e estudantes de diversas áreas, promovendo troca de conhecimento e atuação integrada em prol da saúde pública.`,
  },
};

// Seletores
const grid = document.getElementById("containerGrid");
const cards = grid.querySelectorAll(".card");
let expanded = null;

// Função para fechar o card expandido
function closeExpanded() {
  if (expanded) {
    expanded.remove();
    cards.forEach(card => card.classList.remove("active"));
    expanded = null;
  }
}

// Função para abrir o card expandido
function expandCard(card) {
  closeExpanded();

  const key = card.getAttribute("data-info");
  const info = infoContent[key];
  if (!info) return;

  card.classList.add("active");

  // Cria o card de info
  const infoDiv = document.createElement("div");
  infoDiv.className = "expanded-info-card";
  infoDiv.innerHTML = `
    <button class="close-card" title="Fechar" aria-label="Fechar Explicação">&times;</button>
    <h3>${info.title}</h3>
    <div>${info.body}</div>
  `;

  infoDiv.querySelector(".close-card").onclick = closeExpanded;

  // Insere imediatamente após o card clicado
  card.after(infoDiv);
  expanded = infoDiv;
}

// Clique nos cards
cards.forEach(card => {
  card.addEventListener("click", (e) => {
    // Se já está ativo, fecha
    if (card.classList.contains("active")) {
      closeExpanded();
    } else {
      expandCard(card);
    }
    e.stopPropagation();
  });
});

// Fechar ao clicar fora
document.addEventListener("click", function(e) {
  if (!grid.contains(e.target)) {
    closeExpanded();
  }
});

// Tecla ESC fecha
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") closeExpanded();
});