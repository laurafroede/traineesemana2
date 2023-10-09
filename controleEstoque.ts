import serviceEstoque from "../service/serviceEstoque";
import { Data } from "../model/data.interface";

export async function adicionarProduto(data: Data)
{
    try{
        await serviceEstoque.criar(data);
        console.log("Produto adicionado");
    }catch(error){
        console.log(error);
    }

}

export async function removerProduto(id: number)
{
    try{
        await serviceEstoque.remover(id);
        console.log("Produto removido");
    }catch(error){
        console.log(error);
    }

}

export async function listarProdutos()
{
    try{
        const itens = await serviceEstoque.listar();
        console.log("Itens: ", itens);
    }catch(error){
        console.log(error);
    }

}

export async function calcularProdutos()
{
    try{
        const vt = await serviceEstoque.calcularvt();
        console.log("Valor total: ", vt);
    }catch(error){
        console.log(error);
    }
}

export async function calcularMediaValor()
{
    try{
        const media = await serviceEstoque.mediavalor();
        console.log("Media de valores: ", media);
    }catch(error){
        console.log(error);
    }
}

export async function calcularMediaPeso()
{
    try{
        const media = await serviceEstoque.mediapeso();
        console.log("Media dos pesos: ", media);
    }catch(error){
        console.log(error);
    }
}

export async function calcularQT()
{
    try{
        const qt = await serviceEstoque.qt();
        console.log("Quantidade total de produtos: ", qt);
    }catch(error){
        console.log(error);
    }
}

export async function calcularVT()
{
    try{
        const vt = await serviceEstoque.calcularvt();
        console.log("Quantidade valor total: ", vt);
    }catch(error){
        console.log(error);
    }
}

export async function calcularPT()
{
    try{
        const pt = await serviceEstoque.calcularpt();
        console.log("Peso Total: ", pt);
    }catch(error){
        console.log(error);
    }
}

