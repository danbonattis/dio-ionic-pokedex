import { Component, OnInit } from '@angular/core';
import { CameraPreview, CameraPreviewOptions } from '@awesome-cordova-plugins/camera-preview/ngx';
import { ActivatedRoute } from "@angular/router";
import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-pokebola',
  templateUrl: './pokebola.page.html',
  styleUrls: ['./pokebola.page.scss'],
})
export class PokebolaPage implements OnInit {

  picture: string = null;
  pokemonId: string = null;
  captured: boolean = false;

  cameraPreviewOpts: CameraPreviewOptions = {
    x: 0,
    y: 0,
    width: window.screen.width,
    height: window.screen.height,
    camera: 'rear',
    tapPhoto: true,
    previewDrag: true,
    toBack: true,
    alpha: 1,
    storeToFile: false
  };

  constructor(private cameraPreview: CameraPreview,
              private route: ActivatedRoute,
              private alertCtrl: AlertController) { }

  /**
   *
   */
  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      if (params) this.pokemonId = params.pokemonId;
    });

    this.cameraPreview.startCamera(this.cameraPreviewOpts).then(() => {
      console.log("Camera Started...");
    }).catch((err) => {
      console.error(err);
    });

  }

  /**
   *
   */
  capturar() {

    console.log("Trying to capture....");

    this.cameraPreview.takePicture(this.cameraPreviewOpts).then((imageData) => {

      this.picture = 'data:image/jpeg;base64,' + imageData;
      this.captured = true;

      this.showPokemon();

    }, (err) => {
      console.log(err);
    });

  }

  /**
   *
   * @private
   */
  private async showPokemon() {

    let alert = await this.alertCtrl.create({
      header: 'pokemon',
      message: `<img src="${this.picture}">`,
      buttons: [
        {
          text: 'ok',
        },
      ],
    });

    await alert.present();

  }
}
