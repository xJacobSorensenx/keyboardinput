import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';





@Component({
  selector: 'app-kasse',
  templateUrl: './kasse.component.html',
  styleUrls: ['./kasse.component.css'],
  animations: [
    trigger('kasseAnimation', [
      state('midt', style({

      })),
      state('venstre', style({
        transform: 'translateX(-10px)'
      })),
      transition('midt <=> venstre', animate('40ms ease-out'))

    ]),

    trigger('klikker', [
      state('normal', style({

      })),
      state('nede', style({
        transform: 'scale(0.95)'
      })),
      transition('normal => nede', animate('100ms'))
    ])
  ]
})
export class KasseComponent implements OnInit {


  state = 'midt';
  klikkerstate = 'normal';
  constructor() { }

  ngOnInit() {
  }

  @HostListener('document:keyup', ['$event'])
  @HostListener('document:keydown', ['$event'])
  testfunk(event: KeyboardEvent) {
    console.log(event.type);

    if (event.type === 'keydown') {
      this.state = 'venstre';
    }
    if (event.type === 'keyup') {
      this.state = 'midt';
    }

  }

  skiftMN() {
    this.klikkerstate = 'nede';
    console.log('nede');

  }

  skiftop() {
    this.klikkerstate = 'normal';
    console.log('normal');

  }
}
