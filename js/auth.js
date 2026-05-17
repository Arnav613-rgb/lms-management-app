function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then(async (cred) => {
      const doc = await db.collection('users').doc(cred.user.uid).get();
      const role = doc.data().role;

      if (role === 'admin') {
        window.location = 'admin-dashboard.html';
      } else {
        window.location = 'student-dashboard.html';
      }
    })
    .catch(err => alert(err.message));
}

function logout() {
  auth.signOut().then(() => {
    window.location = 'index.html';
  });
}