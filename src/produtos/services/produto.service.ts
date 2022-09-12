import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Produto } from "../entities/produto.entity";

@Injectable()
export class ProdutoService{
    constructor(
        @InjectRepository(Produto)
        private produtoRepository: Repository<Produto>
    ) {}

    async findAll(): Promise<Produto[]>{
        return this.produtoRepository.find()
    }

    async findById(id: number): Promise<Produto>{
        let produto = await this.produtoRepository.findOne({
            where: {id}
        })

        if(!produto)
        throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND)
        return produto
    }

    async findByNome(nome: string): Promise<Produto[]> {
        return this.produtoRepository.find({
            where: {nome: ILike(`%${nome}%`)}
        })
    }

    async findByCodigo(codigoProduto: number): Promise<Produto[]>{
        let codigo = await this.produtoRepository.find({
            where: {codigoProduto}
        })

        if(!codigoProduto)
        throw new HttpException('Não existe nenhum produto com esse preço!', HttpStatus.NOT_FOUND)
        return codigo
    }

    async findByPreco(preco: number): Promise<Produto[]>{
        let precoProduto = await this.produtoRepository.find({
            where: {preco}
        })

        if(!precoProduto)
        throw new HttpException('Não existe nenhum produto com esse preço!', HttpStatus.NOT_FOUND)
        return precoProduto
    }

    async create(produto: Produto): Promise<Produto>{
        return this.produtoRepository.save(produto)
    }

    async update(produto): Promise<Produto>{
        let produtoUpdate = await this.findById(produto.id)

        if(!produtoUpdate || !produto.id)
        throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND)
        return this.produtoRepository.save(produto)
    }

    async delete(id: number): Promise<DeleteResult>{
        let produtoDelete = await this.findById(id)
        if(!produtoDelete)
        throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND)
        return this.produtoRepository.delete(id)
    }

    }

