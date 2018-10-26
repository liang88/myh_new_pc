<template>
  <div id="maps">
    <div id="container"></div>
    <div id="result">
      <div class="result-top">
        <p v-for="(item,index) in mapData" @click="clkMapData (index)" :class="{addClassMap:index === cour}" >{{item.text}}</p>
      </div>
      <div class="result-bottom" id="result-bottom">
        <p class="result-b-p clear" v-for="(item,index) in mapDataTwo" @click="clkMapDataTwo (index)" :class="{addClassMapTwo:index === courTwo}">
          <span class="span1" :class="{addClassSpan:index === courTwo}">{{item.text}}</span>
          <span>{{item.maps}}米</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'maps',
  components: {

  },
  props: {

  },
  computed: {

  },
  data () {
    return {
      cour: 0,
      mapData: [
        {
          text: '公交',
          textdata: '公交',
        },
        {
          text: '地铁',
          textdata: '地铁',
        },
        {
          text: '商圈',
          textdata: '行政区',
        },
        {
          text: '学校',
          textdata: '学校',
        },
        {
          text: '医院',
          textdata: '医院',
        },
      ],
      mapText: '公交',
      courTwo: -1,
      mapDataTwo: [
        {
          text: '88路公交站',
          maps: '560',
        },
        {
          text: '88路公交站',
          maps: '560',
        },
        {
          text: '88路公交站',
          maps: '560',
        },
        {
          text: '88路公交站',
          maps: '560',
        },
        {
          text: '88路公交站',
          maps: '560',
        },
        {
          text: '88路公交站',
          maps: '560',
        },
        {
          text: '88路公交站',
          maps: '560',
        },
        {
          text: '88路公交站',
          maps: '560',
        },
        {
          text: '88路公交站',
          maps: '560',
        },
      ],
      names: '顺义义宾南区',
		}
  },
  mounted(){
    this.maps ()
  },
  methods: {
    clkMapData (index) {
      this.cour = index
      this.mapText = this.mapData[index].textdata
      console.log(this.mapText)
      this.maps()
    },
    clkMapDataTwo (index) {
      this.courTwo = index
    },
    maps () {
      var that = this
      var map = new AMap.Map("container", {
        zoom: 13,
        resizeEnable: true
      });
      //地理编码实现方法
      AMap.plugin('AMap.Geocoder', function () {//回调函数
        //实例化Geocoder
        var geocoder = new AMap.Geocoder({
            //city: "010"//城市，默认：“全国”
        });
        //地理编码
        geocoder.getLocation(that.names, function (status, result) {
          //判断查询结果
          if (status === 'complete' && result.info === 'OK') {
          //添加自己的业务逻辑
            if (result.resultNum == "1") {
                //location为得到的坐标信息
                var lng = result.geocodes[0].location.lng.toString()
                var lat = result.geocodes[0].location.lat.toString()
                that.mapsTwo (map,lng,lat)
                that.marker (map,lng,lat)
              }
          } else {
            //获取经纬度失败
            console.log('location获取失败')
          }
        });
      })
    },
    marker (map,lng,lat) {
      // 创建一个 Icon
      var startIcon = new AMap.Icon({
        // 图标尺寸
        size: new AMap.Size(22, 22),
        // 图标的取图地址
        image: './static/images/firstLevelPage/secondLevelPage/mapicon.png',
        // 图标所用图片大小
        imageSize: new AMap.Size(22, 22),
      });
      // 将 icon 传入 marker
      var startMarker = new AMap.Marker({
        position: [lng,lat].map(Number),
        icon: startIcon,
      });
      // 将 markers 添加到地图
      map.add([startMarker]);

      //创建信息窗体
      var infoWindow = new AMap.InfoWindow({
        isCustom:true,
        content:'<div style="padding:10px 20px;background:#62a82f;color:#fff;font-size:14px;border-radius:2px;">'+this.names+'</div>',//信息窗体的内容
        offset:new AMap.Pixel(20, -35), //偏移量
      });
      infoWindow.open(map,startMarker.getPosition());
    },
    mapsTwo (map,lng,lat) {
      var that = this
      AMap.service(["AMap.PlaceSearch"], function() {
          //构造地点查询类
          var placeSearch = new AMap.PlaceSearch({
              type: that.mapText, // 兴趣点类别
              pageSize: 50, // 单页显示结果条数
              pageIndex: 1, // 页码
              // city: "010", // 兴趣点城市
              // citylimit: true,  //是否强制限制在设置的城市内搜索
              map: map, // 展现结果的地图实例
              panel: "result-bottom", // 结果列表将在此容器中进行展示。
              autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
          });
          var cpoint = [lng,lat].map(Number) //中心点坐标
          console.log(cpoint)
          placeSearch.searchNearBy('', cpoint, 1000, function(status, result) {
            console.log(result)
            // result.poiList.pois.forEach(function(element,index){   //<strong>ES6写法</strong>
            //   console.log(element.address)
            //   console.log(index)
            // })
            var page = document.getElementsByClassName('amap_lib_placeSearch_page')[0]
            page.style.display = 'none'
            var scrollTop = document.getElementById('result-bottom')
            scrollTop.scrollTop = 0
          });
      });
    }
  },
  watch: {

  },
}
</script>
<style scoped>
  #maps{
    width: 100%;
    height: 100%;
    position: relative;
  }
  #maps #container {
    width: 100%;
    height: 100%;
  }
  #maps #result{
    width: 360px;
    height: 500px;
    background: #fff;
    position: absolute;
    right: 20px;
    top: 20px;
    box-shadow: 10px 10px 30px #b7b7b7;
  }
  #maps #result .result-top{
    width: 100%;
    height: 76px;
    background: #f5f5f5;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    -webkit-justify-content: space-around;
    justify-content: space-around;
  }
  #maps #result .result-top p{
    font-size: 18px;
    color: #808080;
    line-height: 76px;
    cursor: pointer;
  }
  #maps #result .result-top .addClassMap{
    color: #62a82f;
    font-size: 18px;
    font-weight: 600;
    position: relative;
  }
  #maps #result .result-top .addClassMap:after{
    content: "";
    width: 30px;
    height: 3px;
    background: #62a82f;
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%)
  }
  #maps #result .result-bottom{
    width: 100%;
    height: 424px;
    overflow-x: hidden;
  }
  #maps #result .result-bottom::-webkit-scrollbar {/*滚动条整体样式*/
      width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
      height: 4px;
      cursor: pointer;
  }
  #maps #result .result-bottom::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
      border-radius: 5px;
      -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
      background: rgba(0,0,0,0.2);
  }
  #maps #result .result-bottom::-webkit-scrollbar-track {/*滚动条里面轨道*/
      -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
      border-radius: 0;
      background: rgba(0,0,0,0.1);
  }
  #maps #result .result-bottom .result-b-p{
    height: 66px;
    line-height: 66px;
    padding: 0 30px 0 20px;
    cursor: pointer;
    border-bottom: 1px solid #ededed;
  }
  #maps #result .result-bottom .result-b-p:hover{
    background: #f5f5f5;
    color: #62a82f;
    transition: all 0.5s ease;
  }
  #maps #result .result-bottom .addClassMapTwo{
    background: #f5f5f5;
    color: #62a82f;
  }
  #maps #result .result-bottom .result-b-p:hover span:nth-child(1){
    background: url('/static/images/firstLevelPage/secondLevelPage/a-gj2.png') no-repeat;
    background-position: 0px 22px;
  }
  #maps #result .result-bottom .result-b-p span{
    font-size: 14px;
  }
  #maps #result .result-bottom .result-b-p .span1{
    float: left;
    padding-left: 34px;
    background: url('/static/images/firstLevelPage/secondLevelPage/a-gj1.png') no-repeat;
    background-position: 0px 22px;
  }
  #maps #result .result-bottom .result-b-p .addClassSpan{
    background: url('/static/images/firstLevelPage/secondLevelPage/a-gj2.png') no-repeat;
    background-position: 0px 22px;
  }
  #maps #result .result-bottom .result-b-p span:nth-child(2){
    float: right;
  }
</style>