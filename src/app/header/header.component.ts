import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isHomePage = false;

  menuItems = [
    {label: 'Photo', link: 'http://joshbowman.smugmug.com', external: true},
    {label: 'Video', link: 'https://www.youtube.com/channel/UC5tknSrCydhOICFL_8bvo5A', external: true},
    // {label: 'Bio', link: 'bio'},
    {label: 'Contact', link: 'mailto:hello@jtbowman.com', external: true}
  ]

  socials = [
    {icon: 'pi-instagram', link: 'https://www.instagram.com/jtbowman_media/'},
    {icon: 'pi-twitter', link: 'https://twitter.com/jtbowman_media'},
    {icon: 'pi-youtube', link: 'https://www.youtube.com/channel/UC5tknSrCydhOICFL_8bvo5A'},
  ]

  constructor(private router: Router) {
    this.router.events.subscribe((evt: Event) => {
      if (evt instanceof NavigationEnd) {
        this.isHomePage = evt.url === '/';
      }
    });
  }

  ngOnInit(): void { }

}
