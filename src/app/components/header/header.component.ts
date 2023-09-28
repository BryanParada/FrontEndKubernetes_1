import { Component, Output, EventEmitter, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() menuToggle = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  onMenuToggleDispatch(): void{
    this.menuToggle.emit();
  }

}
