import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] =[

    {

      icon:'american-football',
      name:'Action Sheet',
      redirectTo: '/action-sheet'

    },
    {

      icon:'appstore',
      name:'Alert',
      redirectTo: '/alert'

    },
    {

      icon:'beaker',
      name:'Avatar',
      redirectTo: '/avatar'

    },
    {

      icon:'radio-button-on',
      name:'Botones y rutas',
      redirectTo: '/buttons'

    },
    {

      icon:'card',
      name:'Cards',
      redirectTo: '/cards'

    },
    {

      icon:'checkmark-circle-outline',
      name:'Check',
      redirectTo: '/check'

    },
    {

      icon:'calendar',
      name:'dateTime',
      redirectTo: '/date-time'

    },
    {

      icon:'car',
      name:'Fabs',
      redirectTo: '/fab'

    },
    {

      icon:'grid',
      name:'Grid - Rows',
      redirectTo: '/grid'

    },
    {

      icon:'infinite',
      name:'Infinite /scroll',
      redirectTo: '/infinite-scroll'

    },
    {

      icon:'hammer',
      name:'Input - Forms',
      redirectTo: '/input'

    },
    {

      icon:'list',
      name:'Lists- Sliding',
      redirectTo: '/list'

    },
    {

      icon:'reorder',
      name:'Lists- Reorder',
      redirectTo: '/list-reoder'

    }


  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Componente { 

  icon: string;
  name: string;
  redirectTo: string;

}