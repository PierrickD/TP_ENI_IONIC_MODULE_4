import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pseudo = "";
  difficulte = "easy";
  sauvegarder = false;
  error = "";
  beginGame = false;
  nextQuestion = false;

  commencer() {
  console.log(this.pseudo, this.difficulte, this.sauvegarder);
  if (this.pseudo === "" || this.difficulte === "") {
    this.error = "Veuillez rentrer un pseudo et une difficulté";
    return;
    }
    this.beginGame = true;
  }
  reponse(reponse: string) {
  this.nextQuestion = true;
  }
}