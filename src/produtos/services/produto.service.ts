import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, ManyToOne, Repository } from "typeorm";
import { Categoria } from "../../categorias/entities/categoria.entity";
import { Produto } from "../entities/produto.entity";

@Injectable()
export class ProdutoService {
    constructor(
        @InjectRepository(Produto)
        private produtoRepository: Repository<Produto>
    ) { }

    async findAll(): Promise<Produto[]> {
        return this.produtoRepository.find({
            relations: { categoria: true }
        })
    }

    async findById(id: number): Promise<Produto> {
        let produto = await this.produtoRepository.findOne({
            where: { id },
            relations: { categoria: true }
        })

        if (!produto)
            throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND)
        return produto
    }

    async findByNome(nome: string): Promise<Produto[]> {
        return this.produtoRepository.find({
            where: { nome: ILike(`%${nome}%`) },
            relations: { categoria: true }
        })
    }

    async findByCodigo(codigoProduto: number): Promise<Produto[]> {
        let codigo = await this.produtoRepository.find({
            where: { codigoProduto },
            relations: { categoria: true }
        })

        if (!codigoProduto)
            throw new HttpException('Não existe nenhum produto com esse preço!', HttpStatus.NOT_FOUND)
        return codigo
    }

    async findByPreco(preco: number): Promise<Produto[]> {
        let precoProduto = await this.produtoRepository.find({
            where: { preco },
            relations: { categoria: true }
        })

        if (!precoProduto)
            throw new HttpException('Não existe nenhum produto com esse preço!', HttpStatus.NOT_FOUND)
        return precoProduto
    }

    async create(produto: Produto): Promise<Produto> {
        return this.produtoRepository.save(produto)
    }

    async update(produto): Promise<Produto> {
        let produtoUpdate = await this.findById(produto.id)

        if (!produtoUpdate || !produto.id)
            throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND)
        return this.produtoRepository.save(produto)
    }

    async delete(id: number): Promise<DeleteResult> {
        let produtoDelete = await this.findById(id)
        if (!produtoDelete)
            throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND)
        return this.produtoRepository.delete(id)
    }


}

