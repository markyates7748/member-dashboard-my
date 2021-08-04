import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {Title} from '@angular/platform-browser';
import {AppRoutingTitles} from './app-routing.titles';
import {GlobalModalService} from '@app/global-modal/global-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private title: Title,
              private modal: GlobalModalService) {
  }

  ngOnInit(): void {
    const appTitle = this.title.getTitle();
    this.router
      .events.pipe(filter(event => event instanceof NavigationEnd),
      map(() => {
        const child = this.activatedRoute.firstChild;
        if (child?.snapshot.data.title) {
          return child.snapshot.data.title;
        }
        return appTitle;
      })
    ).subscribe((title: string) =>  {
      this.title.setTitle(`${AppRoutingTitles.APP} - ${title}`);
    });
    this.modal.show({title: 'Test Title', message: 'Test Message'});
  }
}
