import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { CircularGaugeComponent } from '@syncfusion/ej2-ng-circulargauge';
import { DropDownList } from '@syncfusion/ej2-dropdowns';

/**
 * Sample for Ranges
 */
@Component({
    selector: 'control-content',
    templateUrl: 'range.html',
    encapsulation: ViewEncapsulation.None
})
export class RangeComponent {

    @ViewChild('range')
    public circulargauge: CircularGaugeComponent;

    public lineStyle: Object = {
        width: 10, color: 'transparent'
    };
    //Initializing LabelStyle
    public labelStyle: Object = {
        position: 'Inside', useRangeColor: false,
        font: { size: '12px', color: '#424242', fontFamily: 'Roboto', fontStyle: 'Regular' }
    };
    public majorTicks: Object = {
        height: 10, offset: 5, color: '#9E9E9E'
    };
    public minorTicks: Object = {
        height: 0
    };
    public tail: Object = {
        length: '18%'
    };
    public pointerCap: Object = {
        radius: 7, color: '#757575'
    };

    public annotaions: Object = [{
        content: '<div><span style="font-size:14px; color:#9E9E9E; font-family:Regular">Speedometer</span></div>',
        radius: '30%', angle: 0, zIndex:'1'
    }, {
        content: '<div><span style="font-size:24px; color:#424242; font-family:Regular">65 MPH</span></div>',
        radius: '40%', angle: 180, zIndex:'1'
    }];

    public colortObj: DropDownList;
    public listObj: DropDownList;

    ngOnInit(): void {
        this.listObj = new DropDownList({
            index: 0, width: 100,
            change: () => {
                let index: number = +this.listObj.value;
                this.colortObj.value = this.circulargauge.axes[0].ranges[index].color;
                (<HTMLInputElement>document.getElementById('endWidth')).value = this.circulargauge.axes[0].ranges[index].endWidth.toString();
                document.getElementById('rangeEndWidth').innerHTML = 'End Width <span> &nbsp;&nbsp;&nbsp;' +
                    this.circulargauge.axes[0].ranges[index].endWidth;
                (<HTMLInputElement>document.getElementById('startWidth')).value = this.circulargauge.axes[0].ranges[index].startWidth.toString();
                document.getElementById('rangeStartWidth').innerHTML = 'Start Width <span> &nbsp;&nbsp;&nbsp;' +
                    this.circulargauge.axes[0].ranges[index].startWidth;
                (<HTMLInputElement>document.getElementById('end')).value = this.circulargauge.axes[0].ranges[index].end.toString();
                document.getElementById('rangeEnd').innerHTML = 'Range End <span> &nbsp;&nbsp;&nbsp;' +
                    this.circulargauge.axes[0].ranges[index].end;
                (<HTMLInputElement>document.getElementById('start')).value = this.circulargauge.axes[0].ranges[index].start.toString();
                document.getElementById('rangeStart').innerHTML = 'Range Start <span> &nbsp;&nbsp;&nbsp;' +
                    this.circulargauge.axes[0].ranges[index].start;
            }
        });
        this.listObj.appendTo('#rangeSelect');

        this.colortObj = new DropDownList({
            index: 0, width: 100,
            change: () => {
                this.circulargauge.axes[0].ranges[+this.listObj.value].color = this.colortObj.value.toString();
                this.circulargauge.axes[0].pointers[0].animation.enable = false; this.circulargauge.refresh();
            }
        });
        this.colortObj.appendTo('#rangeColor');
    }

    ngAfterViewInit(): void {
        document.getElementById('start').onpointermove = document.getElementById('start').ontouchmove =
            document.getElementById('start').onchange = () => {
                let index: number = +this.listObj.value;
                let min: number = parseInt((<HTMLInputElement>document.getElementById('start')).value, 10);
                document.getElementById('rangeStart').innerHTML = 'Range Start <span> &nbsp;&nbsp;&nbsp;' + min;
                this.circulargauge.axes[0].ranges[index].start = min;
                this.circulargauge.axes[0].pointers[0].animation.enable = false; this.circulargauge.refresh();
            };

        document.getElementById('end').onpointermove = document.getElementById('end').ontouchmove =
            document.getElementById('end').onchange = () => {
                let index: number = +this.listObj.value;
                let max: number = parseInt((<HTMLInputElement>document.getElementById('end')).value, 10);
                document.getElementById('rangeEnd').innerHTML = 'Range End <span> &nbsp;&nbsp;&nbsp;' + max;
                this.circulargauge.axes[0].ranges[index].end = max;
                this.circulargauge.axes[0].pointers[0].animation.enable = false; this.circulargauge.refresh();
            };

        document.getElementById('startWidth').onpointermove = document.getElementById('startWidth').ontouchmove =
            document.getElementById('startWidth').onchange = () => {
                let index: number = +this.listObj.value;
                let startWidth: number = parseInt((<HTMLInputElement>document.getElementById('startWidth')).value, 10);
                document.getElementById('rangeStartWidth').innerHTML = 'Start Width <span> &nbsp;&nbsp;&nbsp;' + startWidth;
                this.circulargauge.axes[0].ranges[index].startWidth = startWidth;
                this.circulargauge.axes[0].pointers[0].animation.enable = false; this.circulargauge.refresh();
            };

        document.getElementById('endWidth').onpointermove = document.getElementById('endWidth').ontouchmove =
            document.getElementById('endWidth').onchange = () => {
                let index: number = +this.listObj.value;
                let endWidth: number = parseInt((<HTMLInputElement>document.getElementById('endWidth')).value, 10);
                document.getElementById('rangeEndWidth').innerHTML = 'End Width <span> &nbsp;&nbsp;&nbsp;' + endWidth;
                this.circulargauge.axes[0].ranges[index].endWidth = endWidth;
                this.circulargauge.axes[0].pointers[0].animation.enable = false; this.circulargauge.refresh();
            };

        document.getElementById('enable').onchange = () => {
            let useRangeColor: boolean = (<HTMLInputElement>document.getElementById('enable')).checked;
            this.circulargauge.axes[0].labelStyle.useRangeColor = useRangeColor;
            this.circulargauge.axes[0].majorTicks.useRangeColor = useRangeColor;
            this.circulargauge.axes[0].minorTicks.useRangeColor = useRangeColor;
            this.circulargauge.axes[0].pointers[0].animation.enable = false; this.circulargauge.refresh();
        };
    }
    constructor() {
        //
    };
}