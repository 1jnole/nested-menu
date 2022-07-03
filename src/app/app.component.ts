import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesService } from '../service/categories.service';
import { CategoryDtoInterface } from '../models/categories/categories.models';
import { MatMenuPanel } from '@angular/material/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('menu') public menu: any;

  public categories$!: Observable<CategoryDtoInterface[]>;
  public childMenu: MatMenuPanel;
  constructor(
    private categoriesService: CategoriesService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // we do not need to unsubscribe, async pipe will handle it
    this.categories$ = this.categoriesService.getCategories();
  }

  /**
   * Get Instance of childMenu, we need to use detectChanges
   * to avoid CheckDetectorChange error
   * @param event
   */
  setChildMenu(event: MatMenuPanel) {
    this.childMenu = event;
    this.cd.detectChanges();
  }
}
