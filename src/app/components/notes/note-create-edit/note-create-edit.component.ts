import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  note?: any;

  constructor(private noteService: NoteService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => this.noteService.getNote(params.id).subscribe((note) => this.note = note));
  }

  onAdd(){
    const newNote = {
      title: this.title,
      content: this.content
    }
    
    this.noteService.addNote(newNote).subscribe(() => this.router.navigate(['/list/notes']));
  }

  onUpdate(){
    console.log("inside Update");
  }

  onSubmit(){
    if(this.id){
      console.log("id is there");
    }else{
      console.log("Nope");
    }
  }

}
