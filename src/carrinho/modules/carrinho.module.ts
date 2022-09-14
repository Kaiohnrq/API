import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CarrinhoController } from "../controllers/carrinho.controller";
import { Carrinho } from "../entities/carrinho.entity";
import { CarrinhoService } from "../services/carrinho.service";

@Module({
    imports: [TypeOrmModule.forFeature([Carrinho])],
    providers: [CarrinhoService],
    controllers: [CarrinhoController],
    exports: [TypeOrmModule]
})
export class CarrinhoModule{}