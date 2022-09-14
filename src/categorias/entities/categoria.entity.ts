import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tb_categorias')
export class Categoria{

    @PrimaryGeneratedColumn()
    id: number
    
    @IsNotEmpty()
    @MaxLength(255)
    @Column({nullable: false, length:255})
    nome: string


}