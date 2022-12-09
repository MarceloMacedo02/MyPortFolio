import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopPageComponent } from './mainpage/top-page/top-page.component';
import { AboutUsComponent } from './mainpage/about-us/about-us.component';
import { FormationComponent } from './mainpage/education/formation/formation.component';
import { CertificationsComponent } from './mainpage/education/certifications/certifications.component';
import { CoursesComponent } from './mainpage/education/courses/courses.component';
import { ExperienceComponent } from './mainpage/experience/experience/experience.component';
import { SkillsComponent } from './mainpage/experience/skills/skills.component';
import { ServicesComponent } from './mainpage/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    TopPageComponent,
    AboutUsComponent,
    FormationComponent,
    CertificationsComponent,
    CoursesComponent,
    ExperienceComponent,
    SkillsComponent,
    ServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
