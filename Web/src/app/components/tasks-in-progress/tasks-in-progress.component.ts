import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks-in-progress',
  templateUrl: './tasks-in-progress.component.html',
  styleUrls: ['./tasks-in-progress.component.scss']
})
export class TasksInProgressComponent implements OnInit {

  public tasks: any[] = [
    {
      title: 'To jest tytuł zadania które wymyśliła nieznan mi bliżej osoba i zapisała tu aby inni mogli sobie przeczytać jeśli tylko zechcą',
      description: 'Ogólnie znana teza głosi, iż użytkownika może rozpraszać zrozumiała zawartość strony, kiedy ten chce zobaczyć sam jej wygląd. Jedną z mocnych stron używania Lorem Ipsum jest to, że ma wiele różnych „kombinacji” zdań, słów i akapitów, w przeciwieństwie do zwykłego: „tekst, tekst, tekst”, sprawiającego, że wygląda to „zbyt czytelnie” po polsku. Wielu webmasterów i designerów używa Lorem Ipsum jako domyślnego modelu tekstu i wpisanie w internetowej wyszukiwarce ‘lorem ipsum’ spowoduje znalezienie bardzo wielu stron, które wciąż są w budowie. Wiele wersji tekstu ewoluowało i zmieniało się przez lata, czasem przez przypadek, czasem specjalnie (humorystyczne wstawki itd).'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
