import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Usuario } from "../entities/usuario.entity";

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario>
    ) { }

    async findAll(): Promise<Usuario[]> {
        return this.usuarioRepository.find()
    }

    async findById(id: number): Promise<Usuario> {
        let usuario = await this.usuarioRepository.findOne({
            where: { id }
        })

        if (!usuario)
            throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND)
        return usuario
    }

    async findByNome(nome: string): Promise<Usuario[]> {
        return this.usuarioRepository.find({
            where: { nome: ILike(`%${nome}%`) }
        })
    }

    async findByEmail(email: string): Promise<Usuario[]> {
        return this.usuarioRepository.find({
            where: {email: ILike(`%${email}%`)}
        })
    }

    async findBySenha(senha: string): Promise<Usuario[]>{
        return this.usuarioRepository.find({
            where: {senha: ILike(`%${senha}%`)}
        })
    }

    async findByCpf(cpf: number): Promise<Usuario> {
        let usuario = await this.usuarioRepository.findOne({
            where: { cpf }

        })

        if (!usuario)
            throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND)
        return usuario
    }

    async create(usuario: Usuario): Promise<Usuario> {
        return this.usuarioRepository.save(usuario)
    }

    async update(usuario: Usuario): Promise<Usuario> {
        let usuarioUpdate = await this.findById(usuario.id)

        if (!usuarioUpdate || !usuario.id)
            throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND)
        return this.usuarioRepository.save(usuario)
    }

    async delete(id: number): Promise<DeleteResult> {
        let usuarioDelete = await this.findById(id)

        if (!usuarioDelete)
            throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND)
        return this.usuarioRepository.delete(id)
    }
}