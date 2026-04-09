import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PersonalDetails } from '../personal-details/personal-details';
@Component({
  selector: 'app-profile',
  imports: [RouterLink, RouterOutlet,PersonalDetails],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
}
