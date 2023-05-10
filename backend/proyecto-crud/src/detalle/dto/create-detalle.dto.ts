import { IsNumber, IsString } from 'class-validator';

export class CreateDetalleDto {
  @IsString()
  FacturaId: string;
  @IsString()
  Descripcion: string;
  @IsNumber()
  PrecioUnitario: number;
  @IsNumber()
  Cantidad: number;
  @IsNumber()
  Subtotal: number;
}
