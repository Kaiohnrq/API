import { Produto } from "src/produtos/entities/produto.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Entity, JoinColumn, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('tb_carrinho')
export class Carrinho{

    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => Usuario, (usuario) => usuario.carrinho)
    @JoinColumn()
    usuario: Usuario

    @ManyToMany(() => Produto)
    @JoinColumn()
    produtos: Produto
}