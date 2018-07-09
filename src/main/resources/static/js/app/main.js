$(function () {
    var shenzhen = "../json/shenzhen.json";

    var myChart = echarts.init(document.getElementById('map'));
    $.get(shenzhen, function(tjJson) {
        echarts.registerMap('shenzhen', tjJson);
        myChart.setOption({
            series: [{
                type: 'map',
                map: 'shenzhen'
            }]
        });

        option = {
            //backgroundColor: '#404a59',
            title: {
                text: '深圳地图',
                subtext: '深圳市各区房价示意图',
                left: 'center',
                textStyle: {
                    color: '#fff'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{b}"
            },
            //线颜色及飞行轨道颜色
            /*visualMap: {
                show: false,
                min: 0,
                max: 100,
                color: ['#fff', '#0000ff', '#000000']
            },*/
            /*visualMap: {
                min: 0,
                max: 2500,
                left: 'left',
                top: 'bottom',
                text: ['高','低'],           // 文本，默认为数值文本
                calculable: true,
                inRange: {
                    color: ['#ffffff', '#E0DAFF', '#ADBFFF', '#9CB4FF', '#6A9DFF', '#3889FF']
                }
            },*/
            //地图相关设置
            geo: {
                map: 'shenzhen',
                //视角缩放比例
                zoom: 1.1,
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
                roam: true,
                itemStyle: {
                    normal: {
                        //          	color: '#ddd',
                        borderColor: 'rgba(147, 235, 248, 1)',
                        borderWidth: 1,
                        areaColor: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.8,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(175,238,238, 0)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(	47,79,79, .2)' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        },
                        shadowColor: 'rgba(128, 217, 248, 1)',
                        // shadowColor: 'rgba(255, 255, 255, 1)',
                        shadowOffsetX: -2,
                        shadowOffsetY: 2,
                        shadowBlur: 10
                    },
                    emphasis: {
                        areaColor: '#389BB7',
                        borderWidth: 0
                    }
                }
            },
            series: [
                {
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    //波纹效果
                    rippleEffect: {
                        period: 2,
                        brushType: 'stroke',
                        scale: 3
                    },
                    label: {
                        normal: {
                            show: true,
                            color: '#ffffff',
                            position: 'right',
                            formatter: '{b}'
                        }
                    },
                    //终点形象
                    symbol: 'circle',
                    //圆点大小
                    symbolSize: function(val) {
                        return val[2] / 8;
                    },
                    itemStyle: {
                        normal: {
                            show: true
                        }
                    },
                    data: [

                    ]
                },
                /*{
                    name: 'iphone3',
                    type: 'map',
                    mapType: 'shenzhen',
                    roam: true,
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data:[
                        {name: '南山区',value: randomData() },
                        {name: '宝安区',value: randomData() },
                        {name: '福田区',value: randomData() },
                        {name: '罗湖区',value: randomData() },
                        {name: '龙华区',value: randomData() },
                        {name: '光明区',value: randomData() },
                        {name: '龙岗区',value: randomData() },
                        {name: '坪山区',value: randomData() },
                        {name: '盐田区',value: randomData() },
                        {name: '大鹏区',value: randomData() },
                    ]
                },*/
            ]
        };
        myChart.setOption(option);
    })


    function randomData() {
        return Math.round(Math.random()*1000);
    }


    //-----------------------------------------核心指标-----------------------------------------------start

    $.ajax({
        type: "POST",
        url: "/indexValue/findIndexValue",
        data: {indexId:"1", beginDate:"201705", endDate:"201806"},
        success: function(resp){
            var data = JSON.parse(resp.replace(/'/g,""));
            if (data.flag == "1"){
                result = data.result[0];
                draw(result);
            }else {
                toastr.warning("数据加载失败");
            }
        }
    });

    function getTimeList(data) {
        var timeList = [];
        for (var item in data){
            if (item.length == 4 ){
                for (var time in data[item]){
                    timeList.push( item.substring(2,4) + "." + time);
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
                        var time =  item.substring(2,4) + "." + ret;
                        if (time == timeList[i]){
                            dataList.push(data[item][ret]);
                            break;
                        }
                    }
                }
            }
        }
        return dataList;
    }

    function draw(result) {
        console.log(result)
        timeList = getTimeList(result);
        myChart = echarts.init(document.getElementById('index_01'));
        graphValue = getDataList(result,timeList);
        var maxValue = Math.max.apply(null,graphValue);
        var minValue = Math.min.apply(null,graphValue);
        var maxyValue = result.INDEX_LINE4 > maxValue ? result.INDEX_LINE4  : maxValue;
        var minyValue = result.INDEX_LINE1 < minValue ? result.INDEX_LINE1  : minValue;
        var point = getMarkPoin(timeList, graphValue, result.INDEX_LINE4);
        option = {
            /*title: {
                text: result.INDEX_NAME,
                left: '50%',
                textAlign: 'center',
                textStyle:{fontSize:'22'},
            },*/
            animationDuration:1000,
            /*tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#ddd'
                    }
                },
                formatter: result.INDEX_TYPE==1?'{b},{c}':'{b},{c}%',
                backgroundColor: 'rgba(57,174,245,0.8)',
                padding: [15, 30],
                textStyle: {
                    color: '#ffffff',
                },
                extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.2)'
            },*/
            grid: [
                {x: '7%', y: '7%',top:30, width: '83%'},
            ],
            legend: {
                right: 20,
                orient: 'vertical',
                //data:['sss']
            },
            visualMap: {
                top: 5,
                right: 10,
                orient:'horizontal',
                precision:1,
                textStyle:{
                    color:"#ffffff"
                },
                pieces: [{
                    //gt: 0,
                    lte: result.INDEX_LINE1,
                    color: '#1c84c6'
                }, /*{
                    gt: result.INDEX_LINE1,
                    lte: result.INDEX_LINE2,
                    color: '#23c6c8'
                }, {
                    gt: result.INDEX_LINE2,
                    lte: result.INDEX_LINE3,
                    color: '#1ab394'
                }, */{
                    gt: result.INDEX_LINE1,
                    lte: result.INDEX_LINE4,
                    color: '#f7a54a'
                }, {
                    gt: result.INDEX_LINE4,
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
                /*splitLine: {
                    show: true,
                    interval: '2',
                    lineStyle: {
                        color: ['#eeeeee']
                    }
                },*/
                /*splitArea:{
                    show:true,
                    interval:2,
                    areaStyle:{
                        color:['rgba(250,250,250,0)','#f6f6f6']
                    },
                },*/
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#ffffff'
                    },
                    onZero:false,
                },
                axisLabel: {
                    margin: 10,
                    color:'#ffffff',
                    fontSize: 12,
                    rotate: 45,
                }
            },
            yAxis: {
                type: 'value',
                splitLine: {
                    show:false,
                    //interval: 40,
                    /*lineStyle: {
                        color: ['#eeeeee']
                    }*/
                },
                /*splitArea:{
                    show:false,
                    interval:3,
                },*/
                max: parseInt(maxyValue > 0 ? maxyValue*1.1 : maxyValue * 0.9),
                min: parseInt(minyValue > 0 ? minyValue*0.9 : minyValue * 1.1),
                //splitNumber: 12,
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#ffffff'
                    }
                },
                axisLabel: {
                    show:false,
                    /*margin: 10,
                    formatter: result.INDEX_TYPE == '1'? '{value}':'{value} %',
                    color:'#666',
                    fontSize:14,*/
                }
            },
            series: [
                {
                    type: 'line',
                    smooth: true,
                    symbolSize: 10,
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
                            /*normal: {
                                formatter: result.INDEX_TYPE == '1' ? '{b}:{c}' : '{b}:{c}%',
                            }*/
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
                            /*{
                                yAxis: result.INDEX_LINE2,
                                name: '合理区下限',
                                itemStyle: {
                                    normal: {
                                        color: "#666666",
                                    }
                                }
                            },
                            {
                                yAxis: result.INDEX_LINE3,
                                name: '合理区上限',
                                itemStyle: {
                                    normal: {
                                        color: "#666666",
                                    }
                                }
                            },*/
                            {
                                yAxis: result.INDEX_LINE4,
                                name: '过热区下限',
                                itemStyle: {
                                    normal: {
                                        color: "#666666",
                                    }
                                }
                            },
                        ]
                    },
                    /*markPoint: {
                        symbolSize:[100,50],
                        animation:3000,
                        symbolOffset: [0, '-55%'],
                        symbol:'path://M95.36,32.44H54.61L50,38.684l-4.61-6.244H4.64c-1.909,0-3.457-1.548-3.457-3.457V5.002c0-1.909,1.548-3.457,3.457-3.457h90.72c1.909,0,3.457,1.548,3.457,3.457v23.981C98.817,30.892,97.269,32.44,95.36,32.44z',
                        itemStyle:{
                            normal:{
                                color:'#2f4050',
                                opacity:0.9,
                                borderType:"solid",
                                borderColor:'#fff',
                                borderWidth:'1',
                                //shadowColor:'#aaa',
                                //ShadowBlur:'1',
                                //shadowOffsetX:'2',
                                //shadowOffsetY:'1'
                            }
                        },
                        label: {
                            normal: {
                                show: true,
                                formatter: result.INDEX_TYPE == '1'? '{c}':'{c}%',
                                position: 'inside', //值显示
                                padding:[25,20,30,20],
                                color:'#fff',
                                fontSize:'13'
                            }
                        },
                        data: point.markPoint,
                    },*/
                    lineStyle: {
                        normal: {
                            width: 4
                        }
                    }
                },
                {
                    type: 'effectScatter',
                    symbolSize: 20,
                    data: point.effectPoint,
                    z:999
                }
            ]
        };
        myChart.setOption(option);
    }

    function getMarkPoin(timeList, graphValue ,refer) {
        var obj = {};
        var array = [];
        var effectArray = [];
        var maxx = 0, maxy = 0;
        var max = Math.max.apply(null,graphValue);
        for (var i = 0; i < graphValue.length; i++) {
            if (max == graphValue[i]){
                maxx = timeList[i];
                maxy = graphValue[i];
            }
        }
        array.push(
            {
                name: '最大值',
                value: maxx+","+parseFloat(maxy).toFixed(2),
                xAxis: maxx,
                yAxis: maxy
            }
        );
        effectArray.push([maxx,maxy]);
        array.push(
            {
                name: '最近值',
                value: timeList[timeList.length-1]+","+parseFloat(graphValue[graphValue.length-1]).toFixed(2),
                xAxis: timeList[timeList.length-1],
                yAxis: graphValue[graphValue.length-1]
            }
        );
        effectArray.push([timeList[timeList.length-1],graphValue[graphValue.length-1]]);

        for (var i = 0; i < graphValue.length; i++) {
            //y1<refer , y2 > refer
            if (refer > graphValue[i] && refer < graphValue[i+1]){
                array.push(
                    {
                        name:'上升值',
                        value: timeList[i+1]+","+parseFloat(graphValue[i+1]).toFixed(2),
                        xAxis: timeList[i+1],
                        yAxis: graphValue[i+1]
                    }
                );
                effectArray.push([timeList[i+1],graphValue[i+1]]);
            }
            if (refer < graphValue[i] && refer > graphValue[i+1]){
                array.push(
                    {
                        name:'下降值',
                        value: timeList[i]+","+parseFloat(graphValue[i]).toFixed(2),
                        xAxis: timeList[i],
                        yAxis: graphValue[i]
                    }
                );
                effectArray.push([timeList[i],graphValue[i]])
            }
        }
        obj.markPoint = array;
        obj.effectPoint = effectArray;
        return obj;
    }

    //-----------------------------------------核心指标-----------------------------------------------end







})