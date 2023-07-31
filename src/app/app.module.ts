import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UiComponent } from './ui/ui.component';
import { PostcreationComponent } from './postcreation/postcreation.component';
import { FollowsysComponent } from './followsys/followsys.component';
import { LikeComponent } from './like/like.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { NotificationComponent } from './notification/notification.component';
import { SearchComponent } from './search/search.component';
import { BlockComponent } from './block/block.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UiComponent,
    PostcreationComponent,
    FollowsysComponent,
    LikeComponent,
    UserprofileComponent,
    PrivacyComponent,
    NotificationComponent,
    SearchComponent,
    BlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
