import { Injectable } from '@angular/core';
import {TreeNode} from "../models/tree-node.model";
import {ListItem} from "../models/list-item.model";


@Injectable({ providedIn: 'root' })
export class DataService {
  private treeData: TreeNode[] = [
    {
      key: '_',
      name: 'root',
      children: [
        {
          key: '0',
          name: 'quidem molestiae enim',
          children: [
            {
              key: '0-1',
              name: 'sunt qui excepturi placeat culpa',
              children: [
                {
                  key: '0-1-0',
                  name: 'omnis laborum odio',
                },
                {
                  key: '0-1-1',
                  name: 'non esse culpa molestiae omnis sed optio',
                },
                {
                  key: '0-1-2',
                  name: 'molestiae voluptate non',
                },
                {
                  key: '0-1-3',
                  name: 'eaque aut omnis a',
                },
                {
                  key: '0-1-4',
                  name: 'tenetur explicabo ea',
                },
                {
                  key: '0-1-5',
                  name: 'temporibus molestiae aut',
                }
              ],
            },
            {
              key: '0-2',
              name: 'natus impedit quibusdam illo est',
              children: [],
            },
          ],
        },
        {
          key: '1',
          name: 'quibusdam autem aliquid et et quia',
          children: [],
        },
        {
          key: '2',
          name: 'qui fuga est a eum',
          children: [
            {
              key: '2-0',
              name: 'saepe unde necessitatibus rem',
              children: [
                {
                  key: '2-0-0',
                  name: 'est placeat dicta ut nisi rerum iste',
                  children: [
                    {
                      key: '2-0-0-0',
                      name: 'ea voluptates maiores eos accusantium officiis tempore mollitia consequatur',
                    },
                    {
                      key: '2-0-0-1',
                      name: 'tenetur explicabo ea',
                    }
                  ],
                },
              ],
            },
            {
              key: '2-1',
              name: 'distinctio laborum qui',
            },
            {
              key: '2-2',
              name: 'quam nostrum impedit mollitia quod et dolor',
            },
            {
              key: '2-3',
              name: 'consequatur autem doloribus natus consectetur',
            },
          ],
        },
        {
          key: '3',
          name: 'ab rerum non rerum consequatur ut ea unde',
          children: [],
        },
        {
          key: '4',
          name: 'ducimus molestias eos animi atque nihil',
          children: [],
        },
        {
          key: '5',
          name: 'ut pariatur rerum ipsum natus repellendus praesentium',
          children: [],
        }
      ],
    },

  ];
  private listData: ListItem[] = [
      {
        key: '_',
        name: 'root',
        children: [
          {
            key: '0',
            name: 'quidem molestiae enim',
            children: [
              {
                key: '0-1',
                name: 'sunt qui excepturi placeat culpa',
                children: [
                  {
                    key: '0-1-0',
                    name: 'omnis laborum odio',
                  },
                  {
                    key: '0-1-1',
                    name: 'non esse culpa molestiae omnis sed optio',
                  },
                  {
                    key: '0-1-2',
                    name: 'molestiae voluptate non',
                  },
                  {
                    key: '0-1-3',
                    name: 'eaque aut omnis a',
                  },
                  {
                    key: '0-1-4',
                    name: 'tenetur explicabo ea',
                  },
                  {
                    key: '0-1-5',
                    name: 'temporibus molestiae aut',
                  }
                ],
              },
              {
                key: '0-2',
                name: 'natus impedit quibusdam illo est',
                children: [],
              },
            ],
          },
          {
            key: '1',
            name: 'quibusdam autem aliquid et et quia',
            children: [],
          },
          {
            key: '2',
            name: 'qui fuga est a eum',
            children: [
              {
                key: '2-0',
                name: 'saepe unde necessitatibus rem',
                children: [
                  {
                    key: '2-0-0',
                    name: 'est placeat dicta ut nisi rerum iste',
                    children: [
                      {
                        key: '2-0-0-0',
                        name: 'ea voluptates maiores eos accusantium officiis tempore mollitia consequatur',
                      },
                      {
                        key: '2-0-0-1',
                        name: 'tenetur explicabo ea',
                      }
                    ],
                  },
                ],
              },
              {
                key: '2-1',
                name: 'distinctio laborum qui',
              },
              {
                key: '2-2',
                name: 'quam nostrum impedit mollitia quod et dolor',
              },
              {
                key: '2-3',
                name: 'consequatur autem doloribus natus consectetur',
              },
            ],
          },
          {
            key: '3',
            name: 'ab rerum non rerum consequatur ut ea unde',
            children: [],
          },
          {
            key: '4',
            name: 'ducimus molestias eos animi atque nihil',
            children: [],
          },
          {
            key: '5',
            name: 'ut pariatur rerum ipsum natus repellendus praesentium',
            children: [],
          }
        ],
      },
    ]

  getTreeData(): TreeNode[] {
    return this.treeData;
  }

  getListData(): ListItem[] {
    return this.listData;
  }
  // getListDataByNodeKey(key: string): ListItem[] {
  //   return this.listData.filter(item => item.key === key);
  // }
}
