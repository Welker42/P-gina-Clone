document.getElementById('search-button').addEventListener('click', function() {
  var searchTerm = document.getElementById('search-input').value;
  if (searchTerm.trim() !== '') {
      alert('Você pesquisou por: ' + searchTerm);
      // Aqui você pode adicionar a lógica para redirecionar para uma página de resultados
  } else {
      alert('Por favor, digite algo para pesquisar.');
  }
});