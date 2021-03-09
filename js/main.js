// Data
const date = new Date();

const year = date.getFullYear()
const month = date.getMonth()
const day = date.getDate()

const minutes = date.getMinutes()
const hours = date.getHours()
const seconds = date.getSeconds()

// isto vai verificar se o número precisa do zero na frente.

const dayzero = day < 10 ? '0' + day : day;
const monthzero = month < 10 ? '0' + month : month;
const hourszero = hours < 10 ? '0' + hours : hours;

const dateformat =  `${dayzero}/${monthzero}/${year}\n ás ${hourszero}:${minutes}:${seconds}`;

// Essa função irá carregar todo o conteúdo presente no localstorage.
function renderNote() {
    // Renderizar as anotações do usuário
    const noteElement = localStorage.getItem('note') === null ? localStorage.setItem('note', '') : localStorage.getItem('note')
    const result = JSON.parse(noteElement);
    document.getElementById('note').innerHTML= result;

    // Renderizar data
    const data = localStorage.getItem('date')
    document.getElementById('container-date').innerHTML = ` Última alteração: ${data}`;

    // Botão editar 
    const button = localStorage.getItem('button')

    document.getElementById("button-add").innerHTML = button;
}

// essa função irá criar uma nova anotação
function createNote() {
    // Entradas do usuário
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
    localStorage.setItem('note', '');

    // Remover data 
    localStorage.setItem('date', 'Você ainda não fez anotações.');

    // Botão editar 
    localStorage.removeItem('button')
    document.getElementById("button-add").innerHTML = 'Adicionar'
}

// Carregar todo o conteúdo na inicialização da aplicação
renderNote()