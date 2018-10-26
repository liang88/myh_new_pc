<template>
  <div id="housingloannumber">
    <div class="housingloannumber-left">
      <div class="housingloannumber-l-dan clear">
        <p class="housingloannumber-ld-p">房屋总价 ：</p>
        <div class="housingloannumber-ld-sec">
          <input type="text" name="">
          <div class="housingloannumber-lds-xiazi">万元</div>
        </div>
      </div>
      <div class="housingloannumber-l-dan clear">
        <p class="housingloannumber-ld-p">贷款类别 ：</p>
        <div class="housingloannumber-ld-sec">
          <select>
            <option value ="volvo">Volvo</option>
            <option value ="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <div class="housingloannumber-lds-xia"></div>
        </div>
      </div>
      <div class="housingloannumber-l-dan clear">
        <p class="housingloannumber-ld-p">首付成数 ：</p>
        <div class="housingloannumber-ld-sec">
          <select>
            <option value ="volvo">Volvo</option>
            <option value ="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <div class="housingloannumber-lds-xia"></div>
        </div>
      </div>
      <div class="housingloannumber-l-dan clear">
        <p class="housingloannumber-ld-p">贷款年数 ：</p>
        <div class="housingloannumber-ld-sec">
          <select>
            <option value ="volvo">Volvo</option>
            <option value ="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <div class="housingloannumber-lds-xia"></div>
        </div>
      </div>
      <div class="housingloannumber-l-submit" @click="subMit">
        开始计算
      </div>
    </div>
    <div class="housingloannumber-right">
      <div id="pic1"></div>
      <p class="housingloannumber-r-p" v-show="isShow">点击"开始计算"查看</p>
    </div>
  </div>
</template>
<script type="text/javascript">
// 引入echarts
import echarts from 'echarts'
export default {
  name: 'housingloannumber',
  components: {

  },
  props: {

  },
  computed: {

  },
  data () {
    return {
      shi: 60,
      isShow: true,
		}
  },
  mounted(){
    // this.myEcharts ()
  },
  methods: {
    subMit () {
      this.myEcharts ()
      this.isShow = false
    },
    myEcharts () {
      var myCharts1 = echarts.init(document.getElementById('pic1'));
      var option1 = {
          backgroundColor: 'white',

          title: {
              text: '数据仅供参考，具体税费详询经纪人',
              left: 'center',
              bottom: 20,
              textStyle: {
                  color: '#ccc',
                  fontWeight: '400',
                  fontSize: 16,
              }
          },
          tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {d}%"
          },

          // visualMap: {
          //     show: false,
          //     min: 0,
          //     max: 0,
          //     inRange: {
          //         colorLightness: [0, 1]
          //     }
          // },
          series : [
              {
                  name:'参考数据',
                  type:'pie',
                  clockwise:'true',
                  startAngle:'0',
                  radius : ['45%', '65%'],
                  center: ['50%', '50%'],
                  label: {
                    normal: {
                        // \n\n可让文字居于牵引线上方，很关键
                        //  {b}  代表显示的内容标题
                        // {c}代表数据
                        formatter: ' {b} \n\n',
                        borderWidth: 20,
                        borderRadius: 4,
                        fontSize: 18,
                        color: '#081a24',
                        padding: [0, -20],
                    }
                  },
                  data:[
                      {
                          value:500,
                          name:'贷款金额：'+this.shi+'万',
                          itemStyle:{
                              normal:{
                                  color:'#ed9028',
                              }
                          },
                          textStyle: {
                              color: '#ccc',
                              fontWeight: '400',
                              fongSize: '18px',
                          }
                      },
                      {
                          value:240,
                          name:'支付利息：'+this.shi+'万',
                          itemStyle:{
                              normal:{
                                  color:'#4b81dd'
                              }
                          }
                      },
                      {
                          value:280,
                          name:'参考首付：'+this.shi+'万',
                          itemStyle:{
                              normal:{
                                  color:'#8abd44'
                              }
                          }
                      }

                  ],
              }
          ]
      };
      myCharts1.setOption(option1);
    },
  },

}
</script>
<style scoped>
  #pic1{
    width:100%;
    height:400px;
  }
</style>