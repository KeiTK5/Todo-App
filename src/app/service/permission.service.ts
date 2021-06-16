import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class PermissionService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {

    const position = route.data.pos;
    const token: any = localStorage.getItem('token');
    // console.log(position);
    // console.log(token);
    const tokenPayload: any = jwt_decode(token);
    // const token: any = localStorage.getItem('position')
    // console.log(tokenPayload.user.position);


    if (!token || tokenPayload.user.position !== position) {
      this.router.navigate(['/admin']);
      localStorage.removeItem('token')
      localStorage.removeItem('name')
      localStorage.removeItem('position')
      return false;
    } else {
      return true;
    }

  }
}
