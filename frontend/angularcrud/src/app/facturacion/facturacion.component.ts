import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceGetService } from '../api-service-get.service';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.scss']
})
export class FacturacionComponent implements OnInit {
  public facturas:any = [];
  public form: FormGroup | any;
  public formDelete: FormGroup | any;
  public formActualizar: FormGroup | any;
  /* public formActualizarId: FormGroup | any; */
  /* name = new FormControl('');
  Fecha = new FormControl('');
  Cliente = new FormControl(0);
  Nombre_Cliente = new FormControl('');
  Direccion_Cliente = new FormControl('');
  RUC_Cliente = new FormControl('');
  Sub_Total = new FormControl(0);
  Iva_Cliente = new FormControl(0);
  Total_Cliente = new FormControl(0); */
  /* name: string = ''; */

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
    /* this.formActualizarId = this.formBuildeer.group({
      Id_factura: '',
    }); */
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
    /* this.apiService.getUsuarios().subscribe((data: any[]) => {
      this.facturas = data;
    }); */
  }

  /* onSubmit(f: NgForm) {
    const factura = {
      FechaEmision: f.value,
      IdCliente: f.value,
      NombreCliente: f.value,
      DireccionCliente: f.value,
      RucCliente: f.value,
      Subtotal: f.value,
      Iva: f.value,
      Total: f.value,
    };
    this.apiService.postFactura(factura).subscribe(response => {
      this.facturas = response;
    });
    console.log(factura);
    console.log(f.valid);
  } */

  public CargarData(){
    this.apiService.getFacturas().subscribe(respuesta => {
      this.facturas = respuesta;
      console.log(respuesta);
    })
  }

  public EnviarData() {
    /* let Fecha: String = '';
    let Cliente: Number = 0;
    let Nombre_Cliente: String = '';
    let Direccion_Cliente: String = '';
    let RUC_Cliente: String = '';
    let Sub_Total: Number = 0;
    let Iva_Cliente: Number = 0;
    let Total_Cliente: Number = 0; */
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
    });
  }

  public eliminarFactura() {
    const FacturaId = this.formDelete.value.Id_factura; // Id de la factura que deseas eliminar

    this.apiService.deleteFactura(FacturaId).subscribe(response => {
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
      console.log('Factura actualizada exitosamente', response);
    }, error => {
      console.error('Error al actualizada la factura', error);
    });
  }

  /* public EnviarData(){
    this.apiService.postFactura({

    })
  } */

}
