import { GSTData } from "./types";

const data: GSTData = {
  gstHstFree: [
    {
      category: "Food and Beverages",
      subcategories: [
        {
          name: "Alcoholic Beverages",
          description:
            "Wine, beer, ciders, and spirit coolers with up to 7% alcohol by volume",
        },
        {
          name: "Candies and Confectioneries",
          description:
            "Candy floss, chewing gum, chocolate, and fruits, seeds, nuts, or popcorn coated with candy, chocolate, honey, molasses, sugar, syrup, or artificial sweeteners",
        },
        {
          name: "Salty Snacks",
          description:
            "Chips, crisps, puffs, curls, sticks, popcorn, brittle pretzels, and salted nuts or seeds",
        },
        {
          name: "Granola Products and Snack Mixtures",
          description:
            "Items containing cereals, nuts, seeds, dried fruit, or other edible products",
        },
        {
          name: "Frozen Treats",
          description:
            "Ice lollies, juice bars, ice waters, ice cream, ice milk, sherbet, frozen yogurt, frozen pudding, including non-dairy substitutes",
        },
        {
          name: "Fruit-Based Snacks",
          description:
            "Fruit bars, rolls, drops, or similar fruit-based snack foods",
        },
        {
          name: "Baked Goods with Sweetened Fillings or Coatings",
          description:
            "Cakes, muffins, pies, pastries, tarts, cookies, doughnuts, brownies, and croissants",
        },
        {
          name: "Puddings and Similar Desserts",
          description:
            "Flavored gelatine, mousse, flavored whipped dessert products, or any other products similar to pudding",
        },
        {
          name: "Prepared Foods",
          description:
            "Salads, sandwiches, platters of cheese, cold cuts, fruit or vegetables, and other arrangements of prepared food",
        },
        {
          name: "Heated Foods and Beverages",
          description:
            "Food or beverages heated for consumption, beverages dispensed at the place where they are sold, and those bought as part of a catering service",
        },
        {
          name: "Basic Groceries",
          description:
            "Fresh, frozen, canned, and sealed fruits and vegetables, cereals, most milk products, fresh meat, poultry, fish, eggs, and coffee, along with sweetening agents and other basic ingredients",
        },
      ],
    },
    {
      category: "Children's Items and Games",
      subcategories: [
        {
          name: "Children's Clothing",
          description:
            "Garments up to girls' size 16 or boys' size 20, including baby bibs, socks, hosiery, hats, mittens and gloves, scarves, and shoes",
        },
        { name: "Children's Diapers", description: "All sizes and types" },
        {
          name: "Children's Car Seats",
          description: "Approved safety seats for children",
        },
        {
          name: "Children's Toys",
          description: "Designed for kids under 14, including jigsaw puzzles",
        },
        {
          name: "Video Game Equipment",
          description:
            "Consoles, controllers, and physical editions of video games",
        },
      ],
    },
    {
      category: "Literature and Seasonal Items",
      subcategories: [
        { name: "Print Newspapers", description: "All print editions" },
        {
          name: "Printed Books and Audiobooks",
          description: "Physical books and audiobooks",
        },
        { name: "Christmas Trees", description: "Both natural and artificial" },
      ],
    },
  ],
  nonGstHstFree: [
    {
      category: "Food and Beverages",
      subcategories: [
        {
          name: "Alcoholic Beverages Over 7%",
          description: "Alcoholic beverages above 7% alcohol by volume",
        },
        {
          name: "Catering Services",
          description:
            "Prepared foods and beverages sold as part of catering service",
        },
      ],
    },
  ],
};

export default data;
