import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoService } from './info.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.less'],
})
export class InfoComponent implements OnInit {
  public isInfo = false;
  public infos: any[] = [];

  constructor(private service: InfoService) {}

  private getInfo(): void {
    this.service.getInfo().subscribe((res: any) => {
      if (res['code'] === 200) {
        this.infos = res['data'];
      }
      this.isInfoFun();
    });
  }

  public isInfoFun(): void {
    if (this.infos.length) {
      this.isInfo = false;
    } else {
      this.isInfo = true;
    }
  }

  ngOnInit(): void {
    this.getInfo();
  }
}
