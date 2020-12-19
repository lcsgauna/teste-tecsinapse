
"Nos demais atributos abaixo você encontrará as instruções para sequência da primeira etapa técnica do processo seletivo da Tecsinapse. Leia atentamente e siga as instruções até a última etapa. Boa sorte!"

"etapa1": "Faça a leitura do input com o link identificado por 'linkInput'. Esse input contém uma lista fictícia de pedidos por item e está no formato JSON. Cada item do vetor do objeto JSON refere-se a um pedido de um item, com sua quantidade, a data e o valor total.",

"linkInput": "https://eventsync.portaltecsinapse.com.br/public/recrutamento/input?email=",

"etapa2": "Utilizando esse input JSON, calcule qual o item mais vendido (maior quantidade) no mês de Dezembro/2018 e qual o valor total de todos os pedidos desse item no mesmo mês. Em caso de empate, escolha por ordem alfabética pelo item do pedido. Você pode resolver o problema da forma que achar melhor. Pode ser utilizada qualquer linguagem de programação.",

"etapa3": "Com os valores calculados na etapa 2, faça uma requisição POST para o link identificado por 'linkFinalizar'. Como dito na etapa 2, você pode utilizar qualquer linguagem de programação, não esqueça de enviar também o código ao final do teste. No CORPO da requisição, informe os valores calculados na etapa 2, separados por um caractere '#'. É esperado que os valores sejam passados como Content-Type: text/plain. Veja o exemplo, identificado por 'exemploEtapa3'",
"exemploEtapa3": "Suponha que o item mais vendido seja o 'item 3' e o valor total 780.49. No CORPO da requisição POST, como text/plain, informar: item 3#780.49",

"linkFinalizar": "https://eventsync.portaltecsinapse.com.br/public/recrutamento/finalizar?email=",

"etapa4": "Caso o cálculo esteja correto, o sistema validará a sua resposta e informará um número. Caso esteja errado, uma mensagem de erro será exibida. Você pode tentar fazer o POST quantas vezes quiser, até acertar a resposta. Ao finalizar com sucesso, copie o número e envie ele como resposta para o email onde esse desafio foi enviado, com uma explicação de como você chegou na solução. Anexe também um arquivo zip contendo todos os arquivos você utilizou no processo, como códigos-fonte e arquivos auxiliares."
