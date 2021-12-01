import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-menu',
  templateUrl: './shopping-menu.component.html',
  styleUrls: ['./shopping-menu.component.css']
})
export class ShoppingMenuComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
