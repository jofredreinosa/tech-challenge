import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Element } from "../models/element";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ElementDataAccessService {
  private readonly apiBaseUrl = "http://localhost:3000/api/v1/elements";

  constructor(private readonly httpClient: HttpClient) {}

  public retrieveElements(): Observable<Element[]> {
    return this.httpClient.get<Element[]>(this.apiBaseUrl);
  }
}
