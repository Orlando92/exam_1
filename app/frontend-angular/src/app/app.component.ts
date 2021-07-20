import { Component } from '@angular/core';
import groups from 'src/assets/groups';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'frontend-angular';
  results = [];
  groups = groups;

  submit(event: string){
    const group = groups.find(g => g.name === event);
    fetch(`http://localhost:3000?group=${group?.attributeName}`)
      .then(response => response.json())
      .then(data => {
        const filtered = data.map((element: { [x: string]: any; }) => Object.keys(element)
        .filter(key => group?.columnsToShow.includes(key))
        .reduce((obj: any, key) => {
          obj[key] = element[key];
          return obj;
        }, {}));
        this.results = filtered;
    });
  }
}
