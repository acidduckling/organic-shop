import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [SharedModule, RouterModule.forChild([])],
  declarations: [NavComponent, HomeComponent, LoginComponent, FooterComponent],
  exports: [NavComponent, FooterComponent]
})
export class CoreModule {}
