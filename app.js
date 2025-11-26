const saida = document.querySelector("#saida");
const btnCarregar = document.querySelector("#btn-carregar");
const btnCriar = document.querySelector("#btn-criar");
const inputNome = document.querySelector("#nome");
const inputIdade = document.querySelector("#idade");

btnCarregar.addEventListener("click", async () => {
  try {
    const res = await fetch("http://localhost:3000/users");
    const data = await res.json();

    saida.textContent = JSON.stringify(data, null, 2)
  } catch (error) {
    saida.textContent = "Erro ao carregar usuários";
  }
});

btnCriar.addEventListener("click", async () => {
  const nome = inputNome.value;
  const idade = Number(inputIdade.value);

  try {
    const res = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome, idade }), 
    });

    const data = await res.json();

    saida.textContent = JSON.stringify(data, null, 2);

    // Limpa inputs
    inputNome.value = "";
    inputIdade.value = "";
  } catch (error) {
    alert("Erro ao criar usuário");
  }
});
