import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderUserdetailsComponent } from './header/header-userdetails/header-userdetails.component';
import { HeaderTaskbarComponent } from './header/header-taskbar/header-taskbar.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { MenuitemComponent } from './sidemenu/menuitem/menuitem.component';
import { MainwindowComponent } from './mainwindow/mainwindow.component';
import { StatPanelComponent } from './mainwindow/stat-panel/stat-panel.component';
import { ExpiredateWindowComponent } from './mainwindow/expiredate-window/expiredate-window.component';
import { ExpiredateWindowItemComponent } from './mainwindow/expiredate-window/expiredate-window-item/expiredate-window-item.component';
import { SaleschartWindowComponent } from './mainwindow/saleschart-window/saleschart-window.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderUserdetailsComponent,
    HeaderTaskbarComponent,
    SidemenuComponent,
    MenuitemComponent,
    MainwindowComponent,
    StatPanelComponent,
    ExpiredateWindowComponent,
    ExpiredateWindowItemComponent,
    SaleschartWindowComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
