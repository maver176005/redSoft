import { Component, Input, Output, EventEmitter } from '@angular/core';
import {TreeNode} from "../../core/models/tree-node.model";
import {NgFor, NgIf} from "@angular/common";

@Component({
  selector: 'app-tree-view',
  standalone: true,
  imports: [
    NgFor,
    NgIf
  ],
  templateUrl: './tree-view.component.html',
  styleUrl: './tree-view.component.css'
})
export class TreeViewComponent {
  @Input() nodes: TreeNode[] = [];
  @Output() nodeSelected = new EventEmitter<TreeNode>();

  get rootChildren(): TreeNode[] {
    // Возвращаем детей корневого элемента
    return this.nodes[0]?.children || [];
  }
  onSelectNode(node: TreeNode): void {
    this.nodeSelected.emit(node);
  }

  // hasChildren(node: TreeNode): boolean {
  //   return !!node.children && node.children.length > 0;
  // }
}
