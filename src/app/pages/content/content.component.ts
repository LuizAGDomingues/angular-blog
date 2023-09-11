import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'src/app/data/db';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input() photoCover: string = "";
  @Input() contentTitle: string = "";
  @Input() contentDescription: string = "";
  private id: string | null = "0";

  constructor(private router:ActivatedRoute){}

  ngOnInit(): void {
    this.router.paramMap.subscribe( value => this.id = value.get("id"));
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null){
    const result = data.filter(article => article.id == id)[0];

    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photo;
  }
}
