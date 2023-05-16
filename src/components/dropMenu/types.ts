export interface IDropMenu {
  title: string;
  link: string;
}
export const servicesArr: Array<IDropMenu> = [
  { title: "JS engineers", link: "/" },
  { title: "Product development", link: "/product" },
  { title: "IT Staff", link: "/itstaff" },
];
export const solutionsArr: Array<IDropMenu> = [
  { title: "Web application", link: "/web" },
  { title: "Mobile application", link: "/mobile" },
  { title: "Server-side application", link: "/server" },
];
