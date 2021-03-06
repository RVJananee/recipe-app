import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simple a test', 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Idly_sambar_vada.JPG' ),
    new Recipe('A Test Recipe', 'This is simple a test', 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Idly_sambar_vada.JPG' )
  ];
  constructor() { }

  ngOnInit() {
  }

}
