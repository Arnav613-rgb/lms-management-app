function addBook() {
  db.collection('books').add({
    title: document.getElementById('title').value,
    author: document.getElementById('author').value,
    quantity: parseInt(document.getElementById('quantity').value),
    available: parseInt(document.getElementById('quantity').value)
  }).then(() => {
    alert('Book added');
    loadBooks();
  });
}

function loadBooks() {
  const table = document.getElementById('bookTable');
  table.innerHTML = '';

  db.collection('books').get().then(snapshot => {
    snapshot.forEach(doc => {
      const b = doc.data();
      table.innerHTML += `
        <tr>
          <td>${b.title}</td>
          <td>${b.author}</td>
          <td>${b.available}/${b.quantity}</td>
        </tr>`;
    });
  });
}

loadBooks();