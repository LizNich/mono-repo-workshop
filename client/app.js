const h1 = document.querySelector("h1");

async function updateh1() {
  const response = await fetch("http://localhost:8080/message");
  const data = await response.json();
  h1.textContent = data;
}

updateh1();
