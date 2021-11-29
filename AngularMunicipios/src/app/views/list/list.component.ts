import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api/api.service';
import { Router } from '@angular/router';

import { listMunicipiosI } from '../../models/listMunicipios.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {

  listmunicipios:listMunicipiosI[];

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {

    this.api.ListMunicipios().subscribe(data =>{
      this.listmunicipios = data as listMunicipiosI[];
      console.log(this.listmunicipios);
    })
  }

  editMunicipio(id:any){
    this.router.navigate(['edit',id]);
  }

  newMunicipio(){
    this.router.navigate(['new']);
  }

}
