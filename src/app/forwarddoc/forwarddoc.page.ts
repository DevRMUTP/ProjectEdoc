import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';



@Component({
  selector: 'app-forwarddoc',
  templateUrl: './forwarddoc.page.html',
  styleUrls: ['./forwarddoc.page.scss'],
})
export class ForwarddocPage implements OnInit {
  date = new FormControl(new Date());
  
  constructor() { }

  ngOnInit() {
  }

}
