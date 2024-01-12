interface TimelineChartOptions
{
    // ...
}

interface TimelineChartPoint
{
    timestamp: number;
    value: number;   
}

interface TimelineChartDataset
{
    label: string;
    data: TimelineChartPoint[];
}

class TimelineChart
{
    private _chartOptions: TimelineChartOptions;

    constructor(chartOptions: TimelineChartOptions)
    {
        this._chartOptions = chartOptions;
    }

    public render(element: HTMLElement, datasets: TimelineChartDataset[]){
        
    }


}