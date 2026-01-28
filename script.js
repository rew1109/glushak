function startTimer() {
  const startDate = new Date('2025-12-29 03:37:00'); // Ваша дата
  const currentDate = new Date();
  const diff = currentDate - startDate; // Разница в миллисекундах

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('timer').innerHTML =
    `${days}д :${hours}ч :${minutes}м :${seconds}с`;
}

// Обновляем таймер каждые 1000 мс (1 секунда)
setInterval(startTimer, 1000);

// Запускаем таймер сразу при загрузке страницы

startTimer();
