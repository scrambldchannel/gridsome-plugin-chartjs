// eslint-disable-next-line import/no-unassigned-import
// imports can go here

// Import chart components

//import { Radar, mixins } from 'vue-chartjs';
import Bar from './components/bar.js';
import Line from './components/line.js';
import Radar from './components/radar.js';
import Pie from './components/pie.js';
import Doughnut from './components/doughnut.js';
import PolarArea from './components/polarArea.js';
import Bubble from './components/bubble.js';
import Scatter from './components/scatter.js'

import GChartJS from './components/g-chartjs.js';


export default function (Vue, options, context) {

    Vue.component("RadarChart", Radar)
    Vue.component("BarChart", Bar)
    Vue.component("LineChart", Line)
    Vue.component("RadarChart", Radar)
    Vue.component("PieChart", Pie)
    Vue.component("DoughnutChart", Doughnut)
    Vue.component("PolarAreaChart", PolarArea)
    Vue.component("BubbleChart", Bubble)
    Vue.component("ScatterChart", Scatter)
    
    Vue.component("GChartjs", GChartJS)
}   
