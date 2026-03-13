import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TabService {
  private tabSource = new Subject<number>();
  tabSelected$ = this.tabSource.asObservable();

  changeTab(index: number) {
    this.tabSource.next(index);
  }
}
