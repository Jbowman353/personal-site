import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, Event } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgIf, NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isHomePage = false;

  menuItems = [
    {label: 'Photo', link: 'http://joshbowman.smugmug.com', external: true},
    {label: 'Video', link: 'https://www.youtube.com/channel/UC5tknSrCydhOICFL_8bvo5A', external: true},
    {label: 'Contact', link: 'mailto:hello@jtbowman.com', external: true}
  ]

  socials = [
    {icon: 'pi-instagram', link: 'https://www.instagram.com/jtbowman_media/'},
    // {icon: 'pi-twitter', link: 'https://twitter.com/jtbowman_media'},
    {icon: 'pi-youtube', link: 'https://www.youtube.com/channel/UC5tknSrCydhOICFL_8bvo5A'},
    {icon: 'pi-github', link: 'https://github.com/Jbowman353'},
  ]

  constructor(private router: Router) {
    this.router.events.subscribe((evt: Event) => {
      if (evt instanceof NavigationEnd) {
        this.isHomePage = evt.url === '/';
      }
    });
  }
}
