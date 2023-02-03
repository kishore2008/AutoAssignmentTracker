import { Component } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { MBSC_OPTIONS } from '@mobiscroll/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Program management';
  faHome=faHome;

//    navMenu: MBSC_OPTIONS = {

//     type: 'hamburger',
//     responsive: {
//         medium: {
//             type: 'tab'
//         }
//     }
// };
}
