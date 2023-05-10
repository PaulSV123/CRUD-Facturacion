import { Module } from '@nestjs/common';
import { FacturaController } from './factura.controller';
import { FacturaService } from './factura.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CabeceraFactura } from './entities/factura.entity';

@Module({
  controllers: [FacturaController],
  providers: [FacturaService],
  imports: [TypeOrmModule.forFeature([CabeceraFactura])],
  exports: [FacturaService],
})
export class FacturaModule {}
