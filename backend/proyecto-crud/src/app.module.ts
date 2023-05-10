import { Module } from '@nestjs/common';
import { FacturaModule } from './factura/factura.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetalleModule } from './detalle/detalle.module';
import { DetalleFactura } from './detalle/entities/detalle.entity';
import { CabeceraFactura } from './factura/entities/factura.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'masterkill',
      database: 'postgres',
      entities: [DetalleFactura, CabeceraFactura],
      synchronize: true,
    }),
    FacturaModule,
    DetalleModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
