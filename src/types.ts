export interface Subcategory {
  name: string;
  description: string;
}

export interface Category {
  category: string;
  subcategories: Subcategory[];
}

export interface GSTData {
  gstHstFree: Category[];
  nonGstHstFree: Category[];
}
