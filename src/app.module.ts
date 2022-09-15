import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './categorias/entities/categoria.entity';
import { CategoriaModule } from './categorias/modules/categoria.module';
import { Produto } from './produtos/entities/produto.entity';
import { ProdutoModule } from './produtos/module/produto.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/modules/usuario.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'db_uana',
    entities: [Produto, Categoria, Usuario],
    synchronize: true
  }),
    ProdutoModule,
    CategoriaModule,
    UsuarioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
