import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from 'src/app/model/Note';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input() note: any;
  @Output() onDeleteNote: EventEmitter<any> = new EventEmitter(); 

  faEdit = faEdit;
  faTrash = faTrash;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(id: number){
    this.onDeleteNote.emit(id);
  }

}
