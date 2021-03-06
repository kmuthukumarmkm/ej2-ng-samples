import { Component, ViewEncapsulation } from '@angular/core';
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { MultiSelectComponent, DropDownListComponent } from '@syncfusion/ej2-ng-dropdowns';

@Component({
    selector: 'control-content',
    templateUrl: 'databinding.html',
    styleUrls: ['style.css'],
    encapsulation: ViewEncapsulation.None
})
export class DataBindingMultiSelectComponent {
    // define the JSON of data
    public countries: { [key: string]: Object; }[] = [
    { Name: 'Australia', Code: 'AU' },
        { Name: 'Bermuda', Code: 'BM' },
        { Name: 'Canada', Code: 'CA' },
        { Name: 'Cameroon', Code: 'CM' },
        { Name: 'Denmark', Code: 'DK' },
        { Name: 'France', Code: 'FR' },
        { Name: 'Finland', Code: 'FI' },
        { Name: 'Germany', Code: 'DE' },
        { Name: 'Greenland', Code: 'GL' },
        { Name: 'Hong Kong', Code: 'HK' },
        { Name: 'India', Code: 'IN' },
        { Name: 'Italy', Code: 'IT' },
        { Name: 'Japan', Code: 'JP' },
        { Name: 'Mexico', Code: 'MX' },
        { Name: 'Norway', Code: 'NO' },
        { Name: 'Poland', Code: 'PL' },
        { Name: 'Switzerland', Code: 'CH' },
        { Name: 'United Kingdom', Code: 'GB' },
        { Name: 'United States', Code: 'US' }
    ];
    // maps the local data column to fields property
    public localFields: Object = { text: 'Name', value: 'Code' };
    // set the placeholder to MultiSelect input element
    public localWaterMark: string = 'Select countries';
    // bind the DataManager instance to dataSource property
    public data: DataManager = new DataManager({
        url: 'http://services.odata.org/V4/Northwind/Northwind.svc/Customers',
        adaptor: new ODataV4Adaptor,
        crossDomain: true
    });
    // bind the Query instance to query property
    public query: Query = new Query().select(['ContactName', 'CustomerID']);
    // maps the remote data column to fields property
    public remoteFields: Object = { text: 'ContactName', value: 'CustomerID' };
    // set the placeholder to MultiSelect input element
    public remoteWaterMark: string = 'Select customers';
}
