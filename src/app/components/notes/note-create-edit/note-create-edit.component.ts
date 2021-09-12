import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from 'src/app/model/Note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-create-edit',
  templateUrl: './note-create-edit.component.html',
  styleUrls: ['./note-create-edit.component.css']
})
export class NoteCreateEditComponent implements OnInit {

  id: any;
  title: any;
  content: any;

  @Output() onAddNote: EventEmitter<any> = new EventEmitter();

  note?: Note;

  constructor(private noteService: NoteService, private router: Router) { }

  ngOnInit(): void {
  }

  onAdd(){
    const newNote = {
      title: this.title,
      content: this.content
    }
    
    this.onAddNote.emit(newNote);
  }

}
