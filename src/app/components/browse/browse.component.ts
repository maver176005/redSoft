import {Component, OnInit} from '@angular/core';
import {DataService} from "../../core/api-services/data.service";
import {TreeNode} from "../../core/models/tree-node.model";
import {ListViewComponent} from "../list-view/list-view.component";
import {TreeViewComponent} from "../tree-view/tree-view.component";
import {ListItem} from "../../core/models/list-item.model";

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [
    ListViewComponent,
    TreeViewComponent
  ],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent implements OnInit {
  treeData: TreeNode[] = [];
  listData: ListItem[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // this.listData = this.dataService.getListData();
    this.treeData = this.dataService.getTreeData();
  }

  onNodeSelected(node: TreeNode): void {
    this.listData = (node.children || [])
      .map(child => ({ key: child.key, name: child.name }))
      .sort((a, b) => a.name.localeCompare(b.name)); // Сортировка по имени
  }

}
