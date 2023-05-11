import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceGetService } from '../api-service-get.service';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {
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
      FacturaId: '',
    });
  }

  public CargarDataDetalles(){
    this.apiService.getFacturasDetalles().subscribe(respuesta => {
      this.facturas_detalles = respuesta;
      console.log(respuesta);
    })
  }

  public EnviarDataDetalles() {
    /* const factura_detalle = {
      Descripcion_Detalle: this.form.value.Descripcion,
      PrecioUnitario_Detalle: this.form.value.PrecioUnitario,
      Cantidad_Detalle: this.form.value.Cantidad,
      Subtotal_Detalle: this.form.value.Subtotal,
      FacturaId_Detalle: this.form.value.FacturaId,
    }; */

    const factura_detalle = {
      Descripcion_Detalle: "Hola ingreso",
      PrecioUnitario_Detalle: 2,
      Cantidad_Detalle: 2,
      Subtotal_Detalle: 4,
      FacturaId_Detalle: "cb1d4564-0d47-4e92-9596-864f6b953a23",
    };

    this.apiService.postFacturaDetalles(factura_detalle).subscribe(response => {
      this.facturas_detalles = response;
      console.log('Factura agregada exitosamente', response);
    }, error => {
      console.error('Error al agregada la factura', error);
    });
  }

  public eliminarFacturaDetalles() {
    const FacturaId = this.formDelete.value.Id_factura_detalle; // Id de la factura que deseas eliminar

    this.apiService.deleteFacturaDetalles(FacturaId).subscribe(response => {
      console.log('Factura eliminada exitosamente', response);
    }, error => {
      console.error('Error al eliminar la factura', error);
    });
  }

  public actualizarFacturaDetalles() {
    const FacturaId = this.formActualizar.value.Id_factura_detalle;
    const factura = {
      Descripcion_Detalle: this.form.value.Descripcion,
      PrecioUnitario_Detalle: this.form.value.PrecioUnitario,
      Cantidad_Detalle: this.form.value.Cantidad,
      Subtotal_Detalle: this.form.value.Subtotal,
      FacturaId_Detalle: this.form.value.FacturaId,
    };

    this.apiService.patchFactura(FacturaId,factura).subscribe(response => {
      this.facturas_detalles = response;
      console.log('Factura actualizada exitosamente', response);
    }, error => {
      console.error('Error al actualizada la factura', error);
    });
  }

}
