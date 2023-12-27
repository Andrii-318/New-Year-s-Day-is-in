//hw6
document.addEventListener("DOMContentLoaded", function () {
  const outputDiv = document.getElementById("output");
  function addToOutput(content) {
    outputDiv.innerHTML += content + "<br>";
  }

  // 1. Вивести числа від 10 до 20 в один рядок через кому
  let numbers = "";
  for (let i = 10; i <= 20; i++) {
    numbers += i + (i < 20 ? ", " : "");
  }
  addToOutput(numbers);

  // 2. Вивести квадрати чисел від 10 до 20
  for (let i = 10; i <= 20; i++) {
    addToOutput(`${i}^2 = ${i * i}`);
  }

  // 3. Вивести таблицю множення на 7
  for (let i = 1; i <= 10; i++) {
    addToOutput(`7 * ${i} = ${7 * i}`);
  }

  // 4. Знайти суму всіх чисел від 1 до 15
  let sum = 0;
  for (let i = 1; i <= 15; i++) {
    sum += i;
  }
  addToOutput(`Сума чисел від 1 до 15: ${sum}`);

  // 5. Знайти добуток чисел від 15 до 35
  let product = 1;
  for (let i = 15; i <= 35; i++) {
    product *= i;
  }
  addToOutput(`Добуток чисел від 15 до 35: ${product}`);

  // 6. Знайти середнє арифметичне чисел від 1 до 500
  sum = 0;
  for (let i = 1; i <= 500; i++) {
    sum += i;
  }
  let average = sum / 500;
  addToOutput(`Середнє арифметичне чисел від 1 до 500: ${average}`);

  // 7. Вивести суму парних чисел від 30 до 80
  sum = 0;
  for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  addToOutput(`Сума парних чисел від 30 до 80: ${sum}`);

  // 8. Вивести числа від 100 до 200, кратні 3
  numbers = [];
  for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) numbers.push(i);
  }
  addToOutput(`Числа від 100 до 200, кратні 3: ${numbers.join(", ")}`);

  // 9. Знайти дільники заданого числа
  let n = 36;
  numbers = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) numbers.push(i);
  }
  addToOutput(`Дільники числа ${n}: ${numbers.join(", ")}`);

  // 10. Визначити кількість парних дільників
  let evenDivisorsCount = numbers.filter((div) => div % 2 === 0).length;
  addToOutput(`Кількість парних дільників числа ${n}: ${evenDivisorsCount}`);

  // 11. Знайти суму парних дільників
  let sumEvenDivisors = numbers
    .filter((div) => div % 2 === 0)
    .reduce((acc, div) => acc + div, 0);
  addToOutput(`Сума парних дільників числа ${n}: ${sumEvenDivisors}`);
  let multiplicationTable = "<table style='border-collapse: collapse;'>";
  for (let i = 1; i <= 10; i++) {
    multiplicationTable += "<tr>";
    for (let j = 1; j <= 10; j++) {
      multiplicationTable += `<td style='border: 1px solid black; padding: 5px;'>${i} x ${j} = ${
        i * j
      }</td>`;
    }
    multiplicationTable += "</tr>";
  }
  multiplicationTable += "</table>";
  addToOutput(multiplicationTable);
});

//додатково
document.addEventListener("DOMContentLoaded", () => {
  const daysSpan = document.getElementById("days");
  const hoursSpan = document.getElementById("hours");
  const minutesSpan = document.getElementById("minutes");
  const secondsSpan = document.getElementById("seconds");

  function updateCountdown() {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1);
    const diff = newYear - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    daysSpan.textContent = days < 10 ? "0" + days : days;
    hoursSpan.textContent = hours < 10 ? "0" + hours : hours;
    minutesSpan.textContent = minutes < 10 ? "0" + minutes : minutes;
    secondsSpan.textContent = seconds < 10 ? "0" + seconds : seconds;
  }

  setInterval(updateCountdown, 1000);
});

//сніг
function makeSnow() {
  const snowFlake = document.createElement("div");
  const size = Math.random() * 4.5 + 3.5;
  snowFlake.className = "snow";
  snowFlake.style.width = `${size}px`;
  snowFlake.style.height = `${size}px`;
  snowFlake.style.left = `${Math.random() * window.innerWidth}px`;

  snowFlake.style.opacity = size / 8;
  snowFlake.style.zIndex = -5;

  snowFlake.style.animationDuration = `${Math.random() * 3 + 2}s`;

  document.body.appendChild(snowFlake);

  setTimeout(() => {
    snowFlake.remove();
  }, 5000);
}

setInterval(makeSnow, 40);
