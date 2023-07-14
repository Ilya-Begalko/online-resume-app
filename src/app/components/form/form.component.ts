import { Component } from '@angular/core';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { TDocumentDefinitions } from 'pdfmake/interfaces';


interface LanguageLevels {
  value: string;
  code?: string;
}

@Component({
  selector: 'form-component',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent {
  separatorExp: string = '';

  languageLevels: LanguageLevels[] = [
    {
      value: 'Native speaker'
    },
    {
      value: 'Elementary',
    },
    {
      value: 'Pre-Intermidiate',
    },
    {
      value: 'Intermidiate',
    },
    {
      value: 'Upper-Intermidiate',
    },
    {
      value: 'Advance',
    }
  ]

  constructor() {
    (window as any).pdfMake.vfs = pdfFonts.pdfMake.vfs;
  }

  resume: any = {
    name: '',
    skills: [],
    works: [],
    educations: [],
    languages: []
  };

  generatePdf(action = 'open') {
    //console.log(pdfMake);
    const documentDefinition = this.getDocumentDefinition();

    switch (action) {
      case 'open': pdfMake.createPdf(documentDefinition).open(); break;
      case 'print': pdfMake.createPdf(documentDefinition).print(); break;
      case 'download': pdfMake.createPdf(documentDefinition).download(); break;

      default: pdfMake.createPdf(documentDefinition).open(); break;
    }

  }

  getDocumentDefinition(): TDocumentDefinitions {
    sessionStorage.setItem('resume', JSON.stringify(this.resume));
    return {

      content: [
        {
          text: 'RESUME',
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]

        },
        {
          text:'SKILLS'
        }
      ],
      info: {
        title: this.resume.name + '_RESUME',
        author: this.resume.name,
        subject: 'RESUME',
        keywords: 'RESUME, ONLINE RESUME',
      },
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 20, 0, 10],
          decoration: 'underline'
        },
        name: {
          fontSize: 16,
          bold: true
        },
        jobTitle: {
          fontSize: 14,
          bold: true,
          italics: true
        },
        sign: {
          margin: [0, 50, 0, 10],
          alignment: 'right',
          italics: true
        },
        tableHeader: {
          bold: true,
        }
      }
    };

  }

}