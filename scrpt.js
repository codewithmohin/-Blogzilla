 document.getElementById('currentYear').textContent = new Date().getFullYear();

 const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

canvas.addEventListener('click', function (e) {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  ctx.fillStyle = '#' + Math.floor(Math.random() * 16777215).toString(16);
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, 2 * Math.PI);
  ctx.fill();
});

 const circle = document.querySelector('circle');
circle.addEventListener('mouseover', function () {
  this.style.fill = 'red';
});
circle.addEventListener('mouseout', function () {
  this.style.fill = 'yellow';
});

 document.getElementById('todoForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('emailInput').value;
  const list = document.getElementById('emailList');
  const li = document.createElement('li');
  li.textContent = email;
  list.appendChild(li);
  this.reset();
});
