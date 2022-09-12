import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Produto } from "../entities/produto.entity";
import { ProdutoService } from "../services/produto.service";

@Controller('/produto')
export class ProdutoController{
    constructor(
        private readonly service: ProdutoService) {}


    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Produto[]>{
        return this.service.findAll()
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise <Produto> {
        return this.service.findById(id)
    }

    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK)
    findByNome(@Param('nome') nome: string): Promise <Produto[]>{
        return this.service.findByNome(nome)
    }

    @Get('/codigo/:codigo')
    @HttpCode(HttpStatus.OK)
    findByCodigo(@Param('codigo') codigoProduto: number): Promise <Produto[]>{
        return this.service.findByCodigo(codigoProduto)
    }

    @Get('/preco/:preco')
    @HttpCode(HttpStatus.OK)
    findByPreco(@Param('preco') preco: number): Promise <Produto[]>{
        return this.service.findByPreco(preco)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() produto: Produto): Promise<Produto>{
        return this.service.create(produto)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() produto: Produto): Promise<Produto>{
        return this.service.update(produto)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.service.delete(id)
    }
}