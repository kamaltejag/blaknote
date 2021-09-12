import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, ObservedValueOf } from 'rxjs';
import { Note } from '../model/Note';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private apiUrl = "https://packetcode-json-server.herokuapp.com/notes";

  constructor(private http:HttpClient) { }

  getNotes(): Observable<Note[]>{
    return this.http.get<Note[]>(this.apiUrl);
  }

  getNote(id: number): Observable<Note>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Note>(url);
  }

  addNote(note: any): Observable<Note>{
    return this.http.post<Note>(this.apiUrl, note, httpOptions);
  }

  deleteNote(id: number): Observable<Note>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Note>(url);
  }

  updateNote(note: Note): Observable<Note>{
    return this.http.put<Note>(this.apiUrl, note, httpOptions);
  }
}
