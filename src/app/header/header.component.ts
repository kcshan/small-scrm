import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  constructor(private route: Router) {}

  public links = [
    {
      sref: '/info',
      name: '信息展示(ClientInfo)',
    },
    {
      sref: '/input',
      name: '信息录入(InfoInput)',
    },
  ];

  public jumper(): void {
    this.route.navigate(['/input']);
  }

  ngOnInit(): void {}
}
