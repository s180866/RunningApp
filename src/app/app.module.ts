import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import { Geolocation } from '@ionic-native/geolocation';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgxErrorsModule } from '@ultimate/ngxerrors';

import {ContactPage} from '../pages/contact/contact';
import {SettingsPage} from '../pages/settings/settings';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {SharedModule} from "./shared.module";
import {AuthService} from '../providers/auth/auth';
import {ChartsModule} from 'ng2-charts';
import {CardChartComponent} from "../components/card-chart/card-chart";
import {ContactDetailsComponent} from "../components/contact-details/contact-details";
import {StartPage} from '../pages/start/start';
import {LoginPage} from '../pages/login/login';
import {RegisterPage} from '../pages/register/register';
import {LastRunComponent} from '../components/last-run/last-run';
import {GamePage} from '../pages/game/game';
import {GoogleMaps} from '@ionic-native/google-maps';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {firebaseConfig} from '../config';
import {AngularFireAuth} from 'angularfire2/auth';
import {ReactiveFormsModule} from '@angular/forms';
import {UserProvider} from "../providers/user/user.provider";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    SettingsPage,
    HomePage,
    TabsPage,
    StartPage,
    LoginPage,
    GamePage,
    RegisterPage,
    CardChartComponent,
    LastRunComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxErrorsModule,
    SharedModule,
    AngularFireModule.initializeApp(firebaseConfig.fire),
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp, {}, {
      links: [
        {component: TabsPage, name: 'TabsPage', segment: 'tabs'},
        {component: GamePage, name: 'GamePage', segment: 'game'},
        {component: StartPage, name: 'StartPage', segment: 'start'},
        {component: HomePage, name: 'HomePage', segment: 'home'},
        {component: ContactPage, name: 'ContactPage', segment: 'contact'},
        {component: LoginPage, name: 'LoginPage', segment: 'login'},
        {component: RegisterPage, name: 'RegisterPage', segment: 'register'},
        {component: SettingsPage, name: 'SettingsPage', segment: 'settings'}
      ]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StartPage,
    ContactPage,
    SettingsPage,
    HomePage,
    GamePage,
    LoginPage,
    RegisterPage,
    TabsPage,
    LastRunComponent,
    ContactDetailsComponent
  ],
  providers: [
    StatusBar,
    GoogleMaps,
    SplashScreen,
    Geolocation,
    UserProvider,
    AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {
}
