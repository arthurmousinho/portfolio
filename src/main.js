const Data = [
    {
        title: 'The Barbatos',
        cover: './assets/covers/barbatos.jpg',
        description: 'Aplicação desktop de uma barbearia desenvolvida com Python durante a disciplina de Linguagem de Programação II.',
        moreInfo: "Desenvolvi esse projeto juntamente com meu amigo Vinícios D' Fátima durante a disciplina de Linguagem de Programação II, no qual utilizamos a biblioteca customTkinter para construir a interface gráfica e praticamos conceitos de programação orientada a objetos com Python."
    },
    {
        title: 'Boleto Fácil',
        cover: './assets/covers/boletofacil.jpg',
        description: 'É uma aplicação web que ajuda os usuários a monitorar seus gastos, como boletos, faturas e outras contas, usando o armazenamento local do navegador.',
        moreInfo: "Um dos projetos mais desafiadores que já fiz, mas aprendi bastante sobre JavaScript, HTML e CSS. Me inspirei no projeto DevFinance da Maratona Discover da Rocketseat, porém adaptei o layout ao meu estilo, implementando uma barra lateral responsiva e um menu para dispositivos móveis.",
        url: 'https://github.com/arthurmousinho/boleto_facil'
    },
    {
        title: 'Dev Burger',
        cover: './assets/covers/dev-burger.jpg',
        description: 'Aplicação web que simula um sistema de uma hamburgueria com tema de programação, com página de cardápio e meu pedido',
        moreInfo: "Esse foi meu primeiro projeto com mais de uma página, desenvolvi a página de cardápio e a página de com os itens que o usuário escolheu.",
        url: 'https://github.com/arthurmousinho/dev-burger'
    },
    {
        title: 'Tasks.Js',
        cover: './assets/covers/tasksjs.jpg',
        description: 'Aplicação web de uma lista de tarefas com armazenamento em LocalStorage com um timer para aplicar a técnica de Pomodoro.',
        moreInfo: "Com os conhecimentos da Maratona Discover da Rockseat, aprendi muito sobre DOM, responsividade, clean code e armazenamento em Local Storage. Com isso, desenvolvi esse projeto para praticar esses conhecimentos.",
        url: 'https://github.com/arthurmousinho/tasks.Js'
    },
    {
        title: 'Calc.Js',
        cover: './assets/covers/calcjs.jpg',
        description: 'Aplicação web de um simples calculadora para praticar lógica de programação com Javascript e manipulação da DOM.',
        moreInfo: "Desenvolvi esse projeto do zero, desde a ideia do layout até o desenvolvimento de fato, usando muita lógica de programação com javascript",
        url: 'https://github.com/arthurmousinho/calc.js'
    },
    {
        title: 'Simula Fácil',
        cover: './assets/covers/simulafacil.jpg',
        description: 'Aplicação web de uma calculadora de financiamento com juros compostos para dar os primeiros passos com a linguagem Javascript.',
        moreInfo: "Esse foi um dos meus primeiros projetos usando a linguagem Javascript, serviu bastante para eu ficar familiarizado com a linguagem ",
        url: 'https://github.com/arthurmousinho/simula_facil'
    },
    {
        title: 'DevLinks',
        cover: './assets/covers/devlinks.jpg',
        description: 'Agregador de links online feito com html css e javacript, a partir dos conhecimentos do curso DevLinks da Rocketseat.',
        moreInfo: "Após finalizar o curso DevLinks disponibilizado pela Rocketseat, desenvolvi novamente o projeto, alterando um pouco o design da aplicação para praticar os conceitos abordados.",
        url: 'https://github.com/arthurmousinho/dev_links'
    },
    {
        title: 'Desafios #boracodar',
        cover: './assets/covers/boracodar.jpg',
        description: 'Repositório do github atualizado toda semana com os desafios do #boracodar disponibilizados pela Rocketseat.',
        moreInfo: "A Rocketseat toda semana disponibiliza um desafio no site boracodar.dev. Com isso, criei esse repositório para guardar esses desafios. ",
        url: 'https://github.com/arthurmousinho/desafios_boracodar'
    }
]



const DOM = {
    cardHTML(title,cover,description,index) {
        const html = `
        <div>
            <img src="${cover}" alt="project image">
            <div class="card-content">
                <h2>${title}</h2>
                <p>
                    ${description}
                </p>
            </div>
            <a onclick="Modal.openModal(${index})">
                Saiba mais
            </a>
        </div>
        `
        return html
    },

    modalHTML(cover, title, description, moreInfo, url) {
        const html = `
        <div class="modal-content">
            <div id="cover-descripton">
                <img src="${cover}" alt="project image">
                <div>
                    <h2>${title}</h2>
                    <p>${description}.</p>
                </div>
            </div>
            <div class='moreInfo'>
                <p>
                    ${moreInfo}
                </p>
            </div>
            <div class="github-repository">
                <img src="./assets/github.svg" alt="github icon" class="logo-github">
                <a href="${url}" target="_blank">Link do Repositório</a>
            </div>
        </div>
        `

        return html
    }
}


const Card = {
    generateCards(title,cover,description) {
        const cardGenerate = document.createElement('div')
        const cardsContainer = document.querySelector('.cards-container')
        let index = cardsContainer.children.length

        cardGenerate.innerHTML = DOM.cardHTML(title,cover,description,index)
        cardsContainer.appendChild(cardGenerate)
    },

    clearCards() {
        const cardContainer = document.querySelector('.cards-container')
        cardContainer.innerHTML = ""
    }
}

const Modal = {
    modalOverlay: document.querySelector('.modal-overlay'),
    modalGenerate: document.createElement('div'),
    modalContainer: document.querySelector('.modal'),

    openModal(index) {
        this.modalOverlay.classList.toggle('active')
        this.generateModal(index)
    },

    generateModal(index) {
        let project = Data[index]
    
        this.modalGenerate.innerHTML = DOM.modalHTML(project.cover, project.title, project.description, project.moreInfo, project.url)

        this.modalContainer.appendChild(this.modalGenerate)
    },

    closeModal() {
        this.modalOverlay.classList.toggle('active')
    }

}

const App = {
    init() {
        for (let data of Data) {
            Card.generateCards(data.title, data.cover, data.description)
        }
    }
}

App.init()