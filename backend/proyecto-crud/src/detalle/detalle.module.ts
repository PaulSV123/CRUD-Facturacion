import { Module } from '@nestjs/common';
import { DetalleService } from './detalle.service';
import { DetalleController } from './detalle.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetalleFactura } from './entities/detalle.entity';
import { FacturaModule } from 'src/factura/factura.module';

@Module({
  controllers: [DetalleController],
  providers: [DetalleService],
  imports: [TypeOrmModule.forFeature([DetalleFactura]), FacturaModule],
})
export class DetalleModule {}
