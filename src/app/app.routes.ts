import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { TeamComponent } from './team/team.component';
import { ResearchComponent } from './research/research.component';
import { PublicationsComponent } from './publications/publications.component';
import { AwardsComponent } from './awards/awards.component';
import { JoinComponent } from './join/join.component';

export const routes: Routes = [
    {path: "", component: HomeComponent },
    {path: "admin", component: AdminComponent},
    {path: "team", component: TeamComponent},
    {path: "research", component: ResearchComponent},
    {path: "publications", component: PublicationsComponent},
    {path: "awards", component: AwardsComponent},
    {path: "join", component: AdminComponent}
];
