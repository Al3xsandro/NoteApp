// Data
const date = new Date();

const year = date.getFullYear()
const month = date.getMonth()
const day = date.getDate()

const dayzero = day < 9 ? '0' + day : day;
const monthzero = month < 9 ? '0' + month : month;

const minutes = date.getMinutes()
const hours = date.getHours()
const seconds = date.getSeconds()

const dateformat =  `${dayzero}/${monthzero}/${year}\n ás ${hours}:${minutes}:${seconds}`;

// Essa função irá carregar todo o conteúdo presente no localstorage.
function renderNote() {
    // Renderizar as anotações do usuário
    const noteElement = localStorage.getItem('note') === null ? localStorage.setItem('note') : localStorage.getItem('note')
    const result = JSON.parse(noteElement);
    const content = document.getElementById('note').innerHTML= `${result}`;

    // Renderizar data
    const data = localStorage.getItem('date')
    document.getElementById('container-date').innerHTML = ` Última alteração: ${data}`;

    // Botão editar 
    const button = localStorage.getItem('button')
    const edit = document.getElementById("button-add").innerHTML = `${button}`
}

// essa função irá criar uma nova anotação
function createNote() {
    // Entradas do usuário
    const storage = localStorage;
    const note = document.getElementById('note').value;
    localStorage.setItem('note', JSON.stringify(note));

    // data
    const time = dateformat;
    localStorage.setItem('date', time)

    // Botão de adicionar
    localStorage.setItem('button', 'Editar')
    
    renderNote()
}

// essa função irá remover uma anotação

function removeNote() {
    // Remover anotações
    localStorage.removeItem('note');
    localStorage.setItem('note', '');

    // Remover data 
    localStorage.removeItem('date');
    localStorage.setItem('date', 'Você ainda não fez anotações.');

    // Botão editar 
    const button = localStorage.removeItem('button')
    const edit = document.getElementById("button-add").innerHTML = 'Adicionar'
}

// Carregar todo o conteúdo na inicialização da aplicação
renderNote()