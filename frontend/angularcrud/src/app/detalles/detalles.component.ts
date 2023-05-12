import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceGetService } from '../api-service-get.service';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement,Estanteria } from '../models/factura-detalle';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'Descripcion', 'PrecioUnitario', 'Cantidad', 'Subtotal'];
  dataSource = new MatTableDataSource<any>([]);
  clickedRows = new Set<any>();

  public facturas_detalles:any = [];
  public form: FormGroup | any;
  public formDelete: FormGroup | any;
  public formActualizar: FormGroup | any;

  constructor(
    private apiService: ApiServiceGetService,
    private formBuildeer: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.CargarDataDetalles();

    this.form = this.formBuildeer.group({
      Descripcion: '',
      PrecioUnitario: 0,
      Cantidad: 0,
      Subtotal: 0,
      FacturaId: '',
    });
    this.formDelete = this.formBuildeer.group({
      Id_factura_detalle: '',
    });
    this.formActualizar = this.formBuildeer.group({
      Id_factura_detalle: '',
      Descripcion: '',
      PrecioUnitario: 0,
      Cantidad: 0,
      Subtotal: 0,
    });
  }

  /* public CargarDataDetalles(){
    this.apiService.getFacturasDetalles().subscribe(respuesta => {
      this.dataSource = new MatTableDataSource<PeriodicElement>(respuesta);
      this.facturas_detalles = respuesta;
      console.log(respuesta);
    })
  } */

  public CargarDataDetalles(){
    this.apiService.getFacturasDetalles().subscribe((respuesta:any) => {
      this.dataSource = new MatTableDataSource<any>(respuesta);
      this.facturas_detalles = respuesta;
      console.log(respuesta);
    })
  }

  public EnviarDataDetalles() {
    const factura_detalle = {
      Descripcion: this.form.value.Descripcion,
      PrecioUnitario: this.form.value.PrecioUnitario,
      Cantidad: this.form.value.Cantidad,
      Subtotal: this.form.value.Subtotal,
      FacturaId: this.form.value.FacturaId,
    };

    this.apiService.postFacturaDetalles(factura_detalle).subscribe(response => {
      this.facturas_detalles = response;
      this.CargarDataDetalles();
      console.log('Factura Detalle agregada exitosamente', response);
    }, error => {
      console.error('Error al agregada la factura', error);
    });
  }

  public eliminarFacturaDetalles() {
    const FacturaId = this.formDelete.value.Id_factura_detalle; // Id de la factura que deseas eliminar

    this.apiService.deleteFacturaDetalles(FacturaId).subscribe(response => {
      this.CargarDataDetalles();
      console.log('Factura eliminada exitosamente', response);
    }, error => {
      console.error('Error al eliminar la factura', error);
    });
  }

  public actualizarFacturaDetalles() {
    const FacturaId = this.formActualizar.value.Id_factura_detalle;
    const factura = {
      Descripcion: this.formActualizar.value.Descripcion,
      PrecioUnitario: this.formActualizar.value.PrecioUnitario,
      Cantidad: this.formActualizar.value.Cantidad,
      Subtotal: this.formActualizar.value.Subtotal,
    };

    this.apiService.patchFacturaDetalles(FacturaId,factura).subscribe(response => {
      this.facturas_detalles = response;
      this.CargarDataDetalles();
      console.log('Factura actualizada exitosamente', response);
    }, error => {
      console.error('Error al actualizada la factura', error);
    });
  }

}
