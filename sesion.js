function toggleForm() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    }
}

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const userData = {
        name: document.getElementById('regName').value,
        email: document.getElementById('regEmail').value,
        password: document.getElementById('regPassword').value
    };

    // Obtener usuarios existentes
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    if (users.some(user => user.email === userData.email)) {
        alert('Este email ya está registrado');
        return;
    }

    // Agregar nuevo usuario
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
    
    alert('Registro exitoso');
    toggleForm();
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Obtener usuarios
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Buscar usuario
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        alert(`¡Bienvenido ${user.name}!`);
    } else {
        alert('Email o contraseña incorrectos');
    }
});