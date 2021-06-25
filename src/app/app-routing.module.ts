import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './component/user/create-user/create-user.component';
import { DeleteUserComponent } from './component/user/delete-user/delete-user.component';
import { UpdateUserComponent } from './component/user/update-user/update-user.component';
import { CreateRatetermComponent } from './component/rateterm/create-rateterm/create-rateterm.component';
import { DeleteRatetermComponent } from './component/rateterm/delete-rateterm/delete-rateterm.component';
import { UpdateRatetermComponent } from './component/rateterm/update-rateterm/update-rateterm.component';
import { CreateOperationComponent } from './component/operation/create-operation/create-operation.component';
import { DeleteOperationComponent } from './component/operation/delete-operation/delete-operation.component';
import { UpdateOperationComponent } from './component/operation/update-operation/update-operation.component';
import { CreateInvoiceComponent } from './component/invoice/create-invoice/create-invoice.component';
import { DeleteInvoiceComponent } from './component/invoice/delete-invoice/delete-invoice.component';
import { UpdateInvoiceComponent } from './component/invoice/update-invoice/update-invoice.component';
import { CreateInitialcostComponent } from './component/initialcost/create-initialcost/create-initialcost.component';
import { UpdateInitialcostComponent } from './component/initialcost/update-initialcost/update-initialcost.component';
import { DeleteInitialcostComponent } from './component/initialcost/delete-initialcost/delete-initialcost.component';
import { CreateFinalcostComponent } from './component/finalcost/create-finalcost/create-finalcost.component';
import { DeleteFinalcostComponent } from './component/finalcost/delete-finalcost/delete-finalcost.component';
import { UpdateFinalcostComponent } from './component/finalcost/update-finalcost/update-finalcost.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'create-user', component: CreateUserComponent},
  {path: 'update-user', component: UpdateUserComponent},
  {path: 'delete-user', component: DeleteUserComponent},

  {path: 'create-rateTerm', component: CreateRatetermComponent},
  {path: 'delete-rateTerm', component: DeleteRatetermComponent},
  {path: 'update-rateTerm', component: UpdateRatetermComponent},

  {path: 'create-operation', component: CreateOperationComponent},
  {path: 'update-operation', component: UpdateOperationComponent},
  {path: 'delete-operation', component: DeleteOperationComponent},

  {path: 'create-invoice', component: CreateInvoiceComponent},
  {path: 'delete-invoice', component: DeleteInvoiceComponent},
  {path: 'update-invoice', component: UpdateInvoiceComponent},

  {path: 'create-initialCost', component: CreateInitialcostComponent},
  {path: 'delete-initialCost', component: DeleteInitialcostComponent},
  {path: 'update-initialCost', component: UpdateInitialcostComponent},

  {path: 'create-finalCost', component: CreateFinalcostComponent},
  {path: 'delete-finalCost', component: DeleteFinalcostComponent},
  {path: 'update-finalCost', component: UpdateFinalcostComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
