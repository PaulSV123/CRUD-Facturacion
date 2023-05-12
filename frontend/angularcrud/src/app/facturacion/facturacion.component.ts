import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceGetService } from '../api-service-get.service';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.scss']
})
export class FacturacionComponent implements OnInit {
  displayedColumns: string[] = ['id', 'FechaEmision', 'IdCliente', 'NombreCliente', 'DireccionCliente', 'RucCliente',
                                'Subtotal','Iva','Total'];
  dataSource = new MatTableDataSource<any>([]);
  clickedRows = new Set<any>();

  public facturas:any = [];
  public form: FormGroup | any;
  public formDelete: FormGroup | any;
  public formActualizar: FormGroup | any;

  constructor(
    private apiService: ApiServiceGetService,
    private formBuildeer: FormBuilder,
    private router: Router,
    private ButtonModule: ButtonModule,
    private TableModule: TableModule,
  ) { }

  ngOnInit() {
    this.CargarData();
    this.form = this.formBuildeer.group({
      Fecha: '',
      Cliente: 0,
      Nombre_Cliente: '',
      Direccion_Cliente: '',
      RUC_Cliente: '',
      Sub_Total: 0,
      Iva_Cliente: 0,
      Total_Cliente: 0,
    });
    this.formDelete = this.formBuildeer.group({
      Id_factura: '',
    });
    this.formActualizar = this.formBuildeer.group({
      Id_factura: '',
      Fecha: '',
      Cliente: 0,
      Nombre_Cliente: '',
      Direccion_Cliente: '',
      RUC_Cliente: '',
      Sub_Total: 0,
      Iva_Cliente: 0,
      Total_Cliente: 0,
    });
  }

  public CargarData(){
    this.apiService.getFacturas().subscribe((respuesta:any) => {
      this.dataSource = new MatTableDataSource<any>(respuesta);
      this.facturas = respuesta;
      console.log(respuesta);
    })
  }

  public EnviarData() {
    const factura = {
      FechaEmision: this.form.value.Fecha,
      IdCliente: this.form.value.Cliente,
      NombreCliente: this.form.value.Nombre_Cliente,
      DireccionCliente: this.form.value.Direccion_Cliente,
      RucCliente: this.form.value.RUC_Cliente,
      Subtotal: this.form.value.Sub_Total,
      Iva: this.form.value.Iva_Cliente,
      Total: this.form.value.Total_Cliente,
    };

    this.apiService.postFactura(factura).subscribe(response => {
      this.facturas = response;
      this.CargarData();
    });
  }

  public eliminarFactura() {
    const FacturaId = this.formDelete.value.Id_factura; // Id de la factura que deseas eliminar

    this.apiService.deleteFactura(FacturaId).subscribe(response => {
      this.CargarData();
      console.log('Factura eliminada exitosamente', response);
    }, error => {
      console.error('Error al eliminar la factura', error);
    });
  }

  public actualizarFactura() {
    const FacturaId = this.formActualizar.value.Id_factura;
    const factura = {
      FechaEmision: this.formActualizar.value.Fecha,
      IdCliente: this.formActualizar.value.Cliente,
      NombreCliente: this.formActualizar.value.Nombre_Cliente,
      DireccionCliente: this.formActualizar.value.Direccion_Cliente,
      RucCliente: this.formActualizar.value.RUC_Cliente,
      Subtotal: this.formActualizar.value.Sub_Total,
      Iva: this.formActualizar.value.Iva_Cliente,
      Total: this.formActualizar.value.Total_Cliente,
    };

    this.apiService.patchFactura(FacturaId,factura).subscribe(response => {
      this.facturas = response;
      this.CargarData();
      console.log('Factura actualizada exitosamente', response);
    }, error => {
      console.error('Error al actualizada la factura', error);
    });
  }

}
