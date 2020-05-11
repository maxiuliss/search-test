import { SaveModule } from './../save/save.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, FormsModule, SaveModule, StoreModule.forFeature('search', {})],
  exports: [SearchComponent],
})
export class SearchModule { }
