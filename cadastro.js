document.getElementById('cadastroForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value.trim();
  const confirmar = document.getElementById('confirmar').value.trim();
  const mensagem = document.getElementById('mensagem');

  mensagem.textContent = '';

  // Verificações básicas
  if (!nome || !email || !senha || !confirmar) {
    mensagem.textContent = 'Por favor, preencha todos os campos.';
    return;
  }

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailValido.test(email)) {
    mensagem.textContent = 'Digite um e-mail válido.';
    return;
  }

  if (senha.length < 4) {
    mensagem.textContent = 'A senha deve ter pelo menos 4 caracteres.';
    return;
  }

  if (senha !== confirmar) {
    mensagem.textContent = 'As senhas não coincidem.';
    return;
  }

  // Simulação de cadastro local
  const usuario = { nome, email, senha };
  localStorage.setItem('usuario', JSON.stringify(usuario));

  mensagem.style.color = 'red';
  mensagem.textContent = 'Cadastro realizado com sucesso!';

  setTimeout(() => {
    window.location.href = 'login.html'; // Redireciona para o login
  }, 1200);
});
