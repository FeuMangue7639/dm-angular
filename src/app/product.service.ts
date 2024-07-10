import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Produit 1', description: 'Description du produit 1', price: 10, image: 'url_image_1' },
    { id: 2, name: 'Produit 2', description: 'Description du produit 2', price: 20, image: 'url_image_2' },
    // Ajoute plus de produits ici
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}

