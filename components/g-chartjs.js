import { Bar, Line, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {

  mixins: [reactiveProp],
  props: {
    type: {
      type: String,
      default: null
    },
    chartData: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    },
  },
  mounted() {

    console.log(this.getChartType())
    this.renderChart(this.chartData, this.options);
  },
  methods: {
    getChartType() {
      switch (this.type) {
        case "bar":
          return Bar;
          break;
        case "line":
          return Line;
          break;
        default:
          return Bar;

      }

    }
  },
  extends: Bar,



};