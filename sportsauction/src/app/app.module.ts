import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateteamComponent } from './createteam/createteam.component';
import { CreateplayerComponent } from './createplayer/createplayer.component';
import { ShowteamComponent } from './showteam/showteam.component';
import { ShowplayerComponent } from './showplayer/showplayer.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: 'SportsAuction', redirectTo: 'SportsAuction', pathMatch: 'full' },
  { path: 'HomePage', component: HomepageComponent },
  { path: 'CreatePlayer', component: CreateplayerComponent },
  { path: 'CreateTeam', component: CreateteamComponent },
  { path: 'ShowPlayer', component: ShowplayerComponent },
  { path: 'ShowTeam', component: ShowteamComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CreateteamComponent,
    CreateplayerComponent,
    ShowteamComponent,
    ShowplayerComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
