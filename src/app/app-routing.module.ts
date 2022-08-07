import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InteriorComponent } from './interior/interior.component';

const routes: Routes = [
  { path: "consult", component: FormComponent },
  { path: "about", component: AboutComponent },
  { path: "interior", component: InteriorComponent },
  { path: "homes", component: InteriorComponent },
  { path: "home", component: HomeComponent },
  { path: "**", component: HomeComponent },
  { path: "", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'disabled' }), ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
