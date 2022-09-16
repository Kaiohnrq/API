import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../../categorias/entities/categoria.entity";

@Entity({name: 'tb_produtos'})
export class Produto{
    

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number

    @IsNotEmpty()
    @MaxLength(255)
    @Column({nullable: false, length:255})
    @ApiProperty()
    nome: string

    @IsNotEmpty()
    @Column({nullable: false})
    @ApiProperty()
    codigoProduto: number

    @IsNotEmpty()
    @Column({nullable: false, type: "decimal", precision: 10, scale: 2})
    @ApiProperty()
    preco: number
    
    @IsNotEmpty()
    @MaxLength(255)
    @Column({nullable: false, length:255})
    @ApiProperty()
    imagemProduto: string

    @IsNotEmpty()
    @Column()
    @ApiProperty()
    estoque: number

    @ManyToOne(() => Categoria, (categoria) => categoria.produtos, {
        onDelete:"CASCADE"
    })
    @ApiProperty({type: () => Categoria})
    categoria: Categoria

}