import { NgModule, Type, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { GridAllModule } from '@syncfusion/ej2-ng-grids';
import { NumericTextBoxAllModule } from '@syncfusion/ej2-ng-inputs';
import { ToolbarModule } from '@syncfusion/ej2-ng-navigations';
import { DefaultComponent } from './default.component';
import { DataBindingComponent } from './remotedata.component';
import { LocalDataComponent } from './localdata.component';
import { ShowHideComponent } from './column/showhide.component';
import { StackedHeaderComponent } from './column/stackedheader.component';
import { AutoWrapComponent } from './column/autowrap.component';
import { ReorderComponent } from './column/reorder.component';
import { SortComponent } from './sorting.component';
import { PageComponent } from './paging.component';
import { FilterComponent } from './filtering.component';
import { FilteringMenuComponent } from './filtermenu.component';
import { SelectionComponent } from './selection.component';
import { SelectionApiComponent } from './selectionapi.component';
import { GroupComponent } from './grouping.component';
import { MasterComponent, DetailComponent } from './masterdetail.component';
import { SearchComponent } from './searching.component';
import { ScrollComponent } from './scrolling.component';
import { GridLinesComponent } from './gridlines.component';
import { DragAndDropComponent } from './draganddrop.component';
import { AggregateComponent } from './aggregatedefault.component';
import { AggregateGroupComponent } from './aggregategroup.component';
import { ColumnTemplateComponent } from './columntemplate.component';
import { RowTemplateComponent } from './rowtemplate.component';
import { DetailTemplateComponent } from './detailtemplate.component';
import { HierarchyComponent } from './hierarchy.component';
import { VirtualizationComponent } from './virtualization.component';
import { NormalEditComponent } from './normal-edit.component';
import { DialogEditComponent } from './dialog-editing.component';
import { BatchEditComponent } from './batch-editing.component';
import { SharedModule } from '../common/shared.module';
import { ColumnChooserComponent } from './column/columnchooser.component';
import { ColumnResizingComponent } from './column/columnresizing.component';
import { ExportingComponent } from './default-exporting.component';
import { AdvancedExportingComponent } from './advanced-exporting.component';
import { CheckboxSelectionComponent } from './checkboxselection.component';
import { CommandColumnComponent } from './command-column.component';
import { ClipboardComponent } from './clipboard.component';
import { ContextMenuComponent } from './contextmenu.component';
import { ColumnMenuComponent } from './column/columnmenu.component';
import { ColumnSpanningComponent } from './column/columnspanning.component';
import { FrozenRowsComponent } from './column/frozenrows.component';

export const gridRouteConfig: Object[] = [
     { 'path': ':theme/grid/default', component: DefaultComponent, 'name': 'Default Functionalities', order: '01', category: 'Grid' },
    { 'path': ':theme/grid/gridlines', component: GridLinesComponent, 'name': 'Grid Lines', order: '01', category: 'Grid' },
    { 'path': ':theme/grid/paging', component: PageComponent, name: 'Paging', order: '01', category: 'Grid' },
    { 'path': ':theme/grid/filtering', component: FilterComponent, name: 'Filtering',  order: '05', category: 'Filtering' },
	{ 'path': ':theme/grid/filtermenu', component: FilteringMenuComponent, name: 'Filter Menu', order: '05', category: 'Filtering' },
    { 'path': ':theme/grid/grouping', component: GroupComponent, name: 'Grouping', order: '01', category: 'Grid' },
    { 'path': ':theme/grid/sorting', component: SortComponent, name: 'Sorting', order: '01', category: 'Grid' },
    { 'path': ':theme/grid/searching', component: SearchComponent, name: 'Searching', order: '05', category: 'Filtering' },
    { 'path': ':theme/grid/masterdetail', component: MasterComponent, name: 'Master/Detail', order: '01', category: 'Grid' },
    {
        'path': ':theme/grid/draganddrop', component: DragAndDropComponent, name: 'Row Drag And Drop', order: '01', category: 'Grid',
        hideOnDevice: true
    },
    { 'path': ':theme/grid/localdata', component: LocalDataComponent, 'name': 'Local Binding', order: '02', category: 'Data Binding' },
    { 'path': ':theme/grid/remotedata', component: DataBindingComponent, 'name': 'Remote Binding', order: '02', category: 'Data Binding' },
    { 'path': ':theme/grid/column/showhide', component: ShowHideComponent, 'name': 'Show Hide Column', order: '03', category: 'Column' },
    { 'path': ':theme/grid/column/stackedheader', component: StackedHeaderComponent, name: 'Stacked Header', order: '03', category: 'Column' },
    { 'path': ':theme/grid/column/autowrap', component: AutoWrapComponent, name: 'AutoWrap Column cells', order: '03', category: 'Column' },
    { 'path': ':theme/grid/column/reorder', component: ReorderComponent, name: 'Reorder Columns', order: '03', category: 'Column' },
    { 'path': ':theme/grid/column/columnchooser', component: ColumnChooserComponent, name: 'Column Chooser', order: '03', category: 'Column' },
    { 'path': ':theme/grid/column/columnresizing', component: ColumnResizingComponent, name: 'Column Resizing', order: '03', category: 'Column' },
    { 'path': ':theme/grid/selection', component: SelectionComponent, name: 'Default Selection', order: '04', category: 'Selection' },
    { 'path': ':theme/grid/selectionapi', component: SelectionApiComponent, name: 'Selection API', order: '04', category: 'Selection' },
    { 'path': ':theme/grid/checkboxselection', component: CheckboxSelectionComponent, name: 'Checkbox Selection', order: '04', category: 'Selection'},
    {
        'path': ':theme/grid/aggregatedefault', component: AggregateComponent, name: 'Default Aggregate', order: '06', category: 'Aggregate'
    },
    {
        'path': ':theme/grid/aggregategroup', component: AggregateGroupComponent,
        name: 'Group and Caption aggregate', order: '06', category: 'Aggregate'
    },
    {
        'path': ':theme/grid/columntemplate', component: ColumnTemplateComponent, name: 'Column Template', order: '03',
        category: 'Column'
    },
    { 'path': ':theme/grid/rowtemplate', component: RowTemplateComponent, name: 'Row Template', order: '01', category: 'Grid' },
    {
        'path': ':theme/grid/detailtemplate', component: DetailTemplateComponent, name: 'Detail Template', order: '01',
        category: 'Grid'
    },
    { 'path': ':theme/grid/hierarchy', component: HierarchyComponent, name: 'Hierarchy Grid', order: '01', category: 'Grid' },
    { 'path': ':theme/grid/scrolling', component: ScrollComponent, name: 'Default Scrolling', order: '07', category: 'Scrolling' },
    {
        'path': ':theme/grid/virtualization', component: VirtualizationComponent, name: 'Virtual Scrolling', order: '07',
        category: 'Scrolling'
    },
    {
        'path': ':theme/grid/normal-edit', component: NormalEditComponent, name: 'Inline Editing', order: '08',
        category: 'Editing'
    },
    {
        'path': ':theme/grid/dialog-editing', component: DialogEditComponent, name: 'Dialog Editing', order: '08',
        category: 'Editing'
    },
    {
        'path': ':theme/grid/batch-editing', component: BatchEditComponent, name: 'Batch Editing', order: '08',
        category: 'Editing'
    },
    {
        'path': ':theme/grid/command-column', component: CommandColumnComponent, name: 'Command Column', order: '08',
        category: 'Editing'
    },
    {
        'path': ':theme/grid/default-exporting', component: ExportingComponent, name: 'Default Exporting', order: '09',
        category: 'Exporting'
    },
    {        
        'path': ':theme/grid/advanced-exporting', component: AdvancedExportingComponent, name: 'Advanced Exporting', order: '09',
        category: 'Exporting'
    },
    { 'path': ':theme/grid/clipboard', component: ClipboardComponent, name: 'Clipboard', order: '01', category: 'Grid' },
    {
        'path': ':theme/grid/column/columnspanning', component: ColumnSpanningComponent, name: 'Column Spanning', order: '03',
        category: 'Column', type: 'new'
    },
    {
        'path': ':theme/grid/column/frozenrows', component: FrozenRowsComponent, name: 'Frozen Rows and Columns', order: '03',
        category: 'Column', type: 'new'
    },
    {
        'path': ':theme/grid/column/columnmenu', component: ColumnMenuComponent, name: 'Column Menu', order: '03',
        category: 'Column', type: 'new'
    },
    {
        'path': ':theme/grid/contextmenu', component: ContextMenuComponent, name: 'Context Menu', order: '01',
        category: 'Grid', type: 'new'
    }

];

let declarations: Type<Object>[] = [DefaultComponent, GridLinesComponent,
    LocalDataComponent, DataBindingComponent, ShowHideComponent, MasterComponent, DetailComponent, ReorderComponent,
    GroupComponent, StackedHeaderComponent, AutoWrapComponent, SortComponent, PageComponent, FilterComponent, SelectionComponent,
    ScrollComponent, SearchComponent, SelectionApiComponent, DragAndDropComponent, AggregateComponent, AggregateGroupComponent,
    RowTemplateComponent, ColumnTemplateComponent, DetailTemplateComponent, HierarchyComponent, VirtualizationComponent,
    NormalEditComponent, DialogEditComponent, ColumnChooserComponent, BatchEditComponent, ColumnResizingComponent,
    ExportingComponent, AdvancedExportingComponent, CheckboxSelectionComponent, ClipboardComponent, CommandColumnComponent,
    FilteringMenuComponent, ColumnSpanningComponent, ContextMenuComponent, ColumnMenuComponent, FrozenRowsComponent];

@NgModule({
    imports: [RouterModule.forChild(gridRouteConfig), CommonModule, HttpModule, ToolbarModule, GridAllModule, SharedModule, NumericTextBoxAllModule],
    declarations: declarations,
    providers: [GridAllModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridSampleModule { }
