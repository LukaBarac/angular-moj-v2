import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { OrderService } from 'src/app/orders/order.service';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-previous-training',
  templateUrl: './previous-training.component.html',
  styleUrls: ['./previous-training.component.css'],
})
export class PreviousTrainingComponent implements OnInit, AfterViewInit {
  //ovde stavljas produkte u servis na klik dodaj
  displayedColumns = ['warantyExpiryDate', 'name', 'color', 'price', 'availability'];
  productDataSource = new MatTableDataSource<Product>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private productService: ProductService,
    private order: OrderService
  ) {}
  add() {
    //push u niz produakta u order servisu
  }
  ngOnInit(): void {
    this.productDataSource.data = this.productService.getProducts();
  }

  ngAfterViewInit(): void {
    this.productDataSource.sort = this.sort;
    this.productDataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.productDataSource.filter = filterValue.trim().toLowerCase();
  }
}
