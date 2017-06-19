import { Component, OnInit } from '@angular/core';
import { FilesService } from '../files.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  // instantiate files to an empty array
  files: any = [];

  constructor(private filesService: FilesService) { }

  ngOnInit() {
    this.filesService.getAllFiles().subscribe(files => {
      this.files = files;
    });
  }

}
