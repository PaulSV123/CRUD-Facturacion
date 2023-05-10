/* import { PartialType } from '@nestjs/mapped-types';
import { CreateDetalleDto } from './create-detalle.dto';

export class UpdateDetalleDto extends PartialType(CreateDetalleDto) {} */

import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateDetalleDto {
  @IsUUID()
  @IsOptional()
  readonly Id?: string;

  @IsString()
  @IsOptional()
  readonly Descripcion?: string;

  @IsNumber()
  @IsOptional()
  readonly PrecioUnitario?: number;

  @IsNumber()
  @IsOptional()
  readonly Cantidad?: number;

  @IsNumber()
  @IsOptional()
  readonly Subtotal?: number;
}
