import { ElementRef, EventEmitter, Input, Output,ViewChild, ViewContainerRef } from '@angular/core';
import { WindowComponent } from '../window';
// functions
import { generateId } from '../functions'

export class ProgramComponent {
  public defaultId: string; // debugging purposes
  public id: string;

  @Input() programDefinition: any;
  @Output() closeWindow: EventEmitter<boolean> = new EventEmitter<boolean> (); // outputs the ElementRef. tells the parent to delete the component

  @ViewChild(WindowComponent) window: WindowComponent;
  constructor () {
    // set default id if the extended program does not define one
    this.id = this.defaultId = generateId("");
  }
  ngOnInit() {
    this.window.closeWindow.subscribe(() => {
      this.closeWindow.next(true);
    });
  }


}