import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FacturaService } from './factura.service';
import { createFacturaDto, updateFacturaDto } from './dto/general';
@Controller('factura')
export class FacturaController {
  constructor(private readonly facturasService: FacturaService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createFactura(@Body() CreateFacturaDto: createFacturaDto) {
    return await this.facturasService.createFactura(CreateFacturaDto);
  }

  @Get()
  async findAll() {
    return await this.facturasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return await this.facturasService.findOne(id);
  }

  @Patch(':id')
  async updateFactura(
    @Param('id', ParseUUIDPipe)
    id: string,
    @Body()
    UpdateBodyFacturaDto: updateFacturaDto,
  ) {
    return await this.facturasService.updateFactura(id, UpdateBodyFacturaDto);
  }

  @Delete(':id')
  async deleteFactura(
    @Param('id', ParseUUIDPipe)
    id: string,
  ) {
    return await this.facturasService.deleteFactura(id);
  }
}
