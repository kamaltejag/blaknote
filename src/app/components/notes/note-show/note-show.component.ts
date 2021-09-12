import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from 'src/app/model/Note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-show',
  templateUrl: './note-show.component.html',
  styleUrls: ['./note-show.component.css']
})
export class NoteShowComponent implements OnInit {

  note?: Note;

  constructor(private  noteService: NoteService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.noteService.getNote(params.id).subscribe((note) => this.note = note);
    });
  }

}
