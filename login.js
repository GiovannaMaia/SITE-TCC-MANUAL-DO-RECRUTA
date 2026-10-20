document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value.trim();
  const mensagem = document.getElementById('mensagem');

  mensagem.textContent = '';
  mensagem.className = 'mensagem';

  if (!email || !senha) {
    mensagem.classList.add('erro');
    mensagem.textContent = 'Por favor, preencha todos os campos.';
    return;
  }

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailValido.test(email)) {
    mensagem.classList.add('erro');
    mensagem.textContent = 'Digite um e-mail válido.';
    return;
  }

  if (email === 'teste@recruta.com' && senha === '1234') {

    mensagem.classList.add('sucesso');
    mensagem.textContent = 'Login realizado com sucesso!';

    setTimeout(() => {
      window.location.href = 'poslogin.html';
    }, 1500);

  } else {

    mensagem.classList.add('erro');
    mensagem.textContent = 'E-mail ou senha incorretos.';

  }
});
