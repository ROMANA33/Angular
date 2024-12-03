import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Import des composants
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { LoginComponent } from './login/login.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { QuestionsComponent } from './questions/questions.component';
import { ResultatsComponent } from './resultats/resultats.component';
import { IaComponent } from './ia/ia.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ProfilComponent } from './profil/profil.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DashboardPatientComponent } from './dashboard-patient/dashboard-patient.component';
import { DashboardMedecinComponent } from './dashboard-medecin/dashboard-medecin.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';

// Import des routes
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    LoginComponent,
    NotificationsComponent,
    QuestionsComponent,
    ResultatsComponent,
    IaComponent,
    FormulaireComponent,
    ProfilComponent,
    ConditionsComponent,
    AccueilComponent,
    DashboardPatientComponent,
    DashboardMedecinComponent,
    DashboardAdminComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes), // Import des routes
    FormsModule, // Gestion des formulaires simples
    ReactiveFormsModule, // Gestion des formulaires réactifs
    HttpClientModule, // Gestion des requêtes HTTP
  ],
  providers: [],
  bootstrap: [AppComponent], // Composant principal
})
export class AppModule {}
