import { NgModule } from "@angular/core";

// Componentes
import { PagesComponent } from './pages.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from "../components/grafico-dona/grafico-dona.component";

import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// Modulos requeridos
import { FormsModule } from "@angular/forms";
import { ChartsModule } from 'ng2-charts';

// Modulo secundarios
import { SharedModule } from "../shared/shared.module";

// Rutas
import { PAGES_ROUTES } from './pages.routes';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent,
        AccountSettingsComponent
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent
    ],
    imports: [
        SharedModule,
        FormsModule,
        ChartsModule,
        PAGES_ROUTES
    ]
})

export class PagesModule {}