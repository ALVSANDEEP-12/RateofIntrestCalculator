import { Component } from '@angular/core';

@Component({
  selector: 'app-roi',
  templateUrl: './roi.component.html',
  styleUrls: ['./roi.component.css']
})
export class RoiComponent {
  myname = "";
abc(username:string){
  // alert("you clicked me successfully "+"Mr."+username)
  this.myname=username;
}
   total = 0;
   emi=0;
   cal(p:any,t:any,r:any){
   this.total=(p*t*r)/100;
   this.emi=this.total/t;
   }
  }
