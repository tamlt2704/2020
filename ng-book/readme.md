********************************************************************************
01
********************************************************************************

1. get npm version
npm -v

2. install typescript
npm install -g typescript

3. install angular cli
npm install -g @angular/cli

4. create example project
ng new [project-name]
ex: ng new angular-hello-world

5. running the application
cd angular-hello-world
ng serve --host 0.0.0.0 --port 5000

6. making a component                       7. Loading our component
ng generate component [component-name]
ex: ng generate component hello-world

src/app
|-- app.component.css                       |<h1>
 |-- app.component.html        ------->     |    {{title}}
 |-- app.component.spec.ts                  |
 |-- app.component.ts                       |    <app-hello-world> </app-hello-world>
 |-- app.module.ts                          |</h1>        ^                          
 `-- hello-world  ----------------------------------------|                          
     |-- hello-world.component.css
     |-- hello-world.component.html
     |-- hello-world.component.spec.ts
     `-- hello-world.component.ts


8. Adding data to the component
ng generate component user-item

src
|-- app
|   |-- app.component.css                    |<h1>                                     
|   |-- app.component.html     ------->      |    {{title}}
|   |-- app.component.spec.ts                |
|   |-- app.component.ts                     |    <app-hello-world> </app-hello-world>
|   |-- app.module.ts                        |    <user-item> </user-item>
|   |-- hello-world                          |</h1>
|   |   |-- hello-world.component.css
|   |   |-- hello-world.component.html
|   |   |-- hello-world.component.spec.ts
|   |   `-- hello-world.component.ts
|   `-- user-item
|       |-- user-item.component.css
|       |-- user-item.component.html
|       |-- user-item.component.spec.ts
|       `-- user-item.component.ts


file: user-item.ts                                                              file: user-item.component.html

export class UserItemComponent implements OnInit {
    name: string;
    constructor() { 
        this.name = 'Felipe';                                                   <p>Hello {{ name }} </p>
    }

    ......
}

9. Working with arrays
ng generate component user-list


file: user-list.ts                                                              file: user-list.component.html

export class UserListComponent implements OnInit {
  names: string[];
                                                                                <ul>
                                                                                    <li *ngFor="let name of names"> Hello {{name}} </li>
                                                                                </ul>
  constructor() { 
    this.names = ['Ari', 'Carlos', 'Felipe', 'Nate'];
  }
    .....
}

10. Using the user Item component

user-list-component.html
<ul>
    <!-- <li *ngFor="let name of names"> Hello {{name}} </li> -->
    <li *ngFor="let name of names">
        <app-user-item> </app-user-item> 
    </li>
</ul>

11. Accepting Input

file: user-item.component.ts                                                    file: user-item.component.ts
                                                                                <ul>
                                                                                    <!-- <li *ngFor="let name of names"> Hello {{name}} </li> -->
                                                                                    <li *ngFor="let name of names">
                                                                                        <app-user-item [name]="name">
                                                                                        </app-user-item> 
                                                                                    </li>
                                                                                </ul>

import { 
    Component, 
    OnInit,
    Input, // <-- added this
} from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
    @Input() name: string;  // <-- added this input annotation
    constructor() { 
        //this.name = 'Felipe'; <-- remote setting name
    }
    .....
}

