import { CategoryDtoInterface } from './categories.models';

export class Category {
  id: number;
  parentId: number;
  name: string;
  children: CategoryDtoInterface[];

  constructor(
    id: number,
    parentId: number,
    name: string,
    children: CategoryDtoInterface[]
  ) {
    this.id = id;
    this.parentId = parentId;
    this.name = name;
    this.children = children;
  }

  /**
   * First I get root elements if id is equals to null, then I construct a new
   * array adding child nodes
   * @param categories
   */
  public static setCategoriesTreeFromCategoryDto(
    categories: CategoryDtoInterface[]
  ): CategoryDtoInterface[] {
    const categoryTree = (
      categories: CategoryDtoInterface[],
      id = null,
      link: keyof CategoryDtoInterface = 'parentId'
    ) =>
      categories
        .filter((category) => category[link] === id)
        .map((category) => ({
          ...category,
          children: categoryTree(categories, category.id)
        }));
    return categoryTree(categories);
  }
}
