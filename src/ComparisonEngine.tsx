import { useEffect, useState } from "react";
import { Category, GSTData } from "./types";
import { Itemtype } from "./ComponentTypes";
import data from "./gstitemsdata";
import Popup from "./Popup";

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
  const [gstFree, setGstFree] = useState(false);
  const [alert, setAlert] = useState(true);

  useEffect(() => {
    const flattenedData = flattenData(data);
    const result = isGstFree(scannedItem, flattenedData);
    if (result) {
      setGstFree(true);
    } else {
      setGstFree(false);
    }
    setAlert(true);
  }, [scannedItem]);

  const onAlertClose = () => {
    setAlert(false);
  };

  return <Popup alert={alert} onClose={onAlertClose} gstFree={gstFree} />;
};

export default ComparisonEngine;
