import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public app_hash: string;
  public app_host: string;
  
  constructor() {
    this.app_hash = "delivery_app"
    this.app_host = "http://api.lvh.me:3000"
    this.session_user_id = ""
  }
}
