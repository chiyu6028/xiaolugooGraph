$(function () {
    //var shenzhen = "../json/shenzhen.json";

    var myChart = echarts.init(document.getElementById('map'));
    $.get(shenzhen, function(tjJson) {
        echarts.registerMap('shenzhen', tjJson);
        /*myChart.setOption({
            series: [{
                type: 'map',
                map: 'shenzhen'
            }]
        });*/

        var regionsStyleArray = [
            //亮蓝
            {
                normal: {
                    borderColor: 'rgba(255, 255, 255, 1)',
                    borderWidth: 1,
                    areaColor: 'rgba(2,72,255, .8)',
                    //shadowColor: 'rgba(255, 255, 255, 1)',
                    //shadowOffsetX: -2,
                    //shadowOffsetY: 2,
                    //shadowBlur: 10
                },
                emphasis: {
                    areaColor: 'rgba(254,230,24)',
                    //borderWidth: 0
                }
            },
            //天蓝
            {
                normal: {
                    borderColor: 'rgba(255, 255, 255, 1)',
                    borderWidth: 1,
                    areaColor: 'rgba(77,210,249, .8)',
                    //shadowColor: 'rgba(255, 255, 255, 1)',
                    /*shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 10*/
                },
                emphasis: {
                    areaColor: 'rgba(254,230,24)',
                    //borderWidth: 0
                }
            },
            //浅蓝
            {
                normal: {
                    borderColor: 'rgba(255, 255, 255, 1)',
                    borderWidth: 1,
                    areaColor: 'rgba(94,239,247, .8)',
                    //shadowColor: 'rgba(128, 217, 248, 1)',
                    //shadowColor: 'rgba(255, 255, 255, 1)',
                    /*shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 10*/
                },
                emphasis: {
                    areaColor: 'rgba(254,230,24)',
                    //borderWidth: 0
                }
            },
            //深蓝
            {
                normal: {
                    borderColor: 'rgba(255, 255, 255, 1)',
                    borderWidth: 1,
                    areaColor: 'rgba(46,47,88, .8)',
                    //shadowColor: 'rgba(128, 217, 248, 1)',
                    //shadowColor: 'rgba(255, 255, 255, 1)',
                    //shadowOffsetX: -2,
                    //shadowOffsetY: 2,
                    //shadowBlur: 10
                },
                emphasis: {
                    areaColor: 'rgba(254,230,24)',
                    //borderWidth: 0
                }
            },
        ]

        option = {
            title: {
                text: '实时市场监测',
                textStyle: {
                    color: '#fff',
                    align:'left',
                    fontSize:20,
                },
                //subtext: '深圳市各区房价示意图',
            },
            tooltip: {
                trigger: 'item',
                formatter: "{b}"
            },
            //标签
            /*graphic: [
                //标签
                {
                    type: 'group',
                    ///rotation: Math.PI / 4,
                    bounding: 'raw',
                    //right: 110,
                    //bottom: 110,
                    top:0,
                    left:630,
                    z: 100,
                    children: [
                        {
                            type:'polygon'  ,
                            left: 52,
                            shape:{
                                points:[
                                    [0,0], [100, 0],[100,30],[42,30],[50,36],[58,30], [0, 30]
                                ]
                            },
                            style:{
                                fill:'#083869',
                            },
                        },
                        {
                            type: 'text',
                            left: 67,
                            top: 8,
                            z: 100,
                            style: {
                                fill: '#ffffff',
                                text: '全市新建商品房',
                                font: 'bold 10px Microsoft YaHei'
                            }
                        },
                        {
                            type: 'text',
                            left: 5,
                            top: 40,
                            z: 100,
                            style: {
                                fill: '#23a7f1',
                                text: '54111',
                                font: 'bold 28px Microsoft YaHei'
                            }
                        },
                        {
                            type: 'text',
                            left: 12,
                            top: 70,
                            z: 100,
                            style: {
                                fill: '#ffffff',
                                text: '全市均价(元/m2)',
                                font: 'bold 10px Microsoft YaHei'
                            }
                        },
                        {
                            type: 'text',
                            left: 115,
                            top: 40,
                            z: 100,
                            style: {
                                fill: '#23a7f1',
                                text: '2564',
                                font: 'bold 28px Microsoft YaHei'
                            }
                        },
                        {
                            type: 'text',
                            left: 120,
                            top: 70,
                            z: 100,
                            style: {
                                fill: '#ffffff',
                                text: '全市成交套数',
                                font: 'bold 10px Microsoft YaHei'
                            }
                        },

                        {
                            type:'polygon',
                            left: 52,
                            top:100,
                            shape:{
                                points:[
                                    [0,0], [100, 0],[100,30],[42,30],[50,36],[58,30], [0, 30]
                                ]
                            },
                            style:{
                                fill:'#083869',
                            },
                        },
                        {
                            type: 'text',
                            left: 67,
                            top: 108,
                            z: 100,
                            style: {
                                fill: '#ffffff',
                                text: '全市二手房住宅',
                                font: 'bold 10px Microsoft YaHei'
                            }
                        },
                        {
                            type: 'text',
                            left: 5,
                            top: 140,
                            z: 100,
                            style: {
                                fill: '#23a7f1',
                                text: '38941',
                                font: 'bold 28px Microsoft YaHei'
                            }
                        },
                        {
                            type: 'text',
                            left: 12,
                            top: 170,
                            z: 100,
                            style: {
                                fill: '#ffffff',
                                text: '全市均价(元/m2)',
                                font: 'bold 10px Microsoft YaHei'
                            }
                        },
                        {
                            type: 'text',
                            left: 115,
                            top: 140,
                            z: 100,
                            style: {
                                fill: '#23a7f1',
                                text: '7225',
                                font: 'bold 28px Microsoft YaHei'
                            }
                        },
                        {
                            type: 'text',
                            left: 120,
                            top: 170,
                            z: 100,
                            style: {
                                fill: '#ffffff',
                                text: '全市成交套数',
                                font: 'bold 10px Microsoft YaHei'
                            }
                        }
                    ]
                },
            ],*/
            //地图相关设置
            geo: {
                map: 'shenzhen',
                //视角缩放比例
                zoom: 1.1,
                top: 60,
                //显示文本样式
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            color: '#ffffff'
                        }
                    },
                    emphasis: {
                        textStyle: {
                            color: '#ffffff'
                        }
                    }
                },
                //鼠标缩放和平移
                roam: false,
                regions: [
                    {name: '南山区', itemStyle: regionsStyleArray[2]},
                    {name: '福田区', itemStyle: regionsStyleArray[2]},
                    {name: '罗湖区', itemStyle: regionsStyleArray[2]},
                    {name: '宝安区', itemStyle: regionsStyleArray[3]},
                    {name: '盐田区', itemStyle: regionsStyleArray[3]},
                    {name: '龙华区', itemStyle: regionsStyleArray[3]},
                    {name: '龙岗区', itemStyle: regionsStyleArray[1]},
                    {name: '坪山区', itemStyle: regionsStyleArray[0]},
                    {name: '光明区', itemStyle: regionsStyleArray[0]},
                    {name: '大鹏区', itemStyle: regionsStyleArray[0]},

                ]
            },
            series: [

                {
                    name: '提示',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: [
                        {
                            //宝安
                            name:'新房:55404(561)',
                            value:[113.917345, 22.693843]
                        },
                        {
                            //光明
                            name:'新房:43007(38套)',
                            value:[113.997345, 22.793843]
                        },
                        {
                            //龙华
                            name:'新房:52963(414套)',
                            value:[114.087345, 22.723843]
                        },
                        {
                            //南山
                            name:'新房:125798(84套)',
                            value:[114.047345, 22.613843]
                        },
                        {
                            //福田
                            name:'新房:94680(60套)',
                            value:[114.127345, 22.553843]
                        },
                        {
                            //盐田
                            name:'新房:0(0套)',
                            value:[114.377345, 22.623843]
                        },
                        {
                            //罗湖区
                            name:'新房:74491(66套)',
                            value:[114.217345, 22.603843]
                        },
                        {
                            //龙岗
                            name:'新房:44361(864套)',
                            value:[114.327345, 22.749843]
                        },
                        {
                            //坪山
                            name:'新房:28068(590套)',
                            value:[114.437345, 22.702843]
                        },
                        {
                            //大鹏
                            name:'新房:37088(27套)',
                            value:[114.567345, 22.648843]
                        }
                    ],
                    symbolSize:[120,20],
                    symbolOffset: [0, '-55%'],
                    symbol:'path://M94.874,2.861v19.651L2.37,22.552V2.861H94.874z',
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'center',
                            show: true,
                            color: '#ffffff',
                            //align: 'center',
                            //verticalAlign: 'middle',
                            offset:[3,3]
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#02040a'
                        }
                    }
                },
                {
                    name: '提示',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: [
                        {
                            //宝安
                            name:'二手房:40719(1272套)',
                            value:[113.917345, 22.693843]
                        },
                        {
                            //光明
                            name:'二手房:29584(10套)',
                            value:[113.997345, 22.793843]
                        },
                        {
                            //龙华
                            name:'二手房:44598(74套)',
                            value:[114.087345, 22.723843]
                        },
                        {
                            //南山
                            name:'二手房:58196(1159套)',
                            value:[114.047345, 22.613843]
                        },
                        {
                            //福田
                            name:'二手房:49091(1339套)',
                            value:[114.127345, 22.553843]
                        },
                        {
                            //盐田
                            name:'二手房:33168(117套)',
                            value:[114.377345, 22.623843]
                        },
                        {
                            //罗湖
                            name:'二手房:36895(953套)',
                            value:[114.217345, 22.603843]
                        },
                        {
                            //龙岗
                            name:'二手房:30111(1316套)',
                            value:[114.327345, 22.749843]
                        },
                        {
                            //坪山
                            name:'二手房:24708(15套)',
                            value:[114.437345, 22.702843]
                        },
                        {
                            //大鹏
                            name:'二手房:26091(16套)',
                            value:[114.567345, 22.648843]
                        }
                    ],
                    symbolSize:[120,28],
                    symbolOffset: [0, '45%'],
                    symbol:'path://M94.874,2.861v19.651H9.514L2.37,28.807V2.861H94.874z',
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'center',
                            show: true,
                            color: '#ffffff',
                            //align: 'center',
                            //verticalAlign: 'middle',
                            offset:[3,3]
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(13,20,53, 0.5)'
                        }
                    }
                },
            ]
        };
        myChart.setOption(option);

        /*function setSelect(){
            myChart.setOption({
                geo:{
                    regions: [
                        {name: '南山区', itemStyle: regionsStyleArray[2],selected: true},
                        {name: '福田区', itemStyle: regionsStyleArray[2]},
                        {name: '罗湖区', itemStyle: regionsStyleArray[2]},
                        {name: '宝安区', itemStyle: regionsStyleArray[3]},
                        {name: '盐田区', itemStyle: regionsStyleArray[3]},
                        {name: '龙华区', itemStyle: regionsStyleArray[3]},
                        {name: '龙岗区', itemStyle: regionsStyleArray[1]},
                        {name: '坪山区', itemStyle: regionsStyleArray[0]},
                        {name: '光明区', itemStyle: regionsStyleArray[0]},
                        {name: '大鹏区', itemStyle: regionsStyleArray[0]},

                    ]
                }
            });
        }

        window.setInterval(function(){
            setSelect()
        }, 2000);*/

    })


    function randomData() {
        return Math.round(Math.random()*1000);
    }


    //-----------------------------------------核心指标-----------------------------------------------start

    var coreItemArray = [
        {params :{indexId:"1", beginDate:"201705", endDate:"201806"}, id:'index_01',type:1,size:1},
        {params :{indexId:"2", beginDate:"201705", endDate:"201806"}, id:'index_02',type:1,size:1},
        {params :{indexId:"3", beginDate:"201705", endDate:"201806"}, id:'index_03',type:1,size:1},
        //{params :{indexId:"11", beginDate:"201605", endDate:"201705"}, id:'index_11',type:1,size:1},
        {params :{indexId:"4", beginDate:"201712", endDate:"201806"}, id:'index_04',type:2,size:1},
        {params :{indexId:"5", beginDate:"201712", endDate:"201806"}, id:'index_05',type:2,size:1},
        {params :{indexId:"6", beginDate:"201712", endDate:"201806"}, id:'index_06',type:2,size:1},
        {params :{indexId:"7", beginDate:"201712", endDate:"201806"}, id:'index_07',type:2,size:1},
        {params :{indexId:"8", beginDate:"201712", endDate:"201806"}, id:'index_08',type:2,size:1},
        {params :{indexId:"9", beginDate:"201712", endDate:"201806"}, id:'index_09',type:2,size:1},
        {params :{indexId:"10", beginDate:"201801", endDate:"201806"}, id:'index_10',type:2,size:1},
    ];
    var timeList, graphValue, result ;

    coreItemArray.map(function (obj) {
        coreRequest(obj)
    })

    function coreRequest(obj) {

        if (obj.params.indexId == "11"){
            coreIndexDraw({INDEX_ID:11,INDEX_LINE1:85,INDEX_LINE2:115,INDEX_TYPE:1,INDEX_NAME:'居住用地价格同比指数'},{id:'magnifyEcharts',size:2});

        } else if (obj.params.indexId == "12"){
            coreIndexDraw({INDEX_ID:12,INDEX_LINE1:0.15,INDEX_LINE2:0.35,INDEX_TYPE:1,INDEX_NAME:'土地出让收入与地方财政收入的比值'},{id:'magnifyEcharts',size:2});
        }else{
            $.ajax({
                type: "POST",
                url: "/indexValue/findIndexValue",
                data: obj.params,
                success: function(resp){
                    var data = JSON.parse(resp.replace(/'/g,""));
                    if (data.flag == "1"){
                        result = data.result[0];
                        if(obj.type == 1){
                            coreIndexDraw(result,obj);
                        }
                        if(obj.type == 2){
                            secondIndexDraw(result,obj);
                        }
                    }else {
                        toastr.warning("数据加载失败");
                    }
                }
            });
        }


    }


    function getTimeList(data) {
        var timeList = [];
        for (var item in data){
            if (item.length == 4 ){
                for (var time in data[item]){
                    timeList.push( /*item.substring(2,4) */item + "." + time);
                }
            }
        }
        return timeList.sort();
    }

    function getDataList(data, timeList) {
        var dataList = [];
        for (var i = 0; i < timeList.length; i++) {
            for (var item in data){
                if (item.length == 4){
                    for (var ret in data[item]){
                        var time =  /*item.substring(2,4)*/item + "." + ret;
                        if (time == timeList[i]){
                            if (data.INDEX_TYPE == 1 && parseFloat(data[item][ret]) < 1){
                                dataList.push(parseFloat(data[item][ret]).toFixed(2));
                            } else {
                                dataList.push(parseFloat(data[item][ret]).toFixed(1));
                            }

                            break;
                        }
                    }
                }
            }
        }
        return dataList;
    }

    function getTitle(result) {
        return {
            text: result.INDEX_NAME,
            left: 920,
            top:10,
            textAlign: 'center',
            textStyle:{
                color: '#fff',
                fontSize:'32'
            }
        }
    }

    function getMarkPoin(timeList, graphValue ,refer, precision) {
        var obj = {};
        var array = [];
        var effectArray = [];
        var lastPointArray = [];
        var lastEffectArray = [];
        var maxx = 0, maxy = 0;
        var max = Math.max.apply(null,graphValue);
        for (var i = 0; i < graphValue.length; i++) {
            if (max == graphValue[i]){
                maxx = timeList[i];
                maxy = graphValue[i];
            }
        }

        lastPointArray.push(
            {
                name: '最近值',
                value: /*timeList[timeList.length-1]+","+*/parseFloat(graphValue[graphValue.length-1]).toFixed(precision),
                xAxis: timeList[timeList.length-1],
                yAxis: graphValue[graphValue.length-1]
            }
        );
        lastEffectArray.push([timeList[timeList.length-1],graphValue[graphValue.length-1]]);

        if (lastPointArray[0].yAxis != maxy) {
            array.push(
                {
                    name: '最大值',
                    value: /*maxx+","+*/parseFloat(maxy).toFixed(precision),
                    xAxis: maxx,
                    yAxis: maxy
                }
            );
            effectArray.push([maxx,maxy]);
        }



        for (var i = 0; i < graphValue.length; i++) {
            //y1<refer , y2 > refer
            if (refer > graphValue[i] && refer < graphValue[i+1] && lastPointArray[0].yAxis != graphValue[i+1]){
                array.push(
                    {
                        name:'上升值',
                        value: /*timeList[i+1]+","+*/parseFloat(graphValue[i+1]).toFixed(precision),
                        xAxis: timeList[i+1],
                        yAxis: graphValue[i+1]
                    }
                );
                effectArray.push([timeList[i+1],graphValue[i+1]]);
            }
            if (refer < graphValue[i] && refer > graphValue[i+1] && lastPointArray[0].yAxis != graphValue[i+1]){
                array.push(
                    {
                        name:'下降值',
                        value: /*timeList[i]+","+*/parseFloat(graphValue[i]).toFixed(precision),
                        xAxis: timeList[i],
                        yAxis: graphValue[i]
                    }
                );
                effectArray.push([timeList[i],graphValue[i]])
            }
        }
        obj.markPoint = array;
        obj.lastPoint = lastPointArray;
        obj.effectPoint = effectArray;
        obj.lastEffectPoint = lastEffectArray;
        return obj;
    }
    coreIndexDraw({INDEX_ID:11,INDEX_LINE1:85,INDEX_LINE2:115,INDEX_TYPE:1,INDEX_NAME:'居住用地价格同比指数'},{id:'index_11',size:1});
    secondIndexDraw({INDEX_ID:12,INDEX_LINE1:0.15,INDEX_LINE2:0.35,INDEX_TYPE:1,INDEX_NAME:'土地出让收入与地方财政收入的比值'},{id:'index_12',size:1});

    function coreIndexDraw(result, obj) {
        var coreChart = echarts.init(document.getElementById(obj.id));
        if (result.INDEX_ID == 11){
            timeList = [
                "2014-Q1", "2014-Q2", "2014-Q3", "2014-Q4", "2015-Q1", "2015-Q2", "2015-Q3", "2015-Q4",
                "2016-Q1", "2016-Q2", "2016-Q3", "2016-Q4", "2017-Q1", "2017-Q2", "2017-Q3", "2017-Q4", "2018-Q1"
            ];
            graphValue = [
                "106.6", "108.4", "109.5", "110.9", "104.0", "110.7", "113.3", "117.5",
                "122.3", "117.0", "115.5", "109.8", "108.7", "106.8", "107.0", "108.6", "106.3"
            ];
        }else if (result.INDEX_ID == 12){
            timeList = ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"];
            graphValue = ["0.12", "0.12", "0.12", "0.12", "0.06", "0.21", "0.20", "0.12", "0.25", "0.18"];
        } else{
            timeList = getTimeList(result);
            graphValue = getDataList(result,timeList);
        }

        var maxValue = Math.max.apply(null,graphValue);
        var minValue = Math.min.apply(null,graphValue);
        var maxyValue = result.INDEX_LINE2 > maxValue ? result.INDEX_LINE2  : maxValue;
        var minyValue = result.INDEX_LINE1 < minValue ? result.INDEX_LINE1  : minValue;
        var precision = result.INDEX_TYPE == 1 && maxyValue < 1 ? 2: 1;
        var point = getMarkPoin(timeList, graphValue, result.INDEX_LINE2 , precision);
        var visualMapFont = obj.size == 1 ? 'bold 10px "Microsoft YaHei"' : 'bold 16px "Microsoft YaHei"';

        var hotArea = result.INDEX_TYPE==1 ?'  >'+result.INDEX_LINE2:' >'+result.INDEX_LINE2 + '%';
        var reasonable = result.INDEX_TYPE==1 ? result.INDEX_LINE1+'-'+result.INDEX_LINE2:result.INDEX_LINE1+'%-'+result.INDEX_LINE2+"%";
        if (reasonable.length < 9){
            reasonable = "   "+ reasonable;
        }
        var coolArea = result.INDEX_TYPE==1 ?'  <'+result.INDEX_LINE1:'  <'+result.INDEX_LINE1+"%";


        option = {
            animationDuration:3000,
            title: obj.size > 1 ? getTitle(result): {},
            grid: [
                {x: obj.size == 1 ? '7%' : '4%', y: '7%',top:8*obj.size*1.5+'%', tottom:'4%',width: obj.size == 1 ? '70%' : '78%'},
            ],
            legend: {
                right: 20,
                orient: 'vertical',
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#ddd'
                    }
                },
                formatter: result.INDEX_TYPE==1?'{c}':'{c}%',
                backgroundColor: '#000',
                padding: [0,0],//[2*obj.size, 2*obj.size],
                textStyle: {
                    color: '#ffffff',
                    fontSize:9*obj.size
                },
                extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.2)'
            },
            visualMap: {
                top: obj.size == 1 ? 17 : 440,
                right: obj.size == 1 ? 30 : 95,
                //orient:'vertical',
                precision:1,
                show:true,
                z:130,
                itemHeight:obj.size == 1 ? 9: 10,
                itemWidth: obj.size == 1 ?20 :28,
                itemGap: obj.size == 1 ?28 : 80,
                // textStyle:{
                //     color:"#ffffff",
                // },
                showLabel:false,
                pieces: [{
                    //gt: 0,
                    lte: result.INDEX_LINE1,
                    color: '#29abe2'
                }, {
                    gt: result.INDEX_LINE1,
                    lte: result.INDEX_LINE2,
                    color: '#67fc42'
                }, {
                    gt: result.INDEX_LINE2,
                    //lte: 9999,
                    color: '#ed5565'
                }],
                outOfRange: {
                    color: '#999'
                }
            },
            xAxis: {
                type: 'category',
                data: timeList,
                boundaryGap: false,
                scale: true,
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#29abe2'
                    },
                    onZero:false,
                },
                axisLabel: {
                    margin: 10,
                    color:'#29abe2',
                    fontSize: obj.size ==1 ?  10 : 16,
                    rotate: 45,
                }
            },
            yAxis: {
                type: 'value',
                splitLine: {
                    show: false,
                },
                max: maxyValue+0.5,//parseInt(maxyValue > 0 ? maxyValue*1.02 : maxyValue * 0.98),
                min: minyValue-1.5,//parseInt(minyValue > 0 ? minyValue*0.98 : minyValue * 1.02),
                axisTick: {
                    show: obj.size ==1 ? false : true,
                },
                axisLine: {
                    lineStyle: {
                        color: '#29abe2'
                    }
                },
                axisLabel: {
                    show: obj.size ==1 ? false : true,
                    fontSize: 16,
                }
            },
            graphic: [
                //标签
                {
                    type: 'group',
                    ///rotation: Math.PI / 4,
                    bounding: 'raw',
                    //right: 110,
                    //bottom: 110,
                    top: obj.size == 1 ? 10: 410,
                    left:obj.size == 1 ? 340: 1600,
                    z: 100*obj.size,
                    children: [
                        {
                            type:'polygon'  ,
                            left: obj.size == 1 ? 20 : 45,
                            shape:{
                                points:[
                                    [0,0], [obj.size == 1 ?60:120, 0], [obj.size == 1 ? 60 : 120, obj.size == 1 ? 138 : 300], [0, obj.size == 1 ? 138 : 300]
                                ]
                            },
                            style:{
                                fill:'#09295d',
                            },
                        },
                        {
                            type: 'text',
                            left: obj.size == 1 ? 27 : 72,
                            top: obj.size == 1 ? 22 : 58,
                            z: 120,
                            style: {
                                fill: '#29abe2',
                                text: ['过热区间', hotArea].join('\n'),
                                font: visualMapFont
                            }
                        },
                        {
                            type: 'text',
                            left: obj.size == 1 ? 22 : 60,
                            top: obj.size == 1 ? 59 : 145,
                            z: 120,
                            style: {
                                fill: '#29abe2',
                                text: ['  合理区间', reasonable].join('\n'),
                                font: visualMapFont
                            }
                        },
                        {
                            type: 'text',
                            left: obj.size == 1 ? 27 : 72,
                            top: obj.size == 1 ? 97 : 234,
                            z: 120,
                            style: {
                                fill: '#29abe2',
                                text: ['过冷区间', coolArea].join('\n'),
                                font: visualMapFont
                            }
                        },
                    ]
                },
            ],
            series: [
                {
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 7,
                    data: graphValue,
                    markLine: {
                        symbol: ['none', 'none'],
                        lineStyle:{
                            normal:{
                                type:' dotted',
                                width:2,
                            }
                        },
                        label: {
                            normal: {
                                show: obj.size == 1? false : true,
                                formatter: result.INDEX_TYPE == '1' ? '{b}:{c}' : '{b}:{c}%',
                                fontSize:16
                            }
                        },
                        data: [
                            {
                                yAxis: result.INDEX_LINE1,
                                name: '过冷区上限',
                                itemStyle: {
                                    normal: {
                                        color: "#666666",
                                    }
                                }
                            },
                            {
                                yAxis: result.INDEX_LINE2,
                                name: '过热区下限',
                                itemStyle: {
                                    normal: {
                                        color: "#666666",
                                    }
                                }
                            },
                        ]
                    },
                    markPoint: {
                        symbolSize:[32*obj.size,16*obj.size],
                        animation:3000,
                        symbolOffset: [0, '-85%'],
                        symbol:'path://M95.36,32.44H54.61L50,38.684l-4.61-6.244H4.64c-1.909,0-3.457-1.548-3.457-3.457V5.002c0-1.909,1.548-3.457,3.457-3.457h90.72c1.909,0,3.457,1.548,3.457,3.457v23.981C98.817,30.892,97.269,32.44,95.36,32.44z',
                        itemStyle:{
                            normal:{
                                color:'#000',
                                /*opacity:0.9,
                                borderType:"solid",
                                borderColor:'#fff',
                                borderWidth:'1',*/
                            }
                        },
                        label: {
                            normal: {
                                show: true,
                                formatter: result.INDEX_TYPE == '1'? '{c}':'{c}%',
                                position: 'inside', //值显示
                                padding:[25,20,30,20],
                                color:'#fff',
                                fontSize:9*obj.size
                            }
                        },
                        data: point.markPoint,
                    },
                    lineStyle: {
                        normal: {
                            width: 2
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgb(41, 117, 226, .7)'
                            }, {
                                offset: 1,
                                color: 'rgb(41, 117, 226, 0)'
                            }]),
                            origin:'start'
                        },
                        origin:'start'
                    },
                },
                {
                    type: 'effectScatter',
                    symbolSize: obj.size == 1 ? 7 : 20,
                    data: point.effectPoint,
                    z:99,
                    rippleEffect:{
                        period: 4, //动画时间，值越小速度越快
                        brushType: 'stroke', //波纹绘制方式 stroke, fill
                        scale: 4 //波纹圆环最大限制，值越大波纹越大
                    }
                },
                {
                    type: 'line',
                    markPoint: {
                        symbolSize:[42*obj.size,21*obj.size],
                        animation:3000,
                        symbolOffset: [0, '-75%'],
                        symbol:'path://M95.36,32.44H54.61L50,38.684l-4.61-6.244H4.64c-1.909,0-3.457-1.548-3.457-3.457V5.002c0-1.909,1.548-3.457,3.457-3.457h90.72c1.909,0,3.457,1.548,3.457,3.457v23.981C98.817,30.892,97.269,32.44,95.36,32.44z',
                        itemStyle:{
                            normal:{
                                color:'#000',
                            }
                        },
                        label: {
                            normal: {
                                show: true,
                                formatter: result.INDEX_TYPE == '1'? '{c}':'{c}%',
                                position: 'inside', //值显示
                                padding:[25,20,30,20],
                                color:'#fff',
                                fontSize:12*obj.size
                            }
                        },
                        data: point.lastPoint,
                    },
                },
                {
                    type: 'effectScatter',
                    symbolSize: obj.size == 1 ? 9 : 26,
                    data: point.lastEffectPoint,
                    z:999,
                    rippleEffect:{
                        period: 4, //动画时间，值越小速度越快
                        brushType: 'stroke', //波纹绘制方式 stroke, fill
                        scale: 4 //波纹圆环最大限制，值越大波纹越大
                    }
                }
            ]
        };
        coreChart.setOption(option);

        coreChart.on('datarangeselected',function (params) {
            var dom = coreChart.getDom();
            var id = $(dom).attr("id");
            $("#"+id).parent().parent().attr("value","hide");
            window.setInterval(function () {
                $("#"+id).parent().parent().attr("value","show");
            },100)
        })
    }

    function secondIndexDraw(result, obj) {
        var secondChart = echarts.init(document.getElementById(obj.id));
        if (result.INDEX_ID == 12){
            timeList = ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"];
            graphValue = ["0.12", "0.12", "0.12", "0.12", "0.06", "0.21", "0.20", "0.12", "0.25", "0.18"]
        } else {
            timeList = getTimeList(result);
            graphValue = getDataList(result, timeList);
        }
        var maxValue = Math.max.apply(null,graphValue);
        var minValue = Math.min.apply(null,graphValue);
        var maxyValue = result.INDEX_LINE2 > maxValue ? result.INDEX_LINE2  : maxValue;
        var minyValue = result.INDEX_LINE1 < minValue ? result.INDEX_LINE1  : minValue;
        //var point = getMarkPoin(timeList, graphValue, result.INDEX_LINE2);
        var precision = result.INDEX_TYPE == 1 && maxyValue < 1 ? 2: 1;
        var point = getMarkPoin(timeList, graphValue, result.INDEX_LINE2 , precision);
        option = {
            animationDuration:3000,
            grid: [
                {x: '10%', y: '10%',/*left:40,*/ top:40,bottom:90, width: '80%'},
            ],
            legend: {
                right: 20,
                orient: 'vertical',
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#ddd'
                    }
                },
                formatter: result.INDEX_TYPE==1?'{c}':'{c}%',
                backgroundColor: '#000',
                padding: [0,0],//[2*obj.size, 2*obj.size],
                textStyle: {
                    color: '#ffffff',
                    fontSize:9
                },
                extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.2)'
            },
            visualMap: {
                bottom:30,
                right: 50,
                orient:'horizontal',
                precision:1,
                inverse:true,
                show:true,
                itemHeight:9,
                itemWidth:20,
                itemGap:47,
                // textStyle:{
                //     color:"#ffffff",
                // },
                showLabel:false,
                pieces: [{
                    //gt: 0,
                    lte: result.INDEX_LINE1,
                    color: '#29abe2'
                }, {
                    gt: result.INDEX_LINE1,
                    lte: result.INDEX_LINE2,
                    color: '#67fc42'
                }, {
                    gt: result.INDEX_LINE2,
                    //lte: 9999,
                    color: '#ed5565'
                }],
                outOfRange: {
                    color: '#999'
                }
            },
            xAxis: {
                type: 'category',
                data: timeList,
                boundaryGap: false,
                scale: true,
                //offset:5,
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#29abe2'
                    },
                    onZero:false,
                },
                axisLabel: {
                    margin: 10,
                    color:'#29abe2',
                    fontSize: 10,
                    rotate: 45,
                }
            },
            yAxis: {
                type: 'value',
                splitLine: {
                    show:false,
                },
                max: parseInt(maxyValue > 0 ? maxyValue*1.2 : maxyValue * 0.8),
                min: parseInt(minyValue > 0 ? minyValue*0.8 : minyValue * 1.2),
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#29abe2'
                    }
                },
                axisLabel: {
                    show:false,
                }
            },
            graphic: [
                //标签
                {
                    type: 'group',
                    ///rotation: Math.PI / 4,
                    bounding: 'raw',
                    //right: 110,
                    //bottom: 110,
                    top:205,
                    left:10,
                    z: 100,
                    children: [
                        {
                            type:'polygon'  ,
                            shape:{
                                points:[
                                    [0,0], [210, 0], [210,32], [0, 32]
                                ]
                            },
                            style:{
                                fill:'#09295d',
                            },
                        },
                        {
                            type: 'text',
                            left: 27,
                            top: 5,
                            z: 120,
                            style: {
                                fill: '#29abe2',
                                text: ['过热区间', result.INDEX_TYPE==1 ?'  >'+result.INDEX_LINE2:' >'+result.INDEX_LINE2 + '%'].join('\n'),
                                font: 'bold 10px "Microsoft YaHei"'
                            }
                        },
                        {
                            type: 'text',
                            left: 90,
                            top: 5,
                            z: 120,
                            style: {
                                fill: '#29abe2',
                                text: [' 合理区间', result.INDEX_TYPE==1 ? result.INDEX_LINE1+'-'+result.INDEX_LINE2:result.INDEX_LINE1+'%-'+result.INDEX_LINE2+"%"].join('\n'),
                                font: 'bold 10px "Microsoft YaHei"'
                            }
                        },
                        {
                            type: 'text',
                            left: 163,
                            top: 5,
                            z: 120,
                            style: {
                                fill: '#29abe2',
                                text: ['过冷区间', result.INDEX_TYPE==1 ?'  <'+result.INDEX_LINE1:'  <'+result.INDEX_LINE1+"%"].join('\n'),
                                font: 'bold 10px "Microsoft YaHei"'
                            }
                        },
                    ]
                },
            ],
            series: [
                {
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 7,
                    data: graphValue,
                    markLine: {
                        symbol: ['none', 'none'],
                        lineStyle:{
                            normal:{
                                type:' dotted',
                                width:2,
                            }
                        },
                        label: {
                            show:false,
                        },
                        data: [
                            {
                                yAxis: result.INDEX_LINE1,
                                name: '过冷区上限',
                                itemStyle: {
                                    normal: {
                                        color: "#666666",
                                    }
                                }
                            },
                            {
                                yAxis: result.INDEX_LINE2,
                                name: '过热区下限',
                                itemStyle: {
                                    normal: {
                                        color: "#666666",
                                    }
                                }
                            },
                        ]
                    },
                    markPoint: {
                        symbolSize:[32,16],
                        animation:3000,
                        symbolOffset: [0, '-75%'],
                        symbol:'path://M95.36,32.44H54.61L50,38.684l-4.61-6.244H4.64c-1.909,0-3.457-1.548-3.457-3.457V5.002c0-1.909,1.548-3.457,3.457-3.457h90.72c1.909,0,3.457,1.548,3.457,3.457v23.981C98.817,30.892,97.269,32.44,95.36,32.44z',
                        itemStyle:{
                            normal:{
                                color:'#000',
                                /*opacity:0.9,
                                borderType:"solid",
                                borderColor:'#fff',
                                borderWidth:'1',*/
                            }
                        },
                        label: {
                            normal: {
                                show: true,
                                formatter: result.INDEX_TYPE == '1'? '{c}':'{c}%',
                                position: 'inside', //值显示
                                padding:[25,20,30,20],
                                color:'#fff',
                                fontSize:'9'
                            }
                        },
                        data: point.markPoint,
                    },
                    lineStyle: {
                        normal: {
                            width: 2
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgb(41, 117, 226, .7)'
                            }, {
                                offset: 1,
                                color: 'rgb(41, 117, 226, 0)'
                            }]),
                            origin:'start'
                        },

                    },
                },
                {
                    type: 'effectScatter',
                    symbolSize: 7,
                    data: point.effectPoint,
                    z:999,
                    rippleEffect:{
                        period: 4, //动画时间，值越小速度越快
                        brushType: 'stroke', //波纹绘制方式 stroke, fill
                        scale: 4 //波纹圆环最大限制，值越大波纹越大
                    }
                },
                {
                    type: 'line',
                    markPoint: {
                        symbolSize:[42,21],
                        animation:3000,
                        symbolOffset: [0, '-75%'],
                        symbol:'path://M95.36,32.44H54.61L50,38.684l-4.61-6.244H4.64c-1.909,0-3.457-1.548-3.457-3.457V5.002c0-1.909,1.548-3.457,3.457-3.457h90.72c1.909,0,3.457,1.548,3.457,3.457v23.981C98.817,30.892,97.269,32.44,95.36,32.44z',
                        itemStyle:{
                            normal:{
                                color:'#000',
                                /*opacity:0.9,
                                borderType:"solid",
                                borderColor:'#fff',
                                borderWidth:'1',*/
                            }
                        },
                        label: {
                            normal: {
                                show: true,
                                formatter: result.INDEX_TYPE == '1'? '{c}':'{c}%',
                                position: 'inside', //值显示
                                padding:[25,20,30,20],
                                color:'#fff',
                                fontSize:'12'
                            }
                        },
                        data: point.lastPoint,
                    },
                },
                {
                    type: 'effectScatter',
                    symbolSize: obj.size == 1 ? 9 : 26,
                    data: point.lastEffectPoint,
                    z:999,
                    rippleEffect:{
                        period: 4, //动画时间，值越小速度越快
                        brushType: 'stroke', //波纹绘制方式 stroke, fill
                        scale: 4 //波纹圆环最大限制，值越大波纹越大
                    }
                }
            ]
        };
        secondChart.setOption(option);
        secondChart.on('datarangeselected',function (params) {
            var dom = secondChart.getDom();
            var id = $(dom).attr("id");
            $("#"+id).parent().parent().attr("value","hide");
            window.setInterval(function () {
                $("#"+id).parent().parent().attr("value","show");
            },100)
        })
    }
    


    //-----------------------------------------核心指标-----------------------------------------------end

    var barChart = echarts.init(document.getElementById('top-rate'));
    var barData = [
        {name:'南山',value:3.11},{name:'福田',value:2.22},{name:'宝安',value:20.75},
        {name:'罗湖',value:2.44},{name:'龙华',value:15.31},{name:'龙岗',value:31.95},
        {name:'光明',value:1.41},{name:'盐田',value:0.00},{name:'坪山',value:21.82},
        {name:'大鹏',value:1.00}]
    //var childData = [17.38,18.80,18.37,16.00, 4.24, 22.64,0.25,1.83,0.33,0.17];
    var childData = [
        {name:'南山',value:18.48},{name:'福田',value:21.35},{name:'宝安',value:20.28},
        {name:'罗湖',value:21.35},{name:'龙华',value:1.18},{name:'龙岗',value:20.99},
        {name:'光明',value:0.16},{name:'盐田',value:1.87},{name:'坪山',value:0.24},
        {name:'大鹏',value:0.26}]

    function getSortData(data){
        var temp = [];
        data.map(function(obj){
            temp.push(obj.value);
        })
        temp.sort(function (a,b) {
            return b-a;
        })

        var objArray = [];
        var dataArray = [];
        temp.map(function (value) {
            data.map(function (obj) {
                if (obj.value == value ) {
                    var flag = true;
                    objArray.map(function (arr) {
                        if (arr == obj.name){
                            flag = false;
                        }
                    })
                    if (flag){
                        objArray.push(obj.name);
                        dataArray.push(obj.value);
                    }
                }
            })
        })

        return {name:objArray,data:dataArray};
    }

    var barSort = getSortData(barData);

    var chaildSort = getSortData(childData);

    baroption = {
        //backgroundColor: '#00265f',
        title:{
            text:'新建商品住宅成交占比排行',
            top:0,
            right:10,
            left:0,
            textStyle:{
                color:'#ffffff',
                fontSize: 14
            }
        },
        grid: {
            left: -3,
            top: 30,
            right: 0,
            bottom: 0,
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: barSort.name,
            axisLine: {
                show: false,
                lineStyle: {
                    color: "#063374",
                    width: 1,
                    type: "solid"
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#ffffff",
                    fontSize:12,
                }
            },
        }],
        yAxis: [{
            type: 'value',
            show: false,
            position:'right',
        }],
        series: [{
            type: 'bar',
            data: barSort.data,
            barWidth: 15, //柱子宽度
            //barGap: 1, //柱子之间间距
            animationEasing: name,
            animationDuration: 3000,
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    color:'#fff',
                    formatter:'{c}%',
                    fontSize:9,
                    width:30
                }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1,
                        color: '#1d1975'
                    }, {
                        offset: 0,
                        color: '#1197e6'
                    }]),
                    opacity: 1,
                }
            }
        }]
    };

    barChart.setOption(baroption);

    var childChart = echarts.init(document.getElementById('bottom_rate'));

    childoption = {
        //backgroundColor: '#00265f',
        title:{
            text:'二手住宅成交占比排行',
            top:0,
            right:10,
            left:0,
            textStyle:{
                color:'#ffffff',
                fontSize: 14
            }
        },
        grid: {
            left: -25,
            top: 30,
            right: 0,
            bottom: '0',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: chaildSort.name,
            axisLine: {
                show: false,
                lineStyle: {
                    color: "#063374",
                    width: 1,
                    type: "solid"
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#ffffff",
                    fontSize:12,
                }
            },
        }],
        yAxis: [{
            type: 'value',
            show: false,
        }],
        series: [{
            name: '差值',
            type: 'bar',
            stack: '血压',
            barWidth: 15,
            animationEasing: name,
            animationDuration: 3000,
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    color:'#fff',
                    formatter:'{c}%',
                    fontSize:9,
                    width:30
                }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00fcae'
                    }, {
                        offset: 1,
                        color: '#006388'
                    }]),
                    opacity: 1,
                }
            },
            data: chaildSort.data           // 显示的这一部分柱状图，应该为血压最大值-最小值的差值
        },]
    };

    childChart.setOption(childoption);




    //-------------------------------------------------------------------


    /*var canvas = document.getElementById('new_year_avg'),  //获取canvas元素
        context = canvas.getContext('2d'),  //获取画图环境，指明为2d
        centerX = canvas.width/2,   //Canvas中心点x轴坐标
        centerY = canvas.height/2,  //Canvas中心点y轴坐标
        rad = Math.PI*2/100, //将360度分成100份，那么每一份就是rad度
        speed = 0.1; //加载的快慢就靠它了*/
    //绘制5像素宽的运动外圈
    function blueCircle(context,obj,centerX,centerY,rad){
        context.save();
        context.strokeStyle = obj.color; //设置描边样式
        context.lineWidth = 4; //设置线宽
        context.beginPath(); //路径开始
        context.arc(centerX, centerY, 31 , -Math.PI/2, -Math.PI/2 +Math.abs( obj.value)*rad, false); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
        context.stroke(); //绘制
        context.closePath(); //路径结束
        context.restore();
    }
    //绘制白色外圈
    function whiteCircle(context,centerX,centerY){
        context.save();
        context.beginPath();
        context.lineWidth = 2; //设置线宽
        context.strokeStyle = "#fff";
        context.arc(centerX, centerY, 31, 0, Math.PI*2, false);
        context.stroke();
        context.closePath();
        context.restore();
    }

    var idArray = [
        {id:'new_01',value:'-0.74',color:'#00fcae'},
        {id:'new_02',value:'-0.11',color:'#00fcae'},
        {id:'new_03',value:'32.57',color:'#00fcae'},
        {id:'new_04',value:'10.90',color:'#00fcae'},
        {id:'second_01',value:'6.54',color:'#1197e6'},
        {id:'second_02',value:'9.96',color:'#1197e6'},
        {id:'second_03',value:'12.38',color:'#1197e6'},
        {id:'second_04',value:'18.87',color:'#1197e6'},
    ];

    /*idArray.map(function (obj) {
        var canvas = document.getElementById(obj.id),  //获取canvas元素
            context = canvas.getContext('2d'),  //获取画图环境，指明为2d
            centerX = canvas.width/2,   //Canvas中心点x轴坐标
            centerY = canvas.height/2,  //Canvas中心点y轴坐标
            rad = Math.PI*2/100, //将360度分成100份，那么每一份就是rad度
            speed = 0.1; //加载的快慢就靠它了
            context.clearRect(0, 0, canvas.width, canvas.height);
            whiteCircle(context,centerX,centerY);
            blueCircle(context,obj,centerX,centerY,rad);

        $(".animationSandbox").map(function (e) {
            var id = $(this).closest('.new-home-item').find("canvas").attr("id");
            if (id == obj.id){
                $(this).empty().append(obj.value+"%")
            }
        })

    })*/
    //}

    function testAnim(x) {
        $('.animationSandbox').map(function(){
            $(this).removeClass().addClass(x + ' animated num-box animationSandbox').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(this).removeClass(x +   ' animated');
            });
        })
    };

    /*window.setInterval(function(){
        testAnim("flip");
    },3000)*/


    //-------------------放大镜---------------
    $(".magnifying").click(function(){
        $(".bg-pup").show();
        $(".pup-content").css({
            height: 1080 ,
            width: 1920 ,
            display: 'block',
            marginTop: -540 ,
            marginLeft: -960
        })

        var indexId = $(this).siblings(".echar-content").attr("indexId");
        var indexInfo = {params :{indexId:indexId/*, beginDate:"201705", endDate:"201806"*/}, id:'magnifyEcharts',type:1,size:2};
        coreRequest(indexInfo)
    });
    
    $(".block-click").click(function () {

        var value = $(this).attr("value");
        
        if (value == 'hide'){
            return;
        }

        $(".bg-pup").show();
        $(".pup-content").css({
            height: 1080 ,
            width: 1920 ,
            display: 'block',
            marginTop: -540 ,
            marginLeft: -960
        })

        var indexId = $(this).find(".echar-content").attr("indexId");
        var indexInfo = {params :{indexId:indexId/*, beginDate:"201705", endDate:"201806"*/}, id:'magnifyEcharts',type:1,size:2};
        coreRequest(indexInfo)
    })

    $(".close-btn").click(function(event) {
        $(".bg-pup").hide();
        $(this).siblings(".echar-content").remove();
        $(this).closest(".pup-content").hide()
        $(this).closest("div").find("div").removeAttr("_echarts_instance_");
    });

    //-----------------------打印报告-------------------------------------

    $("#warningBtn").click(function () {
        $(".pup-index").show();
        $(".bg-pup").show();
        $(".month-report-content").hide();
    })

    $("#warningClose").click(function () {
        $(".pup-index").hide();
        $(".bg-pup").hide()
    })

    $("#indexPrint").click(function () {
        bdhtml=window.document.body.innerHTML;
        sprnstr="<!--startprint-->";
        eprnstr="<!--endprint-->";
        prnhtml=bdhtml.substr(bdhtml.indexOf(sprnstr)+17);
        prnhtml=prnhtml.substring(0,prnhtml.indexOf(eprnstr));
        window.document.body.innerHTML=prnhtml;
        window.print();
        window.location.reload();
        $(".pup-index").css({display:'block'});
    })


    //----------------------------------月度下载------------------------------------------------------
    $("#monthBtn").click(function () {
        $("#reportOptionsId").val("0")
        //另外框隐藏
        $(".pup-index").hide();
        $(".bg-pup").show();
        //第二个框显示
        $(".month-report-content-first").show();
        //$(".report-ct").show();
        $(".report-first").show();
    })

    //当月下载
    $("#proCurrentReportId").click(function () {

        //$(this).find("a").attr("href","/file/download?fileName="+ title +".docx&fileId="+fileId);
        document.getElementById("currentReport_download").click()
    })

    $("#otherMonthReport").click(function () {
        //隐藏内容
        $("#monthReportClassId").find(".report-first").hide();
        //修改内框class
        $("#monthReportClassId").find("#monthReportBoxId").removeClass().addClass("month-report-box");
        //修改外框class
        $("#monthReportClassId").removeClass().addClass("month-report-content");
        //显示新内容
        $("#monthReportBoxId").find(".report-ct").show();
    })

    $("#proReportId").click(function () {
        var selectValue = $("#reportOptionsId").val();
        var fileId = $("#reportOptionsId option:selected").attr("fileId");
        
        if (selectValue == 0){
            return;
        }

        $(".report-ct").hide();
        $(".report-two-left").show();
        $(".report-two").show();
        $(".report-two-txt").show();

        var titel = selectValue.substring(0,8);
        $(".report-two-left-title").empty().append(titel);
        $("#monthDownId").attr("val", selectValue);
        $("#monthDownId").attr("fileId", fileId);
    })

    $(".month-report-content,.month-report-content-first .close-btn").click(function () {
        $(".month-report-content-first").hide();
        $(".month-report-content").hide();
        $(".report-two-left").hide();
        $(".report-two").hide();
        $(".report-two-txt").hide();
        $("#monthReportClassId").find("#monthReportBoxId").removeClass().addClass("month-report-box-first");
        //修改外框class
        $("#monthReportClassId").removeClass().addClass("month-report-content-first");
    })

    //其他月份下载
    $("#monthDownId").click(function () {
        var title = $(this).attr("val");
        var fileId = $(this).attr("fileId");
        $(this).find("a").attr("href","/file/download?fileName="+ title +".docx&fileId="+fileId);
        document.getElementById("monthDownEvent").click()
    })

    //文字翻滚
    $("#newHomeId").click(function () {
        console.log("s")
        /*var scrollHeight = $(".map-num").height();
        $(".map-num").animate({/!*height: 'toggle', *!/opacity: '.9'},200)*/
        $(".map-num-scroll").animate({
            marginTop: '-50px',
            opacity: '0'
        }, 2000, function () {
            $(this).css({marginTop:"0",opacity: '1'}).find(":first").appendTo(this);
            var value = $(this).html();
            var newValue;
            var flag = Math.random() > 0.5 ? true: false;
            if (flag){
                newValue = parseInt(value) + parseInt(Math.random()*10);
            }else{
                newValue = parseInt(value) - parseInt(Math.random()*10);
            }

            $(this).html(newValue);

        });
    })

    scrollText = function(index){
        $(".map-num-scroll").eq(index).animate({
            marginTop: '-50px',
            opacity: '0'
        }, 2000, function () {
            $(this).css({marginTop:"0",opacity: '1'}).find(":first").appendTo(this);
            var value = $(this).html();
            var newValue;
            var flag = Math.random() > 0.5 ? true: false;
            if (index%2 == 0){
                if (flag){
                    newValue = parseInt(value) + parseInt(Math.random()*10);
                }else{
                    newValue = parseInt(value) - parseInt(Math.random()*10);
                }
            }else{
                newValue = parseInt(value) + parseInt(Math.random()*10);
            }
            $(this).html(newValue);

        });
    }

    //--------------------大屏看板------------------------

    var flagScreen = window.location.search.length == 0? "big" : "small";
    $("#bigScreen").click(function () {
        if (flagScreen == "small"){
            flagScreen = "big";
            requestFullScreen();
        }else {
            flagScreen = "small";
            exitFull();
        }
        resizeCenter(0);
    })

    window.onresize = function(){
        if(!checkFull()){
            //exitFullscreen();
            exitFull();
            //$("#bigScreen").show();
        }
    }

    function checkFull(){
        var isFull =  document.fullscreenEnabled || window.fullScreen || document.webkitIsFullScreen || document.msFullscreenEnabled;
        if(isFull === undefined) isFull = false;
        return isFull;
    }

    //进入全屏
    function requestFullScreen(element) {
        var de = document.querySelector(element) || document.documentElement;
        if (de.requestFullscreen) {
            de.requestFullscreen();
        } else if (de.mozRequestFullScreen) {
            de.mozRequestFullScreen();
        } else if (de.webkitRequestFullScreen) {
            de.webkitRequestFullScreen();
        }
        document.documentElement.webkitRequestFullScreen();
    }
    //退出全屏
    function exitFullscreen(element) {
        var de = document.querySelector(element) || document.documentElement;
        if (de.exitFullscreen) {
            de.exitFullscreen();
        } else if (de.mozCancelFullScreen) {
            de.mozCancelFullScreen();
        } else if (de.webkitCancelFullScreen) {
            de.webkitCancelFullScreen();
        }
        document.webkitCancelFullScreen();
    }

    function exitFull() {
        // 判断各种浏览器，找到正确的方法
        var exitMethod = document.exitFullscreen || //W3C
            document.mozCancelFullScreen || //Chrome等
            document.webkitExitFullscreen || //FireFox
            document.webkitExitFullscreen; //IE11
        if (exitMethod) {
            exitMethod.call(document);
        }
        else if (typeof window.ActiveXObject !== "undefined") {//for Internet Explorer
            var wscript = new ActiveXObject("WScript.Shell");
            if (wscript !== null) {
                wscript.SendKeys("{F11}");
            }
        }
        document.webkitCancelFullScreen();
    }

    //-------------------------------自适应----------------------------------------------------
    $(window, document).resize(function(){
        resize();
    }).load(function(){
        resize();
    });

    function resize() {
        var windowRate = $(window).width()/$(window).height();
        var screenRate = window.screen.width/window.screen.height;

        //当高度超出时用高度自适应
        if (windowRate > screenRate){
            var params = window.location.search
            if (params.length > 0){
                resizeCenter(40);
            }else {
                resizeCenter(0);
            }
        }else {
            //当宽度超出时用宽度自适应
            resizeWidth();
        }
    }

    function resizeWidth() {
        var ratio = $(window).width()/1920;
        // var ratio = $(window).width()/(window.screen.width||$('body').width());
        $('.container').css({
            transform: "scale("+ratio+")",
            transformOrigin: "left top",
            backgroundSize: "100%",
            marginLeft:0 /*($(window).width()-$('.container').width()*ratio)/2*/
        });
    }
    function resizeCenter(size) {

        if(!window.screen.height||!window.screen.width) return resizeCenterBak();
        var ratio = ($(window).height()-size)/1080;
        var ratio_width= $('.container').width()/1920;
        $(".container").css({
            transform: "scale("+ratio+")",
            transformOrigin: "left top",
            backgroundSize: 100*(window.screen.width/$(window).width() * ratio)+"% " + 100*(window.screen.height/($(window).height()-size) * ratio)+"%",
            backgroundPosition: ($(window).width()-$('.container').width()*ratio)/2+"px top",
            marginLeft: ($(window).width()-$('.container').width()*ratio/ratio_width)/2
        });
    }

    function resizeFull() {
        if(!window.screen.height||!window.screen.width) return resizeFullBak();
        var ratioX = $(window).width()/window.screen.width;
        var ratioY = $(window).height()/window.screen.height;
        // console.log(ratioX, 'ratio')
        $('body').css({
            transform: "scale("+ratioX+", "+ratioY+")",
            transformOrigin: "left top",
            backgroundSize: "100% 100%",
        });
    }

    function resizeCenterBak() {
        var ratioX = $(window).width()/$('body').width();
        var ratioY = $(window).height()/$('body').height();
        var ratio = Math.min(ratioX, ratioY);
        $('body').css({
            transform: "scale("+ratio+")",
            transformOrigin: "left top",
            //backgroundSize: (1/ratioX)*100*ratio+"%",
            backgroundPosition: ($(window).width()-$('body').width()*ratio)/2+"px top",
            marginLeft: ($(window).width()-$('body').width()*ratio)/2
        });
    }
    function resizeFullBak() {
        var ratioX = $(window).width()/$('body').width();
        var ratioY = $(window).height()/$('body').height();
        $('body').css({
            transform: "scale("+ratioX+", "+ratioY+")",
            transformOrigin: "left top",
            backgroundSize: "100% "+ratioY*100+"%",
        });
    }

})