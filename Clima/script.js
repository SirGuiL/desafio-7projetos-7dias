document.querySelector('.busca').addEventListener('submit', (event) => {
  event.preventDefault();

  let input = document.querySelector('#searchInput').value;

  if (input !== '') {
    showWarning('Carregando...');

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=930d5f4249210a67de15134ee5c94f03`;
  }
});

function showWarning(message) {
  document.querySelector('.aviso').innerHTML = message;
}
