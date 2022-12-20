import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mycontact } from 'src/models/mycontact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {
  allgroups:any[]=[]
  contactname:string=''
  contact:mycontact ={} as mycontact
  constructor(private api:ApiService,private router:Router) {  }
  ngOnInit(): void {
    this.api.getallgroups().subscribe((data:any)=>{
      console.log(data);
      this.allgroups = data
    })
  }
  addcontact(){
    this.api.addcontact(this.contact).subscribe((data:any)=>{
      this.router.navigateByUrl('')
    })
  }
}
