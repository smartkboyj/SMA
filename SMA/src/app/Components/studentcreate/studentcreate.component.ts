import { Component } from '@angular/core';
import { StudentService } from '../../Services/student.service';
import { IStudent } from '../../Models/student.model';
import { Router, RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-studentcreate',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './studentcreate.component.html',
  styleUrl: './studentcreate.component.css'
})
export class StudentcreateComponent {

  student: IStudent = {
    studentID: 0,
    name: '',
    dateOfBirth: new Date(),
    isActive: true,
    email: '',
    address: '',
    contact: ''
  };

  constructor(private studentService: StudentService, private router: Router) {}

  onSubmit(): void {
    this.studentService.createStudent(this.student).subscribe(() => {
      alert('Student created successfully!');
      this.router.navigate(['/list']);
    });
  }
}
