import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Usuario } from "../entities/usuario.entity";
import { UsuarioService } from "../services/usuario.service";


@Controller('/usuario')
export class UsuarioController{
    constructor(private readonly service: UsuarioService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Usuario[]>{
        return this.service.findAll()
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id:number): Promise<Usuario>{
       return this.service.findById(id)
    }

    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK)
    findByNome(@Param('nome') nome:string): Promise<Usuario[]>{
       return this.service.findByNome(nome)
    }

    @Get('/cep/:cep')
    @HttpCode(HttpStatus.OK)
    findByCep(@Param('cep', ParseIntPipe) cep:number): Promise<Usuario[]>{
       return this.service.findByCep(cep)
    }

    @Get('/cpf/:cpf')
    @HttpCode(HttpStatus.OK)
    findByCpf(@Param('cpf', ParseIntPipe) cpf:number): Promise<Usuario>{
       return this.service.findByCpf(cpf)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() usuario: Usuario): Promise<Usuario>{
        return this.service.create(usuario)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body()usuario: Usuario): Promise<Usuario>{
        return this.service.update(usuario)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id:number){
        return this.service.delete(id)
    }


}