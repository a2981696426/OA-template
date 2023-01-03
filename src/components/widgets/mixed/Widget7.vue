<template>
  <!--begin::Mixed Widget 7-->
  <div :class="widgetClasses" class="card">
    <!--begin::Body-->
    <div class="card-body d-flex flex-column p-0">
      <!--begin::Stats-->
      <div class="flex-grow-1 card-p pb-0">
        <div class="d-flex flex-stack flex-wrap">
          <div class="me-2">
            <a href="#" class="text-dark text-hover-primary fw-bolder fs-3"
            >项目进度</a>

            <div class="text-muted fs-7 fw-bold">
              Finance and accounting reports
            </div>
          </div>

          <div :class="`text-${chartColor}`" class="fw-bolder fs-3">
            24,500
          </div>
        </div>
      </div>
      <!--end::Stats-->

      <!--begin::Chart-->
      <apexchart
          class="mixed-widget-7-chart card-rounded-bottom"
          :options="chartOptions"
          :series="series"
          type="area"
          :height="chartHeight"
      ></apexchart>
      <!--end::Chart-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Mixed Widget 7-->
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {getCSSVariableValue} from "@/assets/ts/_utils";
import moment from "moment";

export default defineComponent({
  name: "widget-7",
  props: {
    widgetClasses: String,
    chartColor: String,
    chartHeight: String,
  },
  setup(props) {
    const color = ref(props.chartColor);

    const labelColor = getCSSVariableValue("--bs-" + "gray-800");
    const strokeColor = getCSSVariableValue("--bs-" + "gray-300");
    const baseColor = getCSSVariableValue("--bs-" + color.value);
    const lightColor = getCSSVariableValue("--bs-light-" + color.value);

    const chartOptions = {
      chart: {
        type: 'area',
        stacked: false,
        height: 350,
        zoom: {
          enabled: false
        },
      },
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 0,
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: '#8e8da4',
          },
          offsetX: 0,
          formatter: function (val) {
            return (val / 250 * 100).toFixed(2);
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false
        }
      },
      xaxis: {
        type: 'datetime',
        tickAmount: 8,
        min: new Date("01/01/2023").getTime(),
        max: new Date("01/20/2023").getTime(),
        labels: {
          rotate: -15,
          rotateAlways: true,
          formatter: function (val, timestamp) {
            return moment(new Date(timestamp)).format("YYYY-MM-DD")
          }
        }
      },
      title: {
        text: 'Irregular Data in Time Series',
        align: 'left',
        offsetX: 14
      },
      tooltip: {
        shared: true
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        offsetX: -10
      }
    };

    const series = [{
      name: '项目 A',
      data: [{
        x: 'Jan 3 2023',
        y: 60
      }, {
        x: 'Jan 4 2023',
        y: 60
      }, {
        x: 'Jan 5 2023',
        y: 60
      }, {
        x: 'Jan 6 2023',
        y: 60
      }, {
        x: 'Jan 7 2023',
        y: 60
      }, {
        x: 'Jan 8 2023',
        y: 60
      }, {
        x: 'Jan 9 2023',
        y: 60
      }, {
        x: 'Jan 10 2023',
        y: 60
      }, {
        x: 'Jan 11 2023',
        y: 60
      }, {
        x: 'Jan 12 2023',
        y: 60
      }, {
        x: 'Jan 13 2023',
        y: 60
      }, {
        x: 'Jan 14 2023',
        y: 60
      }, {
        x: 'Jan 15 2023',
        y: 60
      }, {
        x: 'Jan 16 2023',
        y: 60
      }, {
        x: 'Jan 17 2023',
        y: 60
      }, {
        x: 'Jan 18 2023',
        y: 60
      }, {
        x: 'Jan 19 2023',
        y: 60
      }, {
        x: 'Jan 20 2023',
        y: 60
      }, ]
    }, {
      name: '项目 B',
      data: []
    }, {
      name: '项目 C',
      data: []
    }];

    return {
      chartOptions,
      series,
    };
  },
});
</script>
