
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatService } from '../services/candidat.service';
import { Candidat } from 'src/core/Candidat';

@Component({
  selector: 'app-add-candidat',
  templateUrl: './add-candidat.component.html',
  styleUrls: ['./add-candidat.component.css']
})
export class AddCandidatComponent {

  candidat : Candidat = new Candidat();

  constructor (
    private candidatservice: CandidatService,
    private router: Router
  ) {
    this.candidat.etat = 1
  }

  addCandidat () {
    console.log(this.candidat)
    this.candidatservice.addCandidat(this.candidat).subscribe({
      next: (res: any) => {
        this.router.navigate(['/list-candidat'])
        console.log(res)
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
}
