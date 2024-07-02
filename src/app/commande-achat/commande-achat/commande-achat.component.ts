import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { GlobalService } from 'src/app/Services/global.service';
import { CommandeService } from 'src/app/Services/commande.service';
import { CommandeAchat, GetCommandeAchat } from 'src/app/Models/commande.model';

@Component({
  selector: 'app-commande-achat',
  templateUrl: './commande-achat.component.html',
  styleUrls: ['./commande-achat.component.scss']
})
export class CommandeAChatComponent {
  dataSource!: any;
  displayedColumns = [
    'date_commande',
    'fournisseur_id',
    'montant_total',
    'statut',
    'utilisateur_id',
    'Actions'
  ];

  isloadingpage!: boolean
  selectedcommandeString!: string;

  constructor(
    private commandeService: CommandeService,
    private router: Router,
    public globalService: GlobalService,
    private dialog: MatDialog
  ){}
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.getListCommandes()
  }
  
  getListCommandes(){
    const commande : GetCommandeAchat = {commande_achat_id: 0}
    this.isloadingpage = true
    this.commandeService.getList(commande).subscribe(data => {
      console.log(data.message);      
      this.isloadingpage = false
      this.dataSource = new MatTableDataSource(data.message);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
     });
  }

  applyFilter(filterValue: any) {
    const value = filterValue.target.value;
    this.dataSource.filter = value.trim().toLowerCase();
  }

  actions(element: CommandeAchat){
    this.selectedcommandeString = JSON.stringify(element); 
    localStorage.setItem('selectedVente', this.selectedcommandeString);
    if (this.selectedcommandeString) {
      this.router.navigateByUrl('commandeAchat/view')
    }
  }
}
