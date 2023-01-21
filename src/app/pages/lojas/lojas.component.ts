import { AuthService } from './../../shared/auth/auth.service';
import { ILojas } from 'src/app/shared/models/lojas.interface';
import { ILojasForm } from '../../shared/models/lojas.interface';
import { LojaRequestService } from 'src/app/shared/request/lojas.service';
import { FormBuilder } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { take, tap } from 'rxjs';

@Component({
    selector: 'app-lojas',
    templateUrl: './lojas.component.html',
    styleUrls: ['./lojas.component.css'] })

    export class LojasComponent implements OnInit {

        constructor(
         private request: LojaRequestService,
          public auth: AuthService) {
          
        }

        ngOnInit(): void {
           
        
          }
    }

      

