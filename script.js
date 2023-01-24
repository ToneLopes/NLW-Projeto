const form = document.querySelector("#form-habits") // registrou em memoria a criação de uma constante chama form que se refere à '#form-habits'
const nlwSetup = new NLWSetup(form) //registrou em memoria a criação de uma constante chama nlwSetup que é um objeto se refere à 'form' que é um variavel que se refere à '#form-habits'
const button = document.querySelector("header button") //registrou em memoria a criação de uma constante chama button que se refere à 'header button'

button.addEventListener("click", add) // registrou em memoria um evento de clique na constante button, chamado add.
form.addEventListener("change", save) // registrou em memoria um evento de change(de mudança) na constante form, chamado save.

// Aqui está a função add
function add() {
  //Primeiro criou um constante chama today que recebe uma nova data do dia atual no formato en depois do .toLocaleDateString ela é convertida em String e no formato pt-br, depois do .slice ela é recortada nos 5 primeiro caracteres.
  const today = new Date().toLocaleDateString("pt-BR").slice(0, -5)

  //Aqui abaixo foi criado uma constante dayExists que recebeu nlwSetup (que é uma variável) depois do .dayExists(today) ela verifica se exista a data de hoje.
  const dayExists = nlwSetup.dayExists(today)

  // Neste momente fazemos uma condicional: se a constante dayExists criada logo acima for verdadeiro ela vai executar: alert('Dia já incluso 🚨'). E depois vai parar : return.
  if (dayExists) {
    alert("Dia já incluso 🚨")
    return
  }
  // E se for falso ela vai executar: alert("Adicionado com sucesso ✅") e Depois vai adicionar o dia atual já que ele aind não foi executado "nlwSetup.addDay(today)".
  alert("Adicionado com sucesso ✅")
  nlwSetup.addDay(today)
}

// Nesta função é para não perder os dados selecionados pelo usuario por isso foi escolhido o nome save.
function save() {
  // Aqui todas as informações que forem sendo alteradas ele vai guardando no localStorege do navegador depois do .setItem vamos dizer o nome desse objeto, depois vamos a função JSON.stringify para transformar as informações adicionadas na função anterior, que foi uma data no nlwSetup, em uma String
  localStorage.setItem("NLWSetp@habits", JSON.stringify(nlwSetup.data))
}

//Chegou aqui a constante criada com o nome data receubeu a seguinte informação: JSON.parse transforme o que está dentro do parenteses em um objeto, ou seja desfaça aqui que você fez antetiormente,  porque para aguardar a informação você precisa que seja transformada em um string, mas aqui eu preciso que essa informação se transforme novamente em um objeto. Caso não haja nenhuma informação para ser transformada  || deixa a data(objeto) vazio.
const data = JSON.parse(localStorage.getItem("NLWSetp@habits")) || {}
nlwSetup.setData(data) // Execute a informações de Data.
nlwSetup.load() // Carregue as informações no navegador.
