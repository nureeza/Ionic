import { Course } from './../models/course';
import { CourseService } from './../course.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { from } from 'rxjs';

@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
})
export class CoursePage implements OnInit, OnDestroy {
  courses: Course[];
  sub: Subscription;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.sub = this.courseService.getCourse().subscribe(
      (courses) => {

        this.courses = courses;
      }
    );
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
