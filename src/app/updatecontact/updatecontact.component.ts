import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mycontact } from 'src/models/mycontact';
import { mygroup } from 'src/models/mygroup';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-updatecontact',
  templateUrl: './updatecontact.component.html',
  styleUrls: ['./updatecontact.component.css']
})
export class UpdatecontactComponent implements OnInit {
  contactId:string=''
  groups:mygroup[] = [] as mygroup[]
  contact:mycontact={} as mycontact
  constructor(private activateRoute:ActivatedRoute, private api:ApiService, private router:Router) { }
  ngOnInit(): void{
    this.activateRoute.params.subscribe((data)=>{
      console.log(data['contactId']);
      this.contactId = data['contactId']
    })
    this.api.viewcontact(this.contactId).subscribe((data:any)=>{
      this.contact = data
      console.log(this.contact);
    })
    this.api.getallgroups().subscribe((data:any)=>{
      this.groups = data
      console.log(this.groups);
      
    })
  }
  updatecontact(){
    this.api.updatecontact(this.contactId,this.contact).subscribe((data:any)=>{
      this.router.navigateByUrl('')
    })
  }
}
