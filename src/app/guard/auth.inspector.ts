import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpUserEvent, HttpEvent } from "@angular/common/http";
import 'rxjs/add/operator/do';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.headers.get('No-Auth') == "True")
            return next.handle(request.clone());

        if (localStorage.getItem('capstoneAuth') != null) {
            const clonedreq = request.clone({
                headers: request.headers.set("Authorization", localStorage.getItem('capstoneAuth'))
            });
            return next.handle(clonedreq)
            
            .do(
                succ => { 
                    console.log("___");
                    this.router.navigateByUrl('/home');
                },
                err => {
                    if (err.status === 401)
                        this.router.navigateByUrl('/login');
                }
                );
        }
        else {
            this.router.navigateByUrl('/login');
        }
    }
}