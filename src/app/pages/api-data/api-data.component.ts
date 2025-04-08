import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-api-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api-data.component.html',
})
export class ApiDataComponent implements OnInit {
  posts: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPosts().subscribe((data) => {
      console.log(data);  // Debugging: Log the data received from the API
      this.posts = data;
    }, (error) => {
      console.error('Error fetching posts:', error);  // Log any errors
    });
  }
}
