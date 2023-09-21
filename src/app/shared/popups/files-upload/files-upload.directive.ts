import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilesUploadComponent } from './files-upload.component';

@Directive({
  selector: '[appFilesUpload]'
})
export class FilesUploadDirective {
  @Input() multiple!: boolean; //multiple=permite saber si mi control va a permitir la subida de multiples archivos o solo uno
  @Input() crop!: boolean;//para edicion de imagen

  @Output() changed = new EventEmitter<string | string[]>();


  constructor(private dialog: MatDialog) { }

  @HostListener('click', ['event']) onClick(){
    this.openDialog();

  } //Hostlistener: metodo decorator para escuchar y manejar eventos del DOM

  private openDialog(): void{

    const dialogRef = this.dialog.open(FilesUploadComponent, {
      width: '550px',
      height: '500px',
      data: {
        multiple: this.multiple,
        crop: this.crop
      }
    })

    dialogRef.afterClosed().subscribe(result =>{
      this.changed.emit(result || null);
    })

  }

}
