/* eslint-disable prettier/prettier */
import { DetalleFactura } from 'src/detalle/entities/detalle.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CabeceraComprobante')
export class CabeceraFactura {
  @PrimaryGeneratedColumn('uuid')
  Id: string;

  @Column({ length: 50 })
  FechaEmision: string;

  @Column({ type: 'integer' })
  IdCliente: number;

  @Column({ length: 50 })
  NombreCliente: string;

  @Column({ length: 50 })
  DireccionCliente: string;

  @Column({ length: 50 })
  RucCliente: string;

  @Column({ type: 'float' })
  Subtotal: number;

  @Column({ type: 'float' })
  Iva: number;

  @Column({ type: 'float' })
  Total: number;

  @OneToMany(() => DetalleFactura, Factura => Factura.Encabezado)
  Factura: DetalleFactura[];
}
