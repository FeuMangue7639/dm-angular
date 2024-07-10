import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  searchTerm: string = '';
  sortDirection: string = 'asc';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  filteredProducts(): Product[] {
    let filtered = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    return filtered.sort((a, b) => this.sortDirection === 'asc' ? a.price - b.price : b.price - a.price);
  }

  sortByPrice(direction: string): void {
    this.sortDirection = direction;
  }
}

