import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { SignupComponent } from './Components/signup/signup.component';

export const routes: Routes = [
{ path: '', component:LoginComponent},
{ path: 'home' , component: HomeComponent},
{path: 'signup', component: SignupComponent},
];
