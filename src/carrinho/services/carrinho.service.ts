/*
import { HttpException, HttpStatus, Injectable, Post } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { Carrinho } from "../entities/carrinho.entity";

@Injectable()
export class CarrinhoService{

    constructor(
        @InjectRepository(Carrinho)
        private carrinhoRepository: Repository<Carrinho>
    ) {}

    async findAll(): Promise<Carrinho[]>{
        return this.carrinhoRepository.find()
    }

    async findById(id: number): Promise<Carrinho>{
        let carrinho = await this.carrinhoRepository.findOne({
            where: {id}
        })

        if(!carrinho)
        throw new HttpException('Carrinho inexistente!', HttpStatus.NOT_FOUND)
        return carrinho

    }

    async create(carrinho: Carrinho): Promise<Carrinho>{
    return this.carrinhoRepository.save(carrinho)
    }

    async delete(id: number): Promise<DeleteResult>{
        let carrinhoDelete = await this.findById(id)

        if(!carrinhoDelete)
        throw new HttpException('Carrinho Inexistente!', HttpStatus.NOT_FOUND)
        return this.carrinhoRepository.delete(id)
    }
}
*/