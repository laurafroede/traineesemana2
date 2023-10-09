import { adicionarProduto, removerProduto, listarProdutos, calcularProdutos, calcularMediaValor, calcularMediaPeso, calcularQT, calcularVT, calcularPT } from "./controller/controleEstoque";
import * as readline from 'readline';
import {Data} from "./model/data.interface";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    console.log("Escolha uma opção:");
    console.log("1. Adicionar Item ao Inventário");
    console.log("2. Remover Item do Inventáriio");
    console.log("3. Listar Itens do Inventário");
    console.log("4. Ver Valor Total do Inventário");
    console.log("5. Ver Peso Total do Inventário");
    console.log("6. Calcular Média de Valor dos Itens");
    console.log("7. Calcular Média de Peso dos Itens");
    console.log("8. Ver Quantidade Total de Itens no inventário");
    console.log("9. Ver Quantidade Total de Produtos no inventário");
    console.log("0. Sair");
}


async function main() {
    while (true) {
        menu();

        const opcao = await askQuestion("Opção: ")

        switch (opcao) {
            case '1':
                const data: Data = {
                    id: 0,
                    nome: "",
                    valor: 0,
                    quantidade: 0,
                    peso: 0
                };

                data.id = parseInt(await askQuestion("ID do produto: "));
                data.nome = await askQuestion("Nome do produto: ");
                data.peso = parseInt(await askQuestion("Peso do produto: "));
                data.quantidade = parseInt(await askQuestion("Quantidade: "));
                data.valor = parseFloat(await askQuestion("Valor do produto: "));

                await adicionarProduto(data);                
                break;
            case '2':
                const id = parseInt(await askQuestion("ID do produto: "));
                await removerProduto(id);
                break;
            case '3':
                await listarProdutos();
                break;
            case '4':
                await calcularVT ();
                break;
            case '5':
                await calcularPT();
                break;
            case '6':
                await calcularMediaValor();
                break;
            case '7':
                await calcularMediaPeso();
                break;
            case '8':
            await calcularQT();
            break;

            
            case '0':
                rl.close();
                return;
            default:
                console.log("Opção inválida!");
        }
    }

    function askQuestion(question: string): Promise<string> {
        return new Promise((resolve) => {
            rl.question(question, (answer) => {
                resolve(answer);
            });
        });
    }

}