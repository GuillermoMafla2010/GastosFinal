import { Component, OnInit } from '@angular/core';
import { Deuda } from 'src/app/modelos/Deuda';
import { DatePipe } from '@angular/common';
import { DeudaService } from 'src/app/servicios/deuda.service';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';



@Component({
  selector: 'app-crear-deuda',
  templateUrl: './crear-deuda.page.html',
  styleUrls: ['./crear-deuda.page.scss'],
})
export class CrearDeudaPage implements OnInit {

  public deuda:Deuda=new Deuda
  constructor(private deudaservice:DeudaService,private router:Router,
    private statusbar:StatusBar) {

      this.statusbar.backgroundColorByHexString('#428bca')
     }

  ngOnInit() {
  }

  guardar(){
    this.deuda.usuario_id=1
    this.deudaservice.postDeudas(this.deuda).subscribe(x=>{
      console.log("Deuda creada")
      this.router.navigate(['tabs/deudas'])
      this.deudaservice.notificarupload.emit(this.deuda)
    })
  }

}
