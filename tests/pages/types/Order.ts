export interface Order {
  price: number;
  quantity: number;
  side: 'buy' | 'sell';
}