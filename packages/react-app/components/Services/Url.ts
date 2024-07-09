import { baseUrl } from "../Utils/Constants";
import { capitalizeFirstLetter } from "../Utils/Helpers";

export const getStoreUrl = () => `${baseUrl}/store`;
export const getSuperCategoriesUrl = () => `${baseUrl}/supercategory`;
export const getSuperCategoryByNameUrl = (
  category_name: string | string[] | undefined
) => `${baseUrl}/supercategorybyname/${capitalizeFirstLetter(category_name)}`;
export const getStoreByIdUrl = (store_id: string | string[] | undefined) =>
  `${baseUrl}/store/${store_id}`;

export const getItemByIdUrl = (item_id: string | string[] | undefined) =>
  `${baseUrl}/items/${item_id}`;
