import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './produtos/entities/produto.entity';
import { ProdutoModule } from './produtos/module/produto.module';

@Module({
  imports: [TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306, 
  username: 'root', 
  password: 'root',
  database: 'db_uana',
  entities: [Produto],
  synchronize: true
  }),
  ProdutoModule
],  
    controllers: [],
  providers: [],
})
export class AppModule {}
