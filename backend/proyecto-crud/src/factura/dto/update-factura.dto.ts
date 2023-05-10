/* eslint-disable prettier/prettier */
import { IsNumber, IsString, IsUUID, IsOptional } from 'class-validator';

export class updateFacturaDto {
  @IsUUID()
  @IsOptional()
  readonly Id?: string;
  
  @IsString()
  readonly FechaEmision?: string;

  @IsNumber()
  readonly IdCliente?: number;

  @IsString()
  readonly NombreCliente?: string;

  @IsString()
  readonly DireccionCliente?: string;

  @IsString()
  readonly RucCliente?: string;

  @IsNumber()
  readonly Subtotal?: number;

  @IsNumber()
  readonly Iva?: number;

  @IsNumber()
  readonly Total?: number;
}
