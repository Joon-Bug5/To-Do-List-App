function newItem () {
// Adding list item
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert('You must write something!');
  } else {
    let list = $('#list');
    list.append(li);
  }

  // Crossing out the list items
  function crossOut () {
    li.toggleClass('strike');
  }

  li.on('dblclick', function (crossOut) {
    li.toggleClass('strike');
  });

  // Adding delete button 'X'
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on('click', deleteListItem);
  // Adding delete function
  function deleteListItem () {
    li.addClass('delete');
  }
  // Reordering the items:
  $('#list').sortable();
}
let container = $('.container').hide().slideDown(500);
