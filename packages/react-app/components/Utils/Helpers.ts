import { ItemProp } from "./Types";

export const capitalizeFirstLetter = (
  string: string | string[] | undefined
) => {
  if (string && typeof string !== "object") {
    return string.charAt(0).toUpperCase() + string.slice(1);
  } else {
    return string; // Return the original string if it's empty or not defined
  }
};

export const sumPropertyValues = (arr: any, property: string): number => {
  return arr.reduce((sum: number, obj: any) => {
    const value = obj[property];
    return typeof value === "number" ? sum + value : sum;
  }, 0);
};

export const sumDuplicateIds = (
  arr: { quantity: number; item: ItemProp }[]
): { quantity: number; item: ItemProp }[] => {
  const idMap = new Map<number, { quantity: number; item: ItemProp }>();

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    if (idMap.has(current.item.id)) {
      const existing = idMap.get(current.item.id);
      if (existing) {
        existing.quantity += current.quantity; // Sum the values
      }
    } else {
      idMap.set(current.item.id, { ...current }); // Clone the object to avoid mutating the input array
    }
  }

  return Array.from(idMap.values());
};
