import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { CircularGaugeComponent } from '@syncfusion/ej2-ng-circulargauge';
import { IAxisLabelRenderEventArgs } from '@syncfusion/ej2-circulargauge';
import { DropDownList } from '@syncfusion/ej2-dropdowns';

/**
 * Sample for direction compass
 */

@Component({
    selector: 'control-content',
    templateUrl: 'direction.html',
    encapsulation: ViewEncapsulation.None
})

export class DirectionComponent {
    @ViewChild('direction')
    public circulargauge: CircularGaugeComponent;
   
    public lineStyle: Object = {
        width: 10, color: '#E0E0E0'
    };
    public onLabelRender(args: IAxisLabelRenderEventArgs): void {
        args.text = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW', ''][args.value];
    }
    //Initializing LabelStyle
    public labelStyle: Object = {
        font: {
            size: '12px', color: '#333333', fontFamily: 'Roboto'
        },
        useRangeColor: true,
        autoAngle: true,
        hiddenLabel: 'Last'
    };
    //Initializing majorTicks
    public majorTicks: Object = {
        height: 15,
        interval: 1,
        color: '#9E9E9E'
    };
    public minorTicks: Object = {
        height: 10,
        interval: 0.5,
        color: '#9E9E9E'
    };

    public ranges: Object[] = [{
        start: 7,
        end: 7,
        color: '#f03e3e'
    }];
    public pointers: Object[] = [{
        value: 7,
        radius: '50%',
        color: '#f03e3e',
        pointerWidth: 20,
        cap: {
            radius: 0
        },
        animation: { enable: false }
    }, {
        value: 3,
        radius: '50%',
        color: '#9E9E9E',
        pointerWidth: 20,
        cap: {
            radius: 0
        },
        animation: { enable: false }
    }];
    public pointerColor: DropDownList; public labelColor: DropDownList;
    ngOnInit(): void {
        this.pointerColor = new DropDownList({
            index: 0,
            placeholder: 'Select Range Bar Color',
            width: 100,
            change: () => {
                let rangeColor: string = this.pointerColor.value.toString();
                this.circulargauge.axes[0].pointers[0].color = rangeColor;
                this.circulargauge.refresh();
            }
        });
        this.pointerColor.appendTo('#poiterColor');
    
        this.labelColor = new DropDownList({
            index: 0,
            placeholder: 'Select Range Bar Color',
            width: 100,
            change: () => {
                let rangeColor: string = this.labelColor.value.toString();
                this.circulargauge.axes[0].ranges[0].color = rangeColor;
                this.circulargauge.refresh();
            }
        });
        this.labelColor.appendTo('#labelColor');
    }
    constructor() {
        // code
    };
}



