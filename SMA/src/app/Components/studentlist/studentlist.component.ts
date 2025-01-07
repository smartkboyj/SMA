import { CommonModule } from '@angular/common';
import { IStudent } from '../../Models/student.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { StudentService } from '../../Services/student.service';
import { MatTableModule } from '@angular/material/table';
import { Router ,RouterModule} from '@angular/router';

@Component({
  selector: 'app-studentlist',
  imports: [CommonModule, MatTableModule,RouterModule],
  templateUrl: './studentlist.component.html',
  styleUrl: './studentlist.component.css',
})
export class StudentlistComponent {
  @Input() students: IStudent[] = [];
  @Output() editStudent = new EventEmitter<number>();
  @Output() deleteStudent = new EventEmitter<number>();

  displayedColumns: string[] = ['studentID', 'name', 'address', 'actions'];
  constructor(private studentService: StudentService,private router: Router) {}

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getAllStudents().subscribe((data: IStudent[]) => {
      this.students = data;
      console.log(data);
    });
  }
  onEdit(id: number): void {
    this.router.navigate(['edit', id]); // Navigate to edit component with student ID
  }

  onDelete(id: number): void {
    var res=confirm("DO you want to delete thi record");
    if(res){
    this.studentService.deleteStudent(id).subscribe(() => {
      this.getStudents();
      
    });
  }
  }
}
