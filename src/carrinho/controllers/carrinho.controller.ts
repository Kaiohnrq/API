/*
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post } from "@nestjs/common";
import { Carrinho } from "../entities/carrinho.entity";
import { CarrinhoService } from "../services/carrinho.service";

@Controller('/carrinho')
export class CarrinhoController{

    constructor(private readonly service: CarrinhoService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Carrinho[]>{
        return this.service.findAll()
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Carrinho>{
        return this.service.findById(id)
    }

    @Post()
    @HttpCode(HttpStatus.OK)
    create(@Body() carrinho: Carrinho): Promise<Carrinho>{
        return this.service.create(carrinho)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.service.delete(id)
    }

}
*/