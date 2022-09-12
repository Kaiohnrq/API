import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tb_produtos'})
export class Produto{
    

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @MaxLength(255)
    @Column({nullable: false, length:255})
    nome: string

    @IsNotEmpty()
    @Column({nullable: false})
    codigoProduto: number

    @IsNotEmpty()
    @Column({nullable: false, type: "decimal", precision: 10, scale: 2})
    preco: number
    
    @IsNotEmpty()
    @MaxLength(255)
    @Column({nullable: false, length:255})
    imagemProduto: string

    @IsNotEmpty()
    @Column()
    estoque: number



}