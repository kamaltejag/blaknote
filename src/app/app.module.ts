import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MarkdownModule } from 'ngx-markdown';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotesListComponent } from './components/notes/notes-list/notes-list.component';
import { NoteComponent } from './components/notes/note/note.component';
import { NoteCreateEditComponent } from './components/notes/note-create-edit/note-create-edit.component';
import { TodosListComponent } from './components/todos/todos-list/todos-list.component';
import { NoteShowComponent } from './components/notes/note-show/note-show.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ListComponent,
    FooterComponent,
    NotesListComponent,
    NoteComponent,
    TodosListComponent,
    NoteCreateEditComponent,
    NoteShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
