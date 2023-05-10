import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDetalleDto } from './dto/create-detalle.dto';
import { UpdateDetalleDto } from './dto/update-detalle.dto';
import { DetalleFactura } from './entities/detalle.entity';
import { v4 as uuid } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FacturaService } from 'src/factura/factura.service';
@Injectable()
export class DetalleService {
  constructor(
    @InjectRepository(DetalleFactura)
    private readonly DetalleFacutraRepository: Repository<DetalleFactura>,
    private readonly facturaService: FacturaService,
  ) {}
  /* private detalles: DetalleFactura[] = [
    {
      IdDetalle: uuid(),
      IdFactura: 12,
      Descripcion: 'Este es un comprobante',
      PrecioUnitario: 2,
      Cantidad: 2,
      Subtotal: 23.5,
    },
  ]; */

  /* async create(createDetalleDto: Partial<DetalleFactura>, IdFactura: number): Promise<DetalleFactura> {
    const rol = await this.rolRepository.findOne(rolId);

    if (!rol) {
      throw new Error('El rol no existe');
    }

    const usuario = this.usuarioRepository.create({
      ...usuarioData,
      rol,
    });

    return this.usuarioRepository.save(usuario);
  } */

  async create(createDetalleDto: CreateDetalleDto) {
    const factura = await this.facturaService.findOne(
      createDetalleDto.FacturaId,
    );
    const create_Factura_Detalle = this.DetalleFacutraRepository.create({
      Id: uuid(),
      Descripcion: createDetalleDto.Descripcion,
      PrecioUnitario: createDetalleDto.PrecioUnitario,
      Cantidad: createDetalleDto.Cantidad,
      Subtotal: createDetalleDto.Subtotal,
      Encabezado: factura,
    });
    const detalle_factura_new = await this.DetalleFacutraRepository.save(
      create_Factura_Detalle,
    );
    return detalle_factura_new;
  }

  async findAll() {
    return await this.DetalleFacutraRepository.find();
  }

  /* async findAll(): Promise<DetalleFactura[]> {
    return await this.DetalleFacutraRepository.find({
      relations: ['IdFactura'],
    });
  } */

  async findOne(id: string): Promise<DetalleFactura> {
    /* const detalles_factura = this.detalles.find(
      (detalles) => detalles.IdDetalle === id,
    );

    if (!detalles_factura)
      throw new NotFoundException(`Factura details ${id} not found)`);
 */
    const guardado = await this.DetalleFacutraRepository.findOne({
      where: {
        Id: id,
      },
    });
    if (!guardado)
      throw new NotFoundException(`Factura details ${id} not found)`);
    return guardado;
  }

  async update(id: string, updateDetalleDto: UpdateDetalleDto) {
    /* let update_Factura_Detalle = await this.findOne(id); */
    await this.DetalleFacutraRepository.update(id, updateDetalleDto);
    /* this.detalles = this.detalles.map((detalles) => {
      if (detalles.IdDetalle === id) {
        update_Factura_Detalle = {
          ...update_Factura_Detalle,
          ...updateDetalleDto,
        };
        return update_Factura_Detalle;
      }
      return detalles;
    }); */
    /* return update_Factura_Detalle; */
  }

  async remove(id: string): Promise<void> {
    await this.DetalleFacutraRepository.delete(id);
  }
}
