import { IsNotEmpty, MaxLength } from "class-validator";
import { Carrinho } from "src/carrinho/entities/carrinho.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('tb_usuarios')
export class Usuario{

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({nullable: false})
    cpf: number

    @IsNotEmpty()
    @MaxLength(255)
    @Column({nullable: false, length:255})
    nome: string

    @IsNotEmpty()
    @Column({nullable: false})
    nascimento: Date
    
    @IsNotEmpty()
    @MaxLength(255)
    @Column({nullable: false, length:255})
    genero: string

    @IsNotEmpty()
    @MaxLength(255)
    @Column({nullable: false, length:255})
    email: string

    @IsNotEmpty()
    @Column({nullable: false})
    cep: number

    @IsNotEmpty()
    @MaxLength(255)
    @Column({nullable: false, length:255})
    endereco: string

    @IsNotEmpty()
    @MaxLength(255)
    @Column({nullable: false, length:255})
    senha: string

    @IsNotEmpty()
    @Column({nullable: false})
    favoritos: number

    @OneToOne(() => Carrinho, (carrinho) => carrinho.usuario)
    carrinho: Carrinho

}