// Função para adicionar um novo item à lista
function addItem() {
    var input = document.getElementById('item-input');
    var itemText = input.value.trim();

    if (itemText !== '') {
      var listItem = document.createElement('li');
      listItem.innerHTML = itemText + ' <a href="#" onclick="deleteItem(this)">Apagar</a>';
      document.getElementById('item-list').appendChild(listItem);
      input.value = '';
    }
  }

  // Função para limpar todos os itens da lista
  function clearItems() {
    document.getElementById('item-list').innerHTML = '';
  }

  // Função para apagar um item da lista
  function deleteItem(link) {
    var listItem = link.parentNode;
    var itemList = listItem.parentNode;
    itemList.removeChild(listItem);
  }

  // Adiciona evento de clique ao botão "Adicionar"
  document.getElementById('add-button').addEventListener('click', addItem);

  // Adiciona evento de clique ao botão "Limpar"
  document.getElementById('clear-button').addEventListener('click', clearItems);