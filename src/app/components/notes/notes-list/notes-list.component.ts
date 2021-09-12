import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from 'src/app/model/Note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  notes?: Note[];

  constructor(private noteService: NoteService, private router: Router) { }

  ngOnInit(): void {
    this.noteService.getNotes().subscribe((notes) => this.notes = notes);
  }

  addNote(event: Event){
    console.log(event);
    // this.noteService.addNote(newNote).subscribe(() => this.router.navigate(['/list/notes']));
  }

}
