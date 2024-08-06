import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenteComponent } from './vente/vente.component';
import { VenteFormComponent } from './vente-form/vente-form.component';
import { VenteFicheComponent } from './vente-fiche/vente-fiche.component';
import { CoreModule } from '../core/core.module';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ArticleDeVentesComponent } from './article-de-ventes/article-de-ventes.component';
import { FicheArticleDeVenteComponent } from './fiche-article-de-vente/fiche-article-de-vente.component';
import { VenteJournaliereByUserComponent } from './vente-journaliere-by-user/vente-journaliere-by-user.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    VenteComponent,
    VenteFormComponent,
    VenteFicheComponent,
    ArticleDeVentesComponent,
    FicheArticleDeVenteComponent,
    VenteJournaliereByUserComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
    MatPaginatorModule,
    MatTableModule,
    FormsModule
  ]
})
export class VenteModule { }
