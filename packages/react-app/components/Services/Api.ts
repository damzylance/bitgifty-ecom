import {
  getItemByIdUrl,
  getStoreByIdUrl,
  getStoreUrl,
  getSuperCategoriesUrl,
  getSuperCategoryByNameUrl,
} from "./Url";

type RequestOptions = {
  url: string;
  action?: "get" | "post" | "put" | "delete" | "patch";
  data?: any;
  skip_auth?: boolean;
  content_type?: string;
};

export const request = async ({
  url,
  action = "get",
  data = null,
  skip_auth = false,
  content_type,
}: RequestOptions) => {
  const token =
    "d0df72f23698f8b33717bc0ec2d29096333e0e526251fdd8e6430ea06f801e4d";

  let config: RequestInit = {
    method: action,
    headers: {
      "Content-Type": content_type ? content_type : "application/json, */*",
      //pass extra custom headers here
    },
  };

  if (!skip_auth) {
    config.headers = {
      ...config.headers,
      Authorization: `${token}`,
    };
  }

  if (data) {
    config.body = data;
  }

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      const errorMessage = await response.text();
      console.log(errorMessage);
    }

    // Read the response text once
    const responseText = await response.text();

    // Check if the response is empty before attempting to parse it
    if (responseText.trim() === "") {
      return null; // Return null for empty responses
    }

    const responseData = JSON.parse(responseText);

    // Handle Errors when status is false
    // Error messages are not consistent from the API Responses.
    // A few exceptions for certain routes is expected here
    // if (!responseData.status) {
    //   responseData.msg === "Unfollowed." ||
    //   responseData.msg.includes("No director")
    //     ? null
    //     : Alert.alert("Error", responseData.msg);
    // }

    return responseData;
  } catch (error) {
    if (error instanceof Error) {
      // if (error.message === "Network request failed") {
      //   Alert.alert(error.message);
      //   // Handle network error
      //   // Show a Custom Toast Component for Errors here
      // }
      return;
    }
    throw error;
  }
};

// Get all stores
export const getAllStores = async () => {
  return await request({
    url: getStoreUrl(),
    action: "get",
    skip_auth: true,
  });
};

// Get all supercategories
export const getAllSuperCategories = async () => {
  return await request({
    url: getSuperCategoriesUrl(),
    action: "get",
    skip_auth: true,
  });
};

// Get supercategories by name
export const getSuperCategoryByName = async (category_name:  string | string[] | undefined) => {
  return await request({
    url: getSuperCategoryByNameUrl(category_name),
    action: "get",
    skip_auth: true,
  });
};

// Get store by id
export const getStoreById = async (store_id: string | string[] | undefined) => {
  return await request({
    url: getStoreByIdUrl(store_id),
    action: "get",
    skip_auth: true,
  });
};

// Get store by id
export const getItemById = async (item_id: string | string[] | undefined) => {
  return await request({
    url: getItemByIdUrl(item_id),
    action: "get",
    skip_auth: true,
  });
};
