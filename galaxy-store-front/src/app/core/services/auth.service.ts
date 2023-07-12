import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { map } from "rxjs/operators";
import jwt_decode from 'jwt-decode';
import { UserService } from "./user.service";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private url: string = environment.API_URL + "/api/auth";
    private isLogged = false;

    constructor(private http: HttpClient, private userService: UserService, private router: Router) {}


    login(username: string, password: string) {
        const loginData = {username: username, password: password};
        return this.http.post<any>(this.url+"/signin",loginData)
        .pipe(
            map( response => {
                localStorage.setItem('token', response?.token);
                localStorage.setItem('userId', `${response?.id}`);
                localStorage.setItem('username', `${response?.username}`);
                this.isLogged = true;
                return true; 
            })
        );
    }

    signup(signupData: any) {
        return this.http
            .post<{message:string ,token:string,user:any}>( this.url+"/signup" , signupData)
            .pipe(
                map( response => {
                    localStorage.setItem('token', response?.token);
                    this.isLogged = true;
                    return true;
                })
            );
    }

    checkEmail(email:string) {
        return this.http.get<{emailExist:boolean}>(this.url+ `/checkemail/${email}`);
    }

    logout() {
        //localStorage.removeItem('token');
        this.isLogged = false;
        return true;
    }

    // return true if loggedIn or false to AuthGaurd
    checkAuth() {
        let token = this.getToken();
        if (!token) {
            return null;
        }

        this.isLogged = true;
        let decodedToken = jwt_decode<any>(token);
        let userId = decodedToken.id;
        this.userService.initUser(userId);
        return true;

    }


    isLoggedIn() {
        return this.isLogged;
    }


    /*private setToken(token: string) {
        localStorage.setItem('token', token);
    }*/
    
    getToken(): string | null {
        const token = localStorage.getItem('token');
        if (token) {
            return token;
        } else {
            return null;
        }
    }


}