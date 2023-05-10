import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { createFacturaDto, updateFacturaDto } from './dto/general';
import { InjectRepository } from '@nestjs/typeorm';
import { CabeceraFactura } from './entities/factura.entity';
import { Repository } from 'typeorm';
@Injectable()
export class FacturaService {
  constructor(
    @InjectRepository(CabeceraFactura)
    private readonly CabeceraFacturaRepository: Repository<CabeceraFactura>,
  ) {}
  /* private facturas: CabeceraFactura[] = [
    {
      IdFactura: uuid(),
      FechaEmision: '2023/05/10',
      IdCliente: 25,
      NombreCliente: 'Raul',
      DireccionCliente: 'Calle Lima',
      RucCliente: 'RC5645648S9489495D',
      Subtotal: 2513.5,
      Iva: 14.51,
      Total: 2527,
      factura: [],
    },
  ]; */

  async findAll() {
    return await this.CabeceraFacturaRepository.find();
  }

  async findOne(id: string): Promise<CabeceraFactura> {
    const guardado_cabecera = await this.CabeceraFacturaRepository.findOne({
      where: {
        Id: id,
      },
    });
    if (!guardado_cabecera)
      throw new NotFoundException(`Factura Cabecera details ${id} not found)`);
    return guardado_cabecera;
  }

  async createFactura(CreateFacturaDto: createFacturaDto) {
    const create_Factura_Cabecera = this.CabeceraFacturaRepository.create({
      Id: uuid(),
      FechaEmision: CreateFacturaDto.FechaEmision,
      IdCliente: CreateFacturaDto.IdCliente,
      NombreCliente: CreateFacturaDto.NombreCliente,
      DireccionCliente: CreateFacturaDto.DireccionCliente,
      RucCliente: CreateFacturaDto.RucCliente,
      Subtotal: CreateFacturaDto.Subtotal,
      Iva: CreateFacturaDto.Iva,
      Total: CreateFacturaDto.Total,
    });
    const detalle_factura_new = await this.CabeceraFacturaRepository.save(
      create_Factura_Cabecera,
    );
    return detalle_factura_new;
  }

  async updateFactura(id: string, UpdateFacturaDto: updateFacturaDto) {
    await this.CabeceraFacturaRepository.update(id, UpdateFacturaDto);
  }

  async deleteFactura(id: string) {
    await this.CabeceraFacturaRepository.delete(id);
  }
}
