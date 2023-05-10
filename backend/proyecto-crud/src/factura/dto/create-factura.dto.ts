/* eslint-disable prettier/prettier */
import { IsNumber, IsString } from 'class-validator';

export class createFacturaDto {
  @IsString()
  FechaEmision: string;

  @IsNumber()
  IdCliente: number;

  @IsString()
  NombreCliente: string;

  @IsString()
  DireccionCliente: string;

  @IsString()
  RucCliente: string;

  @IsNumber()
  Subtotal: number;

  @IsNumber()
  Iva: number;

  @IsNumber()
  Total: number;
}