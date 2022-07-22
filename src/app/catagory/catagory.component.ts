import { Component, OnInit } from '@angular/core';
import { Catagory } from './catagory';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-catagory',
  templateUrl: './catagory.component.html',
  styleUrls: ['./catagory.component.css']
})
export class CatagoryComponent implements OnInit {

  constructor(private http:HttpClient) { }
  title="Kategoriler";
  catagories : Catagory[];
  ngOnInit(): void {
    this.http.get<Catagory[]>("http://localhost:3000/catagories").subscribe(data=>{
      this.catagories=data;
    })
  }

}
