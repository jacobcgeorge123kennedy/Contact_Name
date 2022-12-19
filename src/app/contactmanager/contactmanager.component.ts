import { Component, OnInit } from '@angular/core';
import { mycontact } from 'src/models/mycontact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contactmanager',
  templateUrl: './contactmanager.component.html',
  styleUrls: ['./contactmanager.component.css']
})
export class ContactmanagerComponent implements OnInit{ 
  allcontacts:mycontact[]=[]
  searchkey:string=''
  constructor(private api:ApiService){
    
  }

  ngOnInit(): void {
    this.api.allcontacts().subscribe((data:any)=>{
      console.log(data);
      this.allcontacts = data
    })
  }
  search(event:any){
    console.log(event?.target.value);
    this.searchkey = event.target.value
    
  }
}
