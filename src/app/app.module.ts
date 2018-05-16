import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import { RouterModule, Router, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

// HTTP
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

// Primefaces
import { AccordionModule } from 'primeng/components/accordion/accordion';
import { ButtonModule } from 'primeng/components/button/button';
import { ChartModule } from 'primeng/chart';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { GMapModule } from 'primeng/gmap';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule} from 'primeng/menu';
import { MessagesModule} from 'primeng/messages';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { OverlayPanelModule} from 'primeng/overlaypanel';
import { PanelModule } from 'primeng/components/panel/panel';
import { RadioButtonModule } from 'primeng/primeng';
import { ScrollPanelModule} from 'primeng/scrollpanel';
import { TableModule } from 'primeng/table';
import { TabMenuModule} from 'primeng/tabmenu';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';

// This application

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserProfileService } from './services/user-profile.service';
import { CanActivateGuard } from './can-activate-guard';
import { CatalogueMenuComponent } from './components/catalogue-menu/catalogue-menu.component';
import { CatalogueListComponent } from './components/catalogue-list/catalogue-list.component';
import { CatalogueGraphsComponent } from './components/catalogue-graphs/catalogue-graphs.component';
import { GmapComponent } from './components/gmap/gmap.component';
import { OrgChartComponent } from './components/org-chart/org-chart.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'user-profile', component: UserProfileComponent, canActivate: [CanActivateGuard] },
  { path: 'catalogue-menu', component: CatalogueMenuComponent,
          children: [
            { path: 'welcome', component: WelcomeComponent },
            { path: 'catalogue-list', component: CatalogueListComponent },
            { path: 'catalogue-graphs', component: CatalogueGraphsComponent},
            { path: 'org-chart', component: OrgChartComponent},
            { path: 'gmap', component: GmapComponent}
            ], 
            canActivate: [CanActivateGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  declarations: [
  AppComponent,
  LoginComponent,
  UserProfileComponent,
  CatalogueMenuComponent,
  CatalogueListComponent,
  CatalogueGraphsComponent,
  OrgChartComponent,
  WelcomeComponent,
  GmapComponent
  ],
  imports: [
  BrowserModule,
  BrowserAnimationsModule,
  CalendarModule,
  ChartModule,
  FormsModule,
  GMapModule,
  HttpClientModule,
  ReactiveFormsModule,
  ButtonModule,
  DialogModule,
  InputMaskModule,
  InputTextModule,
  MenuModule,
  MessagesModule,
  OrganizationChartModule,
  OverlayPanelModule,
  PanelModule,
  RadioButtonModule,
  RouterModule.forRoot(appRoutes),
  ScrollPanelModule,
  TableModule,
  TabMenuModule
  ],
  providers: [UserProfileService, MessageService, CanActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
