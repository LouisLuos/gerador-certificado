import { Component } from '@angular/core';
import { PrimaryButton } from "../../_components/primary-button/primary-button";
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";

@Component({
  selector: 'app-certificados',
  imports: [PrimaryButton, SecondaryButton],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css'
})
export class Certificados {

}
