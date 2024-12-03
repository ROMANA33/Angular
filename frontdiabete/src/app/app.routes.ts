import { Routes } from '@angular/router';

// Import des composants
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

// Configuration des routes
export const appRoutes: Routes = [
  // Routes générales
  { path: '', component: AccueilComponent }, // Page d'accueil
  { path: 'connexion', component: ConnexionComponent }, // Connexion
  { path: 'login', component: LoginComponent }, // Login
  { path: 'notifications', component: NotificationsComponent }, // Notifications
  { path: 'questions', component: QuestionsComponent }, // Questions
  { path: 'resultats', component: ResultatsComponent }, // Résultats
  { path: 'ia', component: IaComponent }, // Intelligence Artificielle
  { path: 'formulaire', component: FormulaireComponent }, // Formulaire
  { path: 'profil', component: ProfilComponent }, // Profil utilisateur
  { path: 'conditions', component: ConditionsComponent }, // Conditions générales

  // Routes spécifiques aux rôles
  { path: 'dashboard-patient', component: DashboardPatientComponent }, // Dashboard Patient
  { path: 'dashboard-medecin', component: DashboardMedecinComponent }, // Dashboard Médecin
  { path: 'dashboard-admin', component: DashboardAdminComponent }, // Dashboard Admin

  // Redirection pour les pages non trouvées
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Page non trouvée
];
