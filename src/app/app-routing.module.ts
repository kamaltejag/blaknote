import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteCreateEditComponent } from './components/notes/note-create-edit/note-create-edit.component';
import { NoteShowComponent } from './components/notes/note-show/note-show.component';
import { NotesListComponent } from './components/notes/notes-list/notes-list.component'
import { TodosListComponent } from './components/todos/todos-list/todos-list.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "list",
    component: ListComponent,
    children: [
      {
        path: "",
        redirectTo: '/list/notes',
        pathMatch: 'full'
      },
      {
        path: "notes",
        component: NotesListComponent,
      },
      {
        path: "todos",
        component: TodosListComponent
      }
    ]
  },
  {
    path: "note",
    children: [
      {
        path: "create",
        component: NoteCreateEditComponent
      },
      {
        path: "edit/:id",
        component: NoteCreateEditComponent
      },
      {
        path: ":id",
        component: NoteShowComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
