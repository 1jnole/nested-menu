export interface CategoryDtoInterface {
  name: string;
  id: number;
  parentId: number;
  children?: CategoryDtoInterface[];
}
