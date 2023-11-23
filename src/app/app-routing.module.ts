import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionComponent } from 'src/views/home/description/description.component';
import { HomeComponent } from 'src/views/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'description', component: DescriptionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
