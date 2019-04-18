import { UpdateUserdataComponent } from './update-userdata/update-userdata.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';


const routes: Routes = [
  {
    //This is the default path the user will enter if the url is /user
    path:'',
    component: UserPageComponent

  } , {
    path:'update-userdata',
    component: UpdateUserdataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
