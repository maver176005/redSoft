export interface ListItem {
  key: string;
  name: string;
  children?: ListItem[] | null;
}
