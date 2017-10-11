import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import { Sample2Service } from './sample2.service';

export class Sample2Controller {

  title: string = "";

  name: string = "";
  success: boolean = false;
  warning: boolean = false;
  danger: boolean = false;

  constructor(
    private sample2Service: Sample2Service,
    private $timeout: angular.ITimeoutService,
    private $scope: any) {
    'ngInject';
  }

  $onInit(): void {
    console.debug("Loading", this, "with", this.sample2Service);
    ($('#sample2-tree') as any).treeview({
      data: this.tree(),
      collapseIcon: "fa fa-angle-down",
      expandIcon: "fa fa-angle-right",
      nodeIcon: "fa fa-folder",
      showBorder: false,
      onNodeSelected: (event: any, data: any) => this.updateTitle(event, data)
    });
  }

  private updateTitle(event: any, data: any): void {
    console.debug("Tree node selected", event, data);
    this.title = data.text;
    this.$scope.$apply();
  }

  private tree(): any {
    return [
      {
        text: 'Menu 1', href: '#menu1', tags: ['4'], nodes: [
          {
            text: 'Submenu 1', href: '#sub1', tags: ['2'], nodes: [
              { text: 'Item 1', href: '#item1', icon: 'fa fa-file-o', tags: ['0'] },
              { text: 'Item 2', href: '#item2', icon: 'fa fa-file-o', tags: ['0'] }
            ]
          },
          { text: 'Submenu 2', href: '#sub2', icon: 'fa fa-file-o', tags: ['0'] }
        ]
      },
      { text: 'Menu 2', href: '#menu2', tags: ['0'] },
      { text: 'Menu 3', href: '#menu3', tags: ['0'] }
    ];
  }

  doSuccess(name: string): void {
    console.log("Clicked", name);
    this.name = name;
    this.success = true;
    this.warning = false;
    this.danger = false;
  }

  doWarning(name: string): void {
    console.warn("Clicked", name);
    this.name = name;
    this.success = false;
    this.warning = true;
    this.danger = false;
  }

  doDanger(name: string): void {
    console.error("Clicked", name);
    this.name = name;
    this.success = false;
    this.warning = false;
    this.danger = true;
  }

}
