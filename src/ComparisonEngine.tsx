import { useEffect } from "react";
import { Category, GSTData } from "./types";
import { Itemtype } from "./ComponentTypes";
import data from "./gstitemsdata";

type ComparisonEngineProps = {
  scannedItem: Itemtype;
};

const flattenData = (data: GSTData): string[] => {
  const flatList: string[] = [];

  const traverse = (items: Category[]) => {
    items.forEach((item) => {
      flatList.push(item.category.toLowerCase().trim());

      item.subcategories.forEach((sub) => {
        flatList.push(sub.name.toLowerCase().trim());
        if (sub.description) {
          flatList.push(sub.description.toLowerCase().trim());
        }
      });
    });
  };

  traverse(data.gstHstFree);
  traverse(data.nonGstHstFree);

  return flatList;
};

// Improved Function to check if scanned item is GST free
const isGstFree = (scannedItem: Itemtype, flattenedData: string[]): boolean => {
  const categoryWords = scannedItem.category
    .toLowerCase()
    .trim()
    .split(/[\s>]+/);
  const titleWords = scannedItem.title
    .toLowerCase()
    .trim()
    .split(/[\s>]+/);

  // Flattened Data Contains Keyword Check
  const hasMatch = (word: string) => {
    return flattenedData.some((entry) => entry.includes(word));
  };

  // Check if any word in category or title matches
  return categoryWords.some(hasMatch) || titleWords.some(hasMatch);
};

// Example Component
const ComparisonEngine = (props: ComparisonEngineProps) => {
  const { scannedItem } = props;

  useEffect(() => {
    const flattenedData = flattenData(data);

    // Debugging the flattened data and scanned item for clarity
    console.log("Flattened Data:", flattenedData);
    console.log("Scanned Item:", scannedItem);

    const result = isGstFree(scannedItem, flattenedData);
    if (result) {
      console.log("GST free");
    } else {
      console.log("GST is not free");
    }
  }, [scannedItem]);

  return <div>Check console for GST status</div>;
};

export default ComparisonEngine;
