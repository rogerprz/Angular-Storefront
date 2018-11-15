export interface CartProduct{
  name: string;
  selected: boolean;
  quantity: number;
  minimum_quantity: number;
  editable_quantity: number;
  removable: boolean;
  format: string;
  unit_price: number;
  discount_price: number;
  imageUrl: string;

}
