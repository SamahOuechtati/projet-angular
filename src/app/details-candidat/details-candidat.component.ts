
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatService } from '../services/candidat.service';
import { Candidat } from 'src/core/Candidat';

@Component({
  selector: 'app-details-candidat',
  templateUrl: './details-candidat.component.html',
  styleUrls: ['./details-candidat.component.css']
})
export class DetailsCandidatComponent {
  id! : number
  candidat : Candidat | null = null
  constructor (
    private candidatservice: CandidatService,
    private activatedrout: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit () {
    this.id = this.activatedrout.snapshot.params['id']
    this.candidatservice.getCandidatById(this.id).subscribe({
      next: (res: any) => {
        this.candidat = res
      },
      error: (err) => {
        this.candidat = null
      }
    })
  }
}
