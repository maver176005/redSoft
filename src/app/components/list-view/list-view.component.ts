import {Component, Input, OnInit} from '@angular/core';
import {ListItem} from "../../core/models/list-item.model";
import {NgForOf, NgIf, NgTemplateOutlet} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {DataService} from "../../core/api-services/data.service";


@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css'],
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    NgTemplateOutlet,
    NgIf
  ]
})
export class ListViewComponent implements OnInit{
  @Input() items: ListItem[] = [];
  searchText: string = '';
  listData: ListItem[] = [];
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.listData = this.dataService.getListData();
    // this.treeData = this.dataService.getTreeData();
  }
  get filteredItems(): ListItem[] {
    return this.filterItems(this.items, this.searchText);
  }

  private filterItems(items: ListItem[], searchText: string): ListItem[] {
    if (!searchText) return items;

    return items.reduce((filtered: ListItem[], item: ListItem) => {
      // Проверяем, соответствует ли элемент условиям поиска
      if (item.name.toLowerCase().includes(searchText.toLowerCase())) {
        filtered.push(item);
      }

      // Если у элемента есть дочерние элементы, фильтруем их
      if (item.children && item.children.length) {
        const filteredChildren = this.filterItems(item.children, searchText);
        if (filteredChildren.length) {
          // Если в дочерних элементах найдены совпадения, добавляем текущий элемент с отфильтрованными детьми
          filtered.push({ ...item, children: filteredChildren });
        }
      }

      return filtered;
    }, []);
  }

}
