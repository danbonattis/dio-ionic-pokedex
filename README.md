# dio-ionic-pokedex
Projeto Pokedex em Ionic para o LiveCoding da DIO em 23/02 (https://www.youtube.com/watch?v=RIB68YJ6nqM)

1. Instalar o NodeJS (https://nodejs.org/en/download/) 
2. Instalar o CLI do Ionic
```
npm install -g @ionic/cli
```

Após clonar o projeto, rodar na pasta:
```
npm install
```

Para rodar o app no seu navegador:
```
ionic serve
```



Rodar no Android:
Baixar o Android Studio e algumas dependencias (Tools > SDK Manager);

Saiba mais aqui: https://ionicframework.com/docs/developing/android


Rodar os comandos na pasta:
```
cordova plugin add cordova-plugin-camera-preview

cordova plugin add cordova-plugin-androidx

cordova platform add android@10

cordova platform build android
```
