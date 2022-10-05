import { Component, OnInit } from '@angular/core';
import { Cookie } from '../model/cookie';

@Component({
  selector: 'cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css'],
})
export class Cookies implements OnInit {
  public title: string;
  public flavors: string;
  public cookie: Array<Cookie>;
  public sizes: String[];

  constructor() {
    this.title = 'The best cookies in town';
    this.flavors = 'Most popular flavors';
    this.sizes = new Array();

    this.cookie = [
      new Cookie(
        'intense chocolate🍪',
        "catella's Cookies",
        'chocolate',
        'bigger',
        4.2,
        true
      ),

      new Cookie(
        'redVelvet 🍪',
        "catella's Cookies",
        'chocolate and color',
        'mid',
        3,
        false
      ),

      new Cookie(
        'especial cookie 🍪',
        "catella's Cookies",
        'triple chocolate',
        'supreme',
        5,
        true
      ),
      new Cookie(
        'monday special 🍪',
        "catella's Cookies",
        'cheesecake',
        'small',
        2.2,
        false
      ),

    ];
  }
  ngOnInit() {
    console.log(this.cookie);

    this.getSizes();
  }

  getSizes(){
    this.cookie.forEach((Cookie, index) =>{
      if(this.sizes.indexOf(Cookie.size)< 0){
        this.sizes.push(Cookie.size);
      }
      console.log(index)
    })
    console.log(this.sizes)
  }
}
