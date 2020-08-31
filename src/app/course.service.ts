import { Course } from './models/course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CourseService {
  apiUrl = 'https://codingthailand.com/api/get_courses.php';

  constructor(private http: HttpClient) { }
  getCourse(): Observable<Course[]>{
    return this.http.get<Course[]>(this.apiUrl);
  }
}


