// eslint-disable-next-line import/no-unassigned-import
// imports can go here

// Import chart components

//import { Radar, mixins } from 'vue-chartjs';
import Bar from '../gridsome-plugin-chartjs/components/Bar.js';
import Line from '../gridsome-plugin-chartjs/components/Line.js';
import Radar from '../gridsome-plugin-chartjs/components/Radar.js';
import Pie from '../gridsome-plugin-chartjs/components/Pie.js';
import Doughnut from '../gridsome-plugin-chartjs/components/Doughnut.js';
import PolarArea from '../gridsome-plugin-chartjs/components/PolarArea.js';
import Bubble from '../gridsome-plugin-chartjs/components/Bubble.js';
import Scatter from '../gridsome-plugin-chartjs/components/Scatter.js'
export default function (Vue, options, context) {

    //  Vue.component("RadarChart", Radar)
    Vue.component("BarChart", Bar)
    Vue.component("LineChart", Line)
    Vue.component("RadarChart", Radar)
    Vue.component("PieChart", Pie)
    Vue.component("DoughnutChart", Doughnut)
    Vue.component("PolarAreaChart", PolarArea)
    Vue.component("BubbleChart", Bubble)
    Vue.component("ScatterChart", Scatter)
    
}   
