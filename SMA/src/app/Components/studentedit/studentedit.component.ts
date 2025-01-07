import { Component, OnInit } from '@angular/core';
import { IStudent } from '../../Models/student.model';
import { StudentService } from '../../Services/student.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { pipe } from 'rxjs';
@Component({
  selector: 'app-studentedit',
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatTable,
    RouterModule,
    MatFormFieldModule,
    DatePipe,
  ],
  templateUrl: './studentedit.component.html',
  styleUrl: './studentedit.component.css',
})
export class StudenteditComponent {
  student: IStudent = {
    studentID: 0,
    name: '',
    dateOfBirth: new Date(),
    isActive: true,
    email: '',
    address: '',
    contact: '',
  };

  formattedDate: string = '';
  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.studentService.getStudentById(id).subscribe((data) => {
      this.student = data;
      this.formattedDate = this.datePipe.transform(this.student.dateOfBirth, 'yyyy-MM-dd')!;
     // this.student.dateOfBirth = new Date(data.dateOfBirth);
    // this.formattedDate = this.datePipe.transform(this.student.dateOfBirth, 'yyyy-MM-dd')!;
    });
  }

  onSubmit(): void {

    // Parse the formatted date back to a Date object 
    this.student.dateOfBirth = new Date(this.formattedDate);
    this.studentService


      .updateStudent(this.student.studentID, this.student)
      .subscribe(() => {
        alert('Student updated successfully!');
        this.router.navigate(['/list']);
      });
  }
}
