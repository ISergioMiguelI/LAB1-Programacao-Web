// Adiciona um manipulador de eventos ao botão de submissão do formulário no modal "Nova Tarefa"
document.getElementById('nova-tarefa-form').addEventListener('submit', function(event) {
  // Previne o comportamento padrão do formulário
  event.preventDefault();

  // Obtém os valores dos campos de entrada do formulário
  var nome = document.getElementById('tarefa-nome').value;
  var descricao = document.getElementById('tarefa-descricao').value;
  var data = document.getElementById('tarefa-data').value;

  // Cria um novo elemento de linha para a tabela
  var row = document.createElement('tr');

  // Cria e configura os elementos de célula para a linha
  var nomeCell = document.createElement('td');
  nomeCell.textContent = nome;
  row.appendChild(nomeCell);

  var descricaoCell = document.createElement('td');
  descricaoCell.textContent = descricao;
  row.appendChild(descricaoCell);

  var dataCell = document.createElement('td');
  dataCell.textContent = data;
  row.appendChild(dataCell);

  // Adiciona a linha à tabela no container "Task Manager"
  document.getElementById('taskList').appendChild(row);

  // Limpa os campos de entrada do formulário
  this.reset();

  // Fecha o modal
  var modalNovaTarefa = bootstrap.Modal.getInstance(document.getElementById('modal-nova-tarefa'));
  modalNovaTarefa.hide();
});
// Adiciona um evento de clique a cada linha da tabela de tarefas
var taskRows = document.querySelectorAll('#taskList tr');
taskRows.forEach(function(row) {
    row.addEventListener('click', function() {
        // Encontra a descrição da tarefa na linha clicada
        var descricao = this.cells[1].textContent;

        // Preenche o campo de descrição no modal de edição
        document.getElementById('tarefa-nome-editada').value = descricao;

        // Abre o modal de edição
        var modalEditarTarefa = new bootstrap.Modal(document.getElementById('modal-editar-tarefa'));
        modalEditarTarefa.show();
    });
});