import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IngredienteService } from '../../services/domain/ingrediente.service';
import { Ingrediente } from '../../models/ingrediente';

/**
 * Generated class for the IngredientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ingredientes',
  templateUrl: 'ingredientes.html',
})
export class IngredientesPage {

  items: Ingrediente[];


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public ingredienteService: IngredienteService) {
  }

  ionViewDidLoad() {
    this.ingredienteService.findAll()
      .subscribe(response => {
        this.items = response;
      },
      error => {
        console.log(error);
      });

      
  }

}
