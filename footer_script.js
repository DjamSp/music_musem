
  // Простой скрипт после отправки формы: имитация подписки [web:14][web:17]
  document.getElementById('subscribeForm').addEventListener('submit', function (e) {
    e.preventDefault(); // не перезагружать страницу
    const email = document.getElementById('emailInput').value.trim();

    if (!email) {
      alert('Пожалуйста, введите e-mail.');
      return;
    }

    // Здесь можно сделать реальный запрос на сервер (fetch/AJAX)
    alert('Спасибо за подписку, ' + email + '!');
    this.reset();
  });


