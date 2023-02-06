import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-previous-training',
  templateUrl: './previous-training.component.html',
  styleUrls: ['./previous-training.component.css']
})
export class PreviousTrainingComponent implements OnInit, AfterViewInit {

  displayedColumns = ["date", "name", "duration", "calories", "status"];
  exerciseSource = new MatTableDataSource<Exercise>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private trainingService: TrainingService) {}

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
