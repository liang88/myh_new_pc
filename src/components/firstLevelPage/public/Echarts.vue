<template>
  <div id="echarts">
  	<p class="echarts-p">8月均价： <span>128800元/m2</span></p>
  	<p class="echarts-p">环比7月： <span>128800元/m2</span></p>
  	<p class="echarts-p">同比去年同期： <span>128800元/m2</span></p>
		<div id="myEcharts" :style="{width: '280px', height: '240px'}" style="background: -webkit-linear-gradient(#bae65e, #62a82f);"></div>
		<p class="echarts-p1">数据来源：网络</p>
  </div>
</template>
<script type="text/javascript">
// 引入echarts
import echarts from 'echarts'
export default {
  name: 'echarts',
  components: {
  },
  data () {
    return {

		}
  },
  mounted(){
  	this.drawLine();
  },
  methods: {
  	drawLine () {
// 获取到这个DOM节点，然后初始化

    let myChart = echarts.init(document.getElementById("myEcharts"));

    // option 里面的内容基本涵盖你要画的图表的所有内容
    let option = {
    	title: {
    	     text:'城市当月成交数据',
    	     x: 'center',
    	     y: '200px',
    	     textStyle:{
    	        //文字颜色
    	        color:'#fff',
    	        //字体风格,'normal','italic','oblique'
    	        // fontStyle:'normal',
    	        //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
    	        // fontWeight:'bold',
    	        //字体系列
    	        fontFamily:'sans-serif',
    	        //字体大小
    	　　　　 fontSize:16,
    	    }
    	},
        // 定义样式和数据
        backgroundColor: 'transparent',
        tooltip: {
            trigger: 'axis'
        },
        grid: {
        	left: '10px',
        	right: '20px',
        	containLabel:true
        },
        legend: {
            data: ['当月二手房成交总量', '当月新房成交总量']
        },

        calculable: true,


        xAxis: [{
            axisLabel: {
                interval: 0
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            type: 'category',
            boundaryGap: false,
            data: function() {
                var list = [];
                for (var i = 1; i <= 6; i++) {
                    list.push(i+ '月')
                }
                return list;
            }()
        }],
        yAxis: [{
            splitLine: {
                show: true,
                lineStyle:{
                    color: ['#fff'],
                    width: 0.4,
                    type: 'solid'
                }
            },
            type: 'value',
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff'
                }
            }
        }],
        series: [{
            name: '当月二手房成交总量',
            type: 'line',
            symbol:'circle',//拐点样式
            symbolSize: 8,//拐点大小
            color: ['#ff5400'],
            itemStyle : {
                normal : {
                    lineStyle: {
                        width: 2,//折线宽度
                        color: "#ff5400",//折线颜色
                        shadowColor: '#9d602e',
                        shadowBlur: 8,
                        shadowOffsetX: 0,
                        shadowOffsetY: 8,
                    }
                }
            },
            data: [82, 50, 100, 80, 20, 60]
        }, {
            name: '当月新房成交总量',
            type: 'line',
            symbol:'circle',//拐点样式
            symbolSize: 8,//拐点大小
            color: ['#fff600'],
            itemStyle : {
                normal : {
                    lineStyle: {
                        width: 2,//折线宽度
                        color: "#fff600",//折线颜色
                        shadowColor: '#566837',
                        shadowBlur: 8,
                        shadowOffsetX: 0,
                        shadowOffsetY: 8,
                    }
                }
            },
            data: [60, 30, 42, 20, 30, 30]
        }]
    };
    myChart.setOption(option);
  	}
  },
}
</script>
<style scoped>
	canvas{
		left: 10px;
	}
</style>
<style type="text/css" media="screen">

</style>