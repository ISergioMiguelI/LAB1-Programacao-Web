// Adiciona um manipulador de eventos ao botão de submissão do formulário no modal "Nova Tarefa"
document.getElementById('nova-tarefa-form').addEventListener('submit', function(event) {
  // Previne o comportamento padrão do formulário
  event.preventDefault();

  // Obtém os valores dos campos de entrada do formulário
  var descricao = document.getElementById('tarefa-descricao').value;
  var data = document.getElementById('tarefa-data').value;

  // Cria um novo elemento de linha para a tabela
  var row = document.createElement('tr');

  // Cria e configura as células para a nova linha da tabela
  var descricaoCell = document.createElement('td');
  descricaoCell.textContent = descricao;
  row.appendChild(descricaoCell);

  var dataCell = document.createElement('td');
  dataCell.textContent = data;
  row.appendChild(dataCell);

  // Cria a célula de checkbox para a nova linha da tabela
  var checkboxCell = document.createElement('td');
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = 'tarefa-feita';
  checkboxCell.appendChild(checkbox);
  row.appendChild(checkboxCell);

  // Adiciona a nova linha à tabela no container "Task Manager"
  document.getElementById('taskList').appendChild(row);

  // Limpa os campos de entrada do formulário
  this.reset();
});
