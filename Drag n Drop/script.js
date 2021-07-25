let areas = {
  a: null,
  b: null,
  c: null,
};

document.querySelectorAll('.item').forEach((item) => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
});

document.querySelectorAll('.area').forEach((area) => {
  area.addEventListener('dragover', dragOver); // Sempre que estiver arrastando um item e passar por cima da área do evento
  area.addEventListener('dragleave', dragLeave); // Quando sai de uma área com drop disponível
  area.addEventListener('drop', drop); // Sempre que soltar o item sobre a área
});

document.querySelector('.neutralArea').addEventListener('dragover', dragOverNeutral);
document.querySelector('.neutralArea').addEventListener('dragleave', dragLeaveNeutral);
document.querySelector('.neutralArea').addEventListener('drop', dropNeutral);

// functions items
function dragStart(event) {
  event.currentTarget.classList.add('dragging'); // diminui a opacidade do item
}

function dragEnd(event) {
  event.currentTarget.classList.remove('dragging');
}

// functions area
function dragOver(event) {
  if (event.currentTarget.querySelector('.item') === null) {
    event.preventDefault(); // Torna a área disponível para o drop
    event.currentTarget.classList.add('hover');
  }
}

function dragLeave(event) {
  event.currentTarget.classList.remove('hover');
}

function drop(event) {
  event.currentTarget.classList.remove('hover');

  if (event.currentTarget.querySelector('.item') === null) {
    let dragItem = document.querySelector('.item.dragging');
    event.currentTarget.appendChild(dragItem); // adiciona o item na caixa
    updateAreas();
  }
}

// functions neutral area
function dragOverNeutral(event) {
  event.preventDefault();
  event.currentTarget.classList.add('hover');
}

function dragLeaveNeutral(event) {
  event.currentTarget.classList.remove('hover');
}

function dropNeutral(event) {
  event.currentTarget.classList.remove('hover');
  let dragItem = document.querySelector('.item.dragging');
  event.currentTarget.appendChild(dragItem);
  updateAreas();
}

// logic functions
function updateAreas() {
  document.querySelectorAll('.area').forEach((area) => {
    let name = area.getAttribute('data-name');

    if (area.querySelector('.item') !== null) {
      areas[name] = area.querySelector('.item').innerHTML;
    } else {
      areas[name] = null;
    }
  });

  if (areas.a === '1' && areas.b === '2' && areas.c === '3') {
    document.querySelector('.areas').classList.add('correct');
  } else {
    document.querySelector('.areas').classList.remove('correct');
  }
}
