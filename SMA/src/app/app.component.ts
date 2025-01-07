import { Component, OnInit } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { IStudent } from './Models/student.model';
import { StudentService } from './Services/student.service';
import { CommonModule } from '@angular/common';
import { Router } from 'express';
import { MatTable } from '@angular/material/table';
import { MatButton } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [ RouterOutlet, RouterModule, CommonModule,MatTable,MatButton,MatFormField], // Import necessary modules
})
export class AppComponent implements OnInit {
  title = 'SMA';
  students: IStudent[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe((data) => {
      this.students = data;
    });
  }
  onEditStudent(id: number): void {
    //this.router.navigate([`/edit/${id}`]);
  }
  onDeleteStudent(id: number): void {
    this.studentService.deleteStudent(id).subscribe(() => {
      this.students = this.students.filter(
        (student) => student.studentID !== id
      );
    });
  }
}
