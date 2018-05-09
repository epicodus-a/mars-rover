import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MarsRoverApiPhotosService } from '../mars-rover-api-photos.service';

@Component({
  selector: 'app-rover-form',
  templateUrl: './rover-form.component.html',
  styleUrls: ['./rover-form.component.css'],
  providers: [MarsRoverApiPhotosService]
})

export class RoverFormComponent implements OnInit {
  photos: any[] = null;
  constructor(private marsRoverPhotos: MarsRoverApiPhotosService) { }

  getRoverImages(date: string, camera: string) {
    this.photos=null;
    this.marsRoverPhotos.getByDateAndCamera(date, camera).subscribe(response => {
      this.photos = response.json();
      console.log(this.photos);
    })
  }
  ngOnInit() {
  }

}
