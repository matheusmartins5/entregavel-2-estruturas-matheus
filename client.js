import http from "http";
import { LinkedList } from "./linked-list/linked-list.js";

const options = {
  hostname: "localhost",
  port: 3000,
  path: "/",
  method: "GET",
};

const req = http.request(options, (res) => {
  console.log("Conectado ao servidor.");

  /* 4) Crie uma lista encadeada vazia aqui */
  const lista = new LinkedList();

  res.on("data", (chunk) => {
    /* 5) Utilize o método add para guardar cada chunk na lista encadeada */
    lista.add(chunk.toString());
    console.log(`Dado recebido: ${chunk}\n`);
  });

  res.on("end", () => {
    /* 10) Utilize o método getAt para mostrar o que existe nos índices 3 e 20 */
    console.log("Valor no índice 3:", lista.getAt(3));
    console.log("Valor no índice 20:", lista.getAt(20));

    /* 11) Utilize o método getSize para mostrar o tamanho da lista encadeada */
    console.log("Tamanho da lista:", lista.getSize());

    /* 12) Utilize o método search para mostrar o primeiro índice da cor "verde" */
    console.log("Primeiro índice de 'verde':", lista.search("verde"));

    /* 13) Utilize o método search para mostrar o último índice da cor "verde" */
    console.log("Último índice de 'verde':", lista.searchLast("verde"));

    /* 14) Utilize o método removeAt para remover o elemento de índice 2 */
    console.log("Removido do índice 2:", lista.removeAt(2));

    /* 15) Utilize o método pop para remove o último elemento mostre o que foi removido */
    console.log("Último removido (pop):", lista.pop());

    /* 16) Utilize o método toArray para mostrar a lista encadeada como um vetor */
    console.log("Lista como vetor:", lista.toArray());

    console.log("\nTransmissão finalizada.");
  });
});

req.on("error", (e) => {
  console.error(`Problema com a requisição: ${e.message}`);
});

req.end();
