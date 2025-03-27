declare module 'products/Products' {
  import { FC } from 'react';
  
  interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  }

  interface ProductsProps {
    onProductSelect: (product: Product) => void;
  }

  const Products: FC<ProductsProps>;
  export default Products;
}

declare module 'basket/Basket' {
  interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  }

  interface BasketProps {
    selectedProducts: Product[];
  }

  const Basket: React.FC<BasketProps>;
  export default Basket;
} 