import {
  Component,
  ViewChild
} from '@angular/core';
import {
  Element
} from '@angular/compiler';

@Component({
  selector: 'ga-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count = 0;
  box = "box";
  winner = '';
  oWins = 0;
  xWins = 0;

  constructor() {}
  elem = ['', '', '', '', '', '', '', '', ''];
  tempElem = [];
  ids = {
    genericO: {
      box1: 0,
      box2: 0,
      box3: 0,
      box4: 0,
      box5: 0,
      box6: 0,
      box7: 0,
      box8: 0,
      box9: 0
    },
    genericX: {
      box1: 0,
      box2: 0,
      box3: 0,
      box4: 0,
      box5: 0,
      box6: 0,
      box7: 0,
      box8: 0,
      box9: 0
    }
  }

  onClick(e, evt) {
    let element: HTMLDivElement = evt.target;

    this.tempElem.push(element);
    if (this.count % 2 == 0) {
      element.innerHTML = '<span class="genericO">O<span>';
      element.setAttribute("style", "pointer-events: none");
    } else if (this.count % 2 !== 0) {
      element.innerHTML = '<span class="genericX">X<span>';
      element.setAttribute("style", "pointer-events: none");
    }

    var eleClassName = element.children[0].className;
    var eleId = element.id;

    this.ids[eleClassName][eleId] = 1;

    if (
      (this.ids["genericO"]["box1"] == 1 && this.ids["genericO"]["box2"] == 1 && this.ids["genericO"]["box3"] == 1) ||
      (this.ids["genericO"]["box4"] == 1 && this.ids["genericO"]["box5"] == 1 && this.ids["genericO"]["box6"] == 1) ||
      (this.ids["genericO"]["box7"] == 1 && this.ids["genericO"]["box8"] == 1 && this.ids["genericO"]["box9"] == 1) ||
      (this.ids["genericO"]["box1"] == 1 && this.ids["genericO"]["box4"] == 1 && this.ids["genericO"]["box7"] == 1) ||
      (this.ids["genericO"]["box2"] == 1 && this.ids["genericO"]["box5"] == 1 && this.ids["genericO"]["box8"] == 1) ||
      (this.ids["genericO"]["box3"] == 1 && this.ids["genericO"]["box6"] == 1 && this.ids["genericO"]["box9"] == 1) ||
      (this.ids["genericO"]["box1"] == 1 && this.ids["genericO"]["box5"] == 1 && this.ids["genericO"]["box9"] == 1) ||
      (this.ids["genericO"]["box3"] == 1 && this.ids["genericO"]["box5"] == 1 && this.ids["genericO"]["box7"] == 1)
    ) {
      this.winner = 'O Wins';
      this.oWins++;
      this.resetAll();
    } else if (
      (this.ids["genericX"]["box1"] == 1 && this.ids["genericX"]["box2"] == 1 && this.ids["genericX"]["box3"] == 1) ||
      (this.ids["genericX"]["box4"] == 1 && this.ids["genericX"]["box5"] == 1 && this.ids["genericX"]["box6"] == 1) ||
      (this.ids["genericX"]["box7"] == 1 && this.ids["genericX"]["box8"] == 1 && this.ids["genericX"]["box9"] == 1) ||
      (this.ids["genericX"]["box1"] == 1 && this.ids["genericX"]["box4"] == 1 && this.ids["genericX"]["box7"] == 1) ||
      (this.ids["genericX"]["box2"] == 1 && this.ids["genericX"]["box5"] == 1 && this.ids["genericX"]["box8"] == 1) ||
      (this.ids["genericX"]["box3"] == 1 && this.ids["genericX"]["box6"] == 1 && this.ids["genericX"]["box9"] == 1) ||
      (this.ids["genericX"]["box1"] == 1 && this.ids["genericX"]["box5"] == 1 && this.ids["genericX"]["box9"] == 1) ||
      (this.ids["genericX"]["box3"] == 1 && this.ids["genericX"]["box5"] == 1 && this.ids["genericX"]["box7"] == 1)
    ) {
      this.winner = 'X Wins';
      this.xWins++;
      this.resetAll();
    }

    this.count++;

  }

  resetAll() {
    this.tempElem.forEach(function (elem) {
      if (typeof elem.childNodes[0] != 'undefined') {
        elem.childNodes[0].remove()
        elem.setAttribute("style", "pointer-events: default")
      }
    })
    this.count = 0;
    this.tempElem = [];

    this.ids = {
      genericO: {
        box1: 0,
        box2: 0,
        box3: 0,
        box4: 0,
        box5: 0,
        box6: 0,
        box7: 0,
        box8: 0,
        box9: 0
      },
      genericX: {
        box1: 0,
        box2: 0,
        box3: 0,
        box4: 0,
        box5: 0,
        box6: 0,
        box7: 0,
        box8: 0,
        box9: 0
      }
    }
  }
}
