export interface Product {
  name: string;
  selected: boolean;
  minimum_quantity: number;
  editable_quantity: number;
  removeable: boolean;
  format: string;
  unit_price: number;
  discount_price: number;
  imageUrl: string;

}
