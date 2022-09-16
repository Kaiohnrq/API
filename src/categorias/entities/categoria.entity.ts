import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produto } from "../../produtos/entities/produto.entity";

@Entity('tb_categorias')
export class Categoria {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number

    @IsNotEmpty()
    @MaxLength(255)
    @Column({ nullable: false, length: 255 })
    @ApiProperty()
    nome: string


    @OneToMany(() => Produto, (produto) => produto.categoria)
    @ApiProperty({type: () => Produto})
    produtos: Produto[]


}