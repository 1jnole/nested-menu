import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { CategoryDtoInterface } from '../../models/categories/categories.models';
import { MatMenuPanel } from '@angular/material/menu';

@Component({
  selector: 'app-nested-menu',
  templateUrl: './nested-menu.component.html',
  styleUrls: ['./nested-menu.component.scss']
})
export class NestedMenuComponent implements AfterViewInit {
  @Input() items: CategoryDtoInterface[];
  @Output() childMenuEmitter = new EventEmitter<MatMenuPanel>();

  @ViewChild('childMenu') public childMenu: MatMenuPanel;
  @ViewChild('menu') public menu: MatMenuPanel;

  ngAfterViewInit(): void {
    this.childMenuEmitter.emit(this.childMenu);
  }
}
