import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { DetalleService } from './detalle.service';
import { CreateDetalleDto } from './dto/create-detalle.dto';
import { UpdateDetalleDto } from './dto/update-detalle.dto';

@Controller('detalle')
export class DetalleController {
  constructor(private readonly detalleService: DetalleService) {}

  @Post()
  async create(@Body() createDetalleDto: CreateDetalleDto) {
    return await this.detalleService.create(createDetalleDto);
  }

  @Get()
  async findAll() {
    return await this.detalleService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return await this.detalleService.findOne(id);
    /* return this.detalleService.findOne(+id); */
  }

  @Patch(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateDetalleDto: UpdateDetalleDto,
  ) {
    return await this.detalleService.update(id, updateDetalleDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    return await this.detalleService.remove(id);
  }
}
