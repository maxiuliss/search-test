import { LoadingService } from './../../../services/loading/loading.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
})
export class LoadingComponent implements OnInit {
  show: Observable<boolean> = of(false);

  constructor(private loadingService: LoadingService) {}

  ngOnInit() {
    this.show = this.loadingService.loadingState;
  }
}
