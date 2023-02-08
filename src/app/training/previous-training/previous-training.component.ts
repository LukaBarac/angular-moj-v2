import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { OrderService } from 'src/app/orders/order.service';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-previous-training',
  templateUrl: './previous-training.component.html',
  styleUrls: ['./previous-training.component.css'],
})
export class PreviousTrainingComponent implements OnInit, AfterViewInit {
  //ovde stavljas produkte u servis na klik dodaj
  displayedColumns = ['date', 'name', 'duration', 'calories', 'status'];
  exerciseSource = new MatTableDataSource<Exercise>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private trainingService: TrainingService,
    private order: OrderService
  ) {}
  add() {
    //push u niz produakta u order servisu
  }
  ngOnInit(): void {
    this.exerciseSource.data = this.trainingService.getExercises();
  }

  ngAfterViewInit(): void {
    this.exerciseSource.sort = this.sort;
    this.exerciseSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.exerciseSource.filter = filterValue.trim().toLowerCase();
  }
}
