import { Component } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'menu';

  currentMenu:MenuItem [] = [
    {name:"Italian Pizza", category: "Pizza", price: 18.99},
    {name:"Detroit Pizza", category: "Pizza", price: 19.99},
    {name:"Fancy Wings", category: "Wings", price: 12.99},
    {name:"Budget Wings", category: "Wings", price: 4.99},
    {name:"Ensalada Verde", category:"Salads", price: 8.99},
    {name: "Ensalada Marrón", category:"Salads", price: 2.99}
  ];

  showMenu:boolean=false;
  
  showFullMenu():void
  {
    this.showMenu = !this.showMenu;
  }

  getCategories():string[]
  {
    let categories:string[] = [];
    for (let i = 0; i < this.currentMenu.length; i++)
    {
      if (categories.indexOf(this.currentMenu[i].category) === -1)
      {
        categories.push(this.currentMenu[i].category);
      }
    }
    return categories;
  }
  
  showCategory(category:string):MenuItem[]
  {
    
    let menuByCategory:MenuItem[] = [];
    for (let i = 0; i<this.currentMenu.length; i++)
    {
      if(this.currentMenu[i].category == category)
      {
        menuByCategory.push(this.currentMenu[i]);
      }
    }
    return menuByCategory;

  }

}




