import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetails } from './user-details/user-details';

import { UpdteUser } from './updte-user/updte-user';
import { EditUser } from './edit-user/edit-user';

@NgModule({
  declarations: [
    UserDetails,
    EditUser,
  // UpdteUser : cannot declare bcoz it is standalone component
  ],
  imports: [
    CommonModule
  ],
  exports:[UserDetails]
})
export class UserModule { }
