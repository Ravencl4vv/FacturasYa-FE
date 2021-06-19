import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './component/user/create-user/create-user.component';
import { UpdateUserComponent } from './component/user/update-user/update-user.component';
import { DeleteUserComponent } from './component/user/delete-user/delete-user.component';
import { DeleteRatetermComponent } from './component/rateterm/delete-rateterm/delete-rateterm.component';
import { CreateRatetermComponent } from './component/rateterm/create-rateterm/create-rateterm.component';
import { UpdateRatetermComponent } from './component/rateterm/update-rateterm/update-rateterm.component';
import { UpdateOperationComponent } from './component/operation/update-operation/update-operation.component';
import { CreateOperationComponent } from './component/operation/create-operation/create-operation.component';
import { DeleteOperationComponent } from './component/operation/delete-operation/delete-operation.component';
import { DeleteInvoiceComponent } from './component/invoice/delete-invoice/delete-invoice.component';
import { CreateInvoiceComponent } from './component/invoice/create-invoice/create-invoice.component';
import { UpdateInvoiceComponent } from './component/invoice/update-invoice/update-invoice.component';
import { UpdateInitialcostComponent } from './component/initialcost/update-initialcost/update-initialcost.component';
import { CreateInitialcostComponent } from './component/initialcost/create-initialcost/create-initialcost.component';
import { DeleteInitialcostComponent } from './component/initialcost/delete-initialcost/delete-initialcost.component';
import { DeleteFinalcostComponent } from './component/finalcost/delete-finalcost/delete-finalcost.component';
import { UpdateFinalcostComponent } from './component/finalcost/update-finalcost/update-finalcost.component';
import { CreateFinalcostComponent } from './component/finalcost/create-finalcost/create-finalcost.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    DeleteRatetermComponent,
    CreateRatetermComponent,
    UpdateRatetermComponent,
    UpdateOperationComponent,
    CreateOperationComponent,
    DeleteOperationComponent,
    DeleteInvoiceComponent,
    CreateInvoiceComponent,
    UpdateInvoiceComponent,
    UpdateInitialcostComponent,
    CreateInitialcostComponent,
    DeleteInitialcostComponent,
    DeleteFinalcostComponent,
    UpdateFinalcostComponent,
    CreateFinalcostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
