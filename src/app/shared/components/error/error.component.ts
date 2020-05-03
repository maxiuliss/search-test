import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ErrorService } from 'src/app/services/error/error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {
  errorMessage: Observable<string> = of('');

  constructor(private errorService: ErrorService) {}

  ngOnInit() {
    this.errorMessage = this.errorService.message;
  }
}
