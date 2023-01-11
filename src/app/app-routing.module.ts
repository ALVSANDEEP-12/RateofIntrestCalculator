import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoiComponent } from './roi/roi.component';

const routes: Routes = [
    {
      path:'roi',
      component:RoiComponent
    }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
