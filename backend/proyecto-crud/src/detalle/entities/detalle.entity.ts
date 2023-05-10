import { CabeceraFactura } from 'src/factura/entities/factura.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DetalleComprobante')
export class DetalleFactura {
  @PrimaryGeneratedColumn('uuid')
  Id: string;

  @Column({ length: 50, type: 'varchar' })
  Descripcion: string;

  @Column({ type: 'integer' })
  PrecioUnitario: number;

  @Column({ type: 'integer' })
  Cantidad: number;

  @Column({ type: 'integer' })
  Subtotal: number;

  @ManyToOne(
    () => CabeceraFactura,
    (factura_encabezado) => factura_encabezado.Factura,
  )
  Encabezado: CabeceraFactura;
}
