import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild([]), NgbModule],
  declarations: [NavComponent, HomeComponent, LoginComponent],
  exports: [NavComponent]
})
export class CoreModule {}
