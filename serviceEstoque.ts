
import readCSV from '../model/readCSV'
import {Data} from '../model/data.interface'
import writeCSV from '../model/writeCSV'
import { fileURLToPath } from 'url';
import fs from 'fs';

const filePath = './model/estoque.csv'
class estoqueService{
    async criar(data: Data){
        if (data.id < 0)
        {
            throw new Error("O ID não pode ser negativo"); 
        }
        writeCSV('../model/estoque.csv', [data]);
        if (data.id == null)
        {
            throw new Error("O ID inserido é invalido"); 
        }
        if (data.valor == null)
        {
            throw new Error("O valor inserido é invalido"); 
        }
        const produtos = await readCSV(filePath);
        const rep = produtos.find(p => p.id == data.id);
        if (rep)
        {
            throw new Error("O ID inserido já foi utilizado");
        }

        writeCSV('../model/estoque.csv', [data]);

    }

    async remover(id: number)
    {
        const produtos = await readCSV(filePath);
        const produtoIndex = produtos.findIndex(produto => produto.id == id);

        if (!produtoIndex)
        {
            throw new Error("Não há nenhum produto com este ID");
        }
        if (produtoIndex)
        {
            produtos.splice(produtoIndex, 1);
            fs.writeFileSync(filePath, '');
            fs.appendFileSync(filePath, 'id,title,value\n');
        }

    }

    async listar()
    {
        return await readCSV(filePath);
    }

    async calcularvt()
    {
        const data = await this.listar()
        let soma = 0; 
        for (const item of data)
        {
            console.log(item.valor)
            if(!isNaN(item.valor))
            {
                soma += item.valor; 
            }
        }
        return soma;
    }

    async calcularpt()
    {
        const data = await this.listar()
        let soma = 0; 
        for (const item of data)
        {
            console.log(item.peso)
            if(!isNaN(item.peso))
            {
                soma += item.peso; 
            }
        }
        return soma;
    }


    async mediavalor()
    {
        const data = await this.listar()
        let soma = 0; 
        let media = 0;
        for (const item of data)
        {
            console.log(item.valor)
            if(!isNaN(item.valor))
            {
                soma += item.valor; 
            }
        }
        if (data.length != 0)
        media = soma/data.length;

        return media; 
    }

    async mediapeso()
    {
        const data = await this.listar()
        let soma = 0; 
        let media = 0;
        for (const item of data)
        {
            console.log(item.peso)
            if(!isNaN(item.peso))
            {
                soma += item.peso; 
            }
        }
        if (data.length != 0)
        media = soma/data.length;

        return media; 
    }

    async qt()
    {
        const data = await this.listar();
        return data.length;

    }

    /* async pt()
    {
        
    }

*/



}


export default new estoqueService()