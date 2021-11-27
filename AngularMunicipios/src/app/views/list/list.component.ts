import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api/api.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ApiService]
})
export class ListComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {

    this.api.ListMunicipios().subscribe(data =>{
      console.log(data)
    })
  }

}
