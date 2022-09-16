import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tb_usuarios')
export class Usuario {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number

    @IsNotEmpty()
    @Column({ nullable: false })
    @ApiProperty()
    cpf: number

    @IsNotEmpty()
    @MaxLength(255)
    @Column({ nullable: false, length: 255 })
    @ApiProperty()
    nome: string

    @IsNotEmpty()
    @Column({ nullable: false })
    @ApiProperty()
    nascimento: Date

    @IsNotEmpty()
    @MaxLength(255)
    @Column({ nullable: false, length: 255 })
    @ApiProperty()
    genero: string

    @IsNotEmpty()
    @MaxLength(255)
    @Column({ nullable: false, length: 255 })
    @ApiProperty()
    email: string

    @IsNotEmpty()
    @Column({ nullable: false })
    @ApiProperty()
    cep: number

    @IsNotEmpty()
    @MaxLength(255)
    @Column({ nullable: false, length: 255 })
    @ApiProperty()
    endereco: string

    @IsNotEmpty()
    @MaxLength(255)
    @Column({ nullable: false, length: 255 })
    @ApiProperty()
    senha: string

    @IsNotEmpty()
    @Column({ nullable: false })
    @ApiProperty()
    favoritos: number

}