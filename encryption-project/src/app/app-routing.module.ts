import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CipherComponent } from './pages/cipher/cipher.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { RsaComponent } from './pages/rsa/rsa.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'cipher', component:CipherComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path: 'rsa', component:RsaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
