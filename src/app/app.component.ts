import { Component } from '@angular/core';
// import { } from 'googlemaps';
import "src/assets/js/polygon.js";
declare var initMap: any;
declare var FinalCoordinates: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'polygonmap';
  coordinates:any;
  ngOnInit() {
      initMap(); 
      // this.display();
      
  }


  display(){
    console.log(FinalCoordinates);
 }
 
}
