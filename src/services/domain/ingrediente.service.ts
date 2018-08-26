import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../app/config/api.config";
import { Ingrediente } from "../../models/ingrediente";
import { Observable } from "rxjs/Rx";

@Injectable()
export class IngredienteService{

    constructor(public http: HttpClient){
    }

    findAll() : Observable<Ingrediente[]> {
        return this.http.get<Ingrediente[]>(`${API_CONFIG.baseUrl}/ingredientes`);
    }
}