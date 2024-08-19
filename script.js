// Змінні класів для доступу до стилів
const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

// Отримання елементів зі сторінки
const $list = $('#todo-list')
const $itemCountSpan = $('#item-count')
const $uncheckedCountSpan = $('#unchecked-count')

// Функція для створення нового TODO
function newTodo() {
  // Отримання тексту TODO від користувача
  const todoText = prompt("Enter a new TODO:") || "New TODO"

  // Створення нового елемента TODO за допомогою jQuery
  const $todoContainer = $('<li>').addClass(classNames.TODO_ITEM)

  const $checkbox = $('<input>')
    .attr('type', 'checkbox')
    .addClass(classNames.TODO_CHECKBOX)
    .on('change', updateUncheckedCount)

  const $todoText = $('<span>')
    .addClass(classNames.TODO_TEXT)
    .text(todoText)

  const $deleteButton = $('<button>')
    .addClass(classNames.TODO_DELETE)
    .text('Delete')
    .on('click', function() {
      $todoContainer.remove()
      updateCounts()
    })

  // Додавання елементів до контейнера TODO
  $todoContainer.append($checkbox, $todoText, $deleteButton)

  // Додавання нового TODO до списку
  $list.append($todoContainer)

  // Оновлення лічильників
  updateCounts()
}

// Функція для оновлення лічильників
function updateCounts() {
  const items = $list.children().length
  const uncheckedItems = $list.find(`.${classNames.TODO_CHECKBOX}:not(:checked)`).length

  $itemCountSpan.text(items)
  $uncheckedCountSpan.text(uncheckedItems)
}

// Функція для оновлення кількості неперевірених завдань
function updateUncheckedCount() {
  const uncheckedItems = $list.find(`.${classNames.TODO_CHECKBOX}:not(:checked)`).length
  $uncheckedCountSpan.text(uncheckedItems)
}
