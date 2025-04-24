document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const role = document.getElementById('role').value;
    const password = document.getElementById('password').value;
  
    console.log(`Logging in: ${name}, ${email}, ${role}`);
    alert(`Login successful! Welcome, ${name} (${role})`);
  });
  