import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { InteriorComponent } from './interior/interior.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "consult", component: FormComponent },
  { path: "about", component: AboutComponent },
  { path: "interior", component: InteriorComponent },
  { path: "homes", component: InteriorComponent },
  { path: "**", redirectTo: "home" },
  { path: "", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'disabled', onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
