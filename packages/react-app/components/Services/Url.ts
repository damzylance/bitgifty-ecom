import { capitalizeFirstLetter } from "../Utils/Helpers";

export const getStoreUrl = () => `${process.env.NEXT_PUBLIC_BASE_URL}/store`;
export const getSuperCategoriesUrl = () =>
  `${process.env.NEXT_PUBLIC_BASE_URL}/supercategory`;
export const getSuperCategoryByNameUrl = (
  category_name: string | string[] | undefined
) =>
  `${
    process.env.NEXT_PUBLIC_BASE_URL
  }/supercategorybyname/${capitalizeFirstLetter(category_name)}`;
export const getStoreByIdUrl = (store_id: string | string[] | undefined) =>
  `${process.env.NEXT_PUBLIC_BASE_URL}/store/${store_id}`;

export const getItemByIdUrl = (item_id: string | string[] | undefined) =>
  `${process.env.NEXT_PUBLIC_BASE_URL}/items/${item_id}`;
