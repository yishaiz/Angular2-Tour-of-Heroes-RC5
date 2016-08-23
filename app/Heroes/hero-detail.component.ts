import {Component, Input} from '@angular/core';
import {Hero} from './hero';
import {ActivatedRoute, Router} from "@angular/router";
import {HeroService} from "./hero.service";


@Component({
  selector: 'my-hero-detail',
  providers: [HeroService],
  styles: [` 
`],
  template: `
  <div *ngIf="hero">
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
  </div>
`
})
export class HeroDetailComponent {
  /* @Input() */
  hero: Hero;

  private subscriber: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: HeroService) {
  }

  ngOnInit() {
    this.subscriber = this.route.params.subscribe(
      params => {
        let id = +params['id'];
        // (+) converts string 'id' to a number

        this.service.getHero(id).then(
          hero => this.hero = hero
        )
      }
    );
  }

}