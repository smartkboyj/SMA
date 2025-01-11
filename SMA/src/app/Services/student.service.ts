// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class StudentService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStudent } from '../Models/student.model';
@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private baseUrl = 'https://localhost:44303/'; // Replace with your API URL

  constructor(private http: HttpClient ) {}

  // Get all students
  getAllStudents(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(`${this.baseUrl}api/Student`);
  }

  // Get a single student by ID
  getStudentById(id: number): Observable<IStudent> {
    return this.http.get<IStudent>(`${this.baseUrl}api/student/${id}`);
  }

  // Create a new student
  createStudent(student: IStudent): Observable<IStudent> {
    return this.http.post<IStudent>(`${this.baseUrl}api/Student`, student);
  }

  // Update an existing student
  updateStudent(id: number, student: IStudent): Observable<IStudent> {
    return this.http.put<IStudent>(`${this.baseUrl}api/student/${id}`, student);
  }

  // Delete a student
  deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}api/student/${id}`);
  }
}
