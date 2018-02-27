document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  newCard();
  clearFields();a
  enableButton();
});

document.querySelector('form').addEventListener('input', function() {
	enableButton();
});

function enableButton() {
  var formValidity = document.querySelector('form').checkValidity();
  if (formValidity === true) {
		document.querySelector('.form-submit').disabled = false
	} else if (formValidity === false) {
		document.querySelector('.form-submit').disabled = true
	};  
}

function readCard(e, id) {
  e.parentNode.classList.toggle('read');
  e.classList.toggle('read-button-clicked');
}

function deleteCard(id) {
  document.getElementById(id).remove();
}

function newCard() {
  var cardHolder = document.querySelector('.card-container');
  var title = document.querySelector('.input-title');
  var url = document.querySelector('.input-url');
  var id = Date.now();
  var newElement = `<article id=${id} class="bookmark-card">
      <h3 class="bookmark-title">${title.value}e</h3>
      <hr>
      <a type="url" class="bookmark-url" href="#">${url.value}</a>
      <hr>
      <div class="card-buttons">
        <p onClick='readCard(${id}) 'class="read-button">Read</p>
        <p onClick='deleteCard(${id})' class="delete-button">Delete</p>
      </div>
    </article>`;
  cardHolder.innerHTML += newElement;
}

function clearFields() {
  document.querySelector('.input-title').value = '';
  document.querySelector('.input-url').value = '';
}
