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

        var regionsStyleArray = [
            {
                normal: {
                    borderColor: 'rgba(147, 235, 248, 1)',
                    borderWidth: 1,
                    areaColor: 'rgba(3,56,193, .5)',
                    shadowColor: 'rgba(255, 255, 255, 1)',
                    shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 10
                },
                emphasis: {
                    areaColor: '#0338c1',
                    borderWidth: 0
                }
            },
            {
                normal: {
                    borderColor: 'rgba(147, 235, 248, 1)',
                    borderWidth: 1,
                    areaColor: 'rgba(70,177,190, .5)',
                    shadowColor: 'rgba(255, 255, 255, 1)',
                    shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 10
                },
                emphasis: {
                    areaColor: '#46b1be',
                    borderWidth: 0
                }
            },
            {
                normal: {
                    borderColor: 'rgba(147, 235, 248, 1)',
                    borderWidth: 1,
                    areaColor: 'rgba(39,120,199, .5)',
                    //shadowColor: 'rgba(128, 217, 248, 1)',
                    shadowColor: 'rgba(255, 255, 255, 1)',
                    shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 10
                },
                emphasis: {
                    areaColor: '#2778c7',
                    borderWidth: 0
                }
            },
            {
                normal: {
                    borderColor: 'rgba(147, 235, 248, 1)',
                    borderWidth: 1,
                    areaColor: 'rgba(36,38,76, .5)',
                    //shadowColor: 'rgba(128, 217, 248, 1)',
                    shadowColor: 'rgba(255, 255, 255, 1)',
                    shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 10
                },
                emphasis: {
                    areaColor: '#24264c',
                    borderWidth: 0
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
            graphic: [
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
                                text: '65324',
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
                                text: '1324',
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
                                text: '65324',
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
                                text: '1324',
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
            ],
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
                roam: false,
                regions: [
                    {name: '南山区', itemStyle: regionsStyleArray[1]},
                    {name: '福田区', itemStyle: regionsStyleArray[1]},
                    {name: '罗湖区', itemStyle: regionsStyleArray[1]},
                    {name: '宝安区', itemStyle: regionsStyleArray[3]},
                    {name: '盐田区', itemStyle: regionsStyleArray[3]},
                    {name: '龙华区', itemStyle: regionsStyleArray[3]},
                    {name: '龙岗区', itemStyle: regionsStyleArray[2]},
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
                            name:'新房:54111(75套)',
                            value:[113.917345, 22.693843]
                        },
                        {
                            name:'新房:54111(75套)',
                            value:[113.997345, 22.793843]
                        },
                        {
                            name:'新房:54111(75套)',
                            value:[114.217345, 22.603843]
                        },
                        {
                            name:'新房:54111(75套)',
                            value:[114.327345, 22.749843]
                        },
                        {
                            name:'新房:54111(75套)',
                            value:[114.437345, 22.702843]
                        },
                        {
                            name:'新房:54111(75套)',
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
                            name:'二手房:54111(75套)',
                            value:[113.917345, 22.693843]
                        },
                        {
                            name:'二手房:54111(75套)',
                            value:[113.997345, 22.793843]
                        },
                        {
                            name:'二手房:54111(75套)',
                            value:[114.217345, 22.603843]
                        },
                        {
                            name:'二手房:54111(75套)',
                            value:[114.327345, 22.749843]
                        },
                        {
                            name:'二手房:54111(75套)',
                            value:[114.437345, 22.702843]
                        },
                        {
                            name:'二手房:54111(75套)',
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
    })


    function randomData() {
        return Math.round(Math.random()*1000);
    }


    //-----------------------------------------核心指标-----------------------------------------------start

    var coreItemArray = [
        {params :{indexId:"1", beginDate:"201705", endDate:"201806"}, id:'index_01',type:1,size:1},
        {params :{indexId:"2", beginDate:"201705", endDate:"201806"}, id:'index_02',type:1,size:1},
        {params :{indexId:"3", beginDate:"201705", endDate:"201806"}, id:'index_03',type:1,size:1},
        {params :{indexId:"10", beginDate:"201605", endDate:"201705"}, id:'index_11',type:1,size:1},
        {params :{indexId:"4", beginDate:"201705", endDate:"201806"}, id:'index_04',type:2,size:1},
        {params :{indexId:"5", beginDate:"201705", endDate:"201806"}, id:'index_05',type:2,size:1},
        {params :{indexId:"6", beginDate:"201705", endDate:"201806"}, id:'index_06',type:2,size:1},
        {params :{indexId:"7", beginDate:"201705", endDate:"201806"}, id:'index_07',type:2,size:1},
        {params :{indexId:"8", beginDate:"201705", endDate:"201806"}, id:'index_08',type:2,size:1},
        {params :{indexId:"9", beginDate:"201705", endDate:"201806"}, id:'index_09',type:2,size:1},
        {params :{indexId:"10", beginDate:"201705", endDate:"201806"}, id:'index_10',type:2,size:1},
        {params :{indexId:"2", beginDate:"201605", endDate:"201706"}, id:'index_12',type:2,size:1},
        /*{params :{indexId:"1", beginDate:"201705", endDate:"201806"}, id:'index_01'},
        {params :{indexId:"1", beginDate:"201705", endDate:"201806"}, id:'index_01'}*/
    ];


    coreItemArray.map(function (obj) {
        coreRequest(obj)
    })

    function coreRequest(obj) {
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

    function coreIndexDraw(result, obj) {
        timeList = getTimeList(result);
        myChart = echarts.init(document.getElementById(obj.id));
        graphValue = getDataList(result,timeList);
        var maxValue = Math.max.apply(null,graphValue);
        var minValue = Math.min.apply(null,graphValue);
        var maxyValue = result.INDEX_LINE2 > maxValue ? result.INDEX_LINE2  : maxValue;
        var minyValue = result.INDEX_LINE1 < minValue ? result.INDEX_LINE1  : minValue;
        var point = getMarkPoin(timeList, graphValue, result.INDEX_LINE2);
        option = {
            animationDuration:1000,
            grid: [
                {x: '7%', y: '7%',top:'5%', tottom:'3%',width: '70%'},
            ],
            legend: {
                right: 20,
                orient: 'vertical',
            },
            visualMap: {
                top:15,
                right: 10,
                //orient:'vertical',
                precision:1,
                show:false,
                // itemHeight:10,
                // itemWidth:40,
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
                    color: '#1ab394'
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
                    fontSize: 10*obj.size,
                    rotate: 45,
                }
            },
            yAxis: {
                type: 'value',
                splitLine: {
                    show:false,
                },
                max: maxyValue+0.5,//parseInt(maxyValue > 0 ? maxyValue*1.02 : maxyValue * 0.98),
                min: minyValue-0.5,//parseInt(minyValue > 0 ? minyValue*0.98 : minyValue * 1.02),
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
                    top:10*obj.size,
                    left:350*obj.size,
                    z: 100*obj.size,
                    children: [
                        {
                            type:'polygon'  ,
                            left: 20*obj.size,
                            shape:{
                                points:[
                                    [0,0], [60*obj.size, 0], [60*obj.size,138*obj.size], [0, 138*obj.size]
                                ]
                            },
                            style:{
                                fill:'#09295d',
                            },
                        },
                        {
                            type:'polygon'  ,
                            left: 42*obj.size,
                            top: 10*obj.size,
                            shape:{
                                points:[
                                    [0,0], [15*obj.size, 0], [15*obj.size,7*obj.size], [0, 7*obj.size]
                                ]
                            },
                            z:120,
                            style:{
                                fill:'#e1491d',
                            },
                        },
                        {
                            type:'polygon'  ,
                            left: 42*obj.size,
                            top: 49*obj.size,
                            shape:{
                                points:[
                                    [0,0], [15*obj.size, 0], [15*obj.size,7*obj.size], [0, 7*obj.size]
                                ]
                            },
                            z:120,
                            style:{
                                fill:'#1bc172',
                            },
                        },
                        {
                            type:'polygon'  ,
                            left: 42*obj.size,
                            top: 86*obj.size,
                            shape:{
                                points:[
                                    [0,0], [15*obj.size, 0], [15*obj.size,7*obj.size], [0, 7*obj.size]
                                ]
                            },
                            z:120,
                            style:{
                                fill:'#29abe2',
                            },
                        },

                        {
                            type: 'text',
                            left: 27*obj.size,
                            top: 22*obj.size,
                            z: 120,
                            style: {
                                fill: '#29abe2',
                                text: ['过热区间','  102.3'].join('\n'),
                                font: 'bold '+10*obj.size+'px Microsoft YaHei'
                            }
                        },
                        {
                            type: 'text',
                            left: 27*obj.size,
                            top: 59*obj.size,
                            z: 120,
                            style: {
                                fill: '#29abe2',
                                text: ['合理区间','   82.3'].join('\n'),
                                font: 'bold '+10*obj.size+'px Microsoft YaHei'
                            }
                        },
                        {
                            type: 'text',
                            left: 27*obj.size,
                            top: 97*obj.size,
                            z: 120,
                            style: {
                                fill: '#29abe2',
                                text: ['过冷区间','   60.5'].join('\n'),
                                font: 'bold '+10*obj.size+'px Microsoft YaHei'
                            }
                        },
                    ]
                },
            ],
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
                    lineStyle: {
                        normal: {
                            width: 4
                        }
                    }
                },
                {
                    type: 'effectScatter',
                    symbolSize: 15,
                    data: point.effectPoint,
                    z:999
                }
            ]
        };
        myChart.setOption(option);
    }
    function secondIndexDraw(result, obj) {
        timeList = getTimeList(result);
        myChart = echarts.init(document.getElementById(obj.id));
        graphValue = getDataList(result,timeList);
        var maxValue = Math.max.apply(null,graphValue);
        var minValue = Math.min.apply(null,graphValue);
        var maxyValue = result.INDEX_LINE2 > maxValue ? result.INDEX_LINE2  : maxValue;
        var minyValue = result.INDEX_LINE1 < minValue ? result.INDEX_LINE1  : minValue;
        var point = getMarkPoin(timeList, graphValue, result.INDEX_LINE2);
        option = {
            animationDuration:1000,
            grid: [
                {x: '10%', y: '10%',top:15,bottom:100, width: '80%'},
            ],
            legend: {
                right: 20,
                orient: 'vertical',
            },
            visualMap: {
                top:15,
                right: 10,
                orient:'horizontal',
                precision:1,
                show: false,
                // itemHeight:10,
                // itemWidth:40,
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
                    color: '#1ab394'
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
                    fontSize: 10,
                    rotate: 45,
                }
            },
            yAxis: {
                type: 'value',
                splitLine: {
                    show:false,
                },
                max: maxyValue+0.5,//parseInt(maxyValue > 0 ? maxyValue*1.02 : maxyValue * 0.98),
                min: minyValue-0.5,//parseInt(minyValue > 0 ? minyValue*0.98 : minyValue * 1.02),
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
                            type:'polygon'  ,
                            left: 7,
                            top: 8,
                            shape:{
                                points:[
                                    [0,0], [15, 0], [15,7], [0, 7]
                                ]
                            },
                            z:120,
                            style:{
                                fill:'#e1491d',
                            },
                        },
                        {
                            type:'polygon'  ,
                            left: 75,
                            top: 8,
                            shape:{
                                points:[
                                    [0,0], [15, 0], [15,7], [0, 7]
                                ]
                            },
                            z:120,
                            style:{
                                fill:'#1bc172',
                            },
                        },
                        {
                            type:'polygon'  ,
                            left: 143,
                            top: 8,
                            shape:{
                                points:[
                                    [0,0], [15, 0], [15,7], [0, 7]
                                ]
                            },
                            z:120,
                            style:{
                                fill:'#29abe2',
                            },
                        },

                        {
                            type: 'text',
                            left: 27,
                            top: 5,
                            z: 120,
                            style: {
                                fill: '#29abe2',
                                text: ['过热区间','  102.3'].join('\n'),
                                font: 'bold 10px Microsoft YaHei'
                            }
                        },
                        {
                            type: 'text',
                            left: 95,
                            top: 5,
                            z: 120,
                            style: {
                                fill: '#29abe2',
                                text: ['合理区间','   82.3'].join('\n'),
                                font: 'bold 10px Microsoft YaHei'
                            }
                        },
                        {
                            type: 'text',
                            left: 163,
                            top: 5,
                            z: 120,
                            style: {
                                fill: '#29abe2',
                                text: ['过冷区间','   60.5'].join('\n'),
                                font: 'bold 10px Microsoft YaHei'
                            }
                        },
                    ]
                },
            ],
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
                    lineStyle: {
                        normal: {
                            width: 4
                        }
                    }
                },
                {
                    type: 'effectScatter',
                    symbolSize: 15,
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

    var barChart = echarts.init(document.getElementById('top-rate'));

    baroption = {
        //backgroundColor: '#00265f',
        title:{
            text:'全市各区成交排行',
            top:0,
            right:10,
            textStyle:{
                color:'#ffffff',
                fontSize: 14
            }
        },
        grid: {
            left: '3%',
            top: 20,
            right: 0,
            bottom: 0,
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['南山',
                '福田',
                '宝安',
                '罗湖',
                '龙华',
                '龙岗',
                '光明',
                '盐田',
                '坪山',
                '大鹏 ',
            ],
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
                }
            },
        }],
        yAxis: [{
            type: 'value',
            show: false,
        }],
        series: [{
            type: 'bar',
            data: [1, 1, 2, 2.5, 3, 4.3, 5, 5.2, 6, 7].reverse(),
            barWidth: 20, //柱子宽度
            //barGap: 1, //柱子之间间距
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
            }
        }]
    };

    barChart.setOption(baroption);

    var childChart = echarts.init(document.getElementById('bottom_rate'));

    childoption = {
        //backgroundColor: '#00265f',
        grid: {
            left: 4,
            top: 10,
            right: 0,
            bottom: '0',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            show: false,
            data: ['南山',
                '福田',
                '宝安',
                '罗湖',
                '龙华',
                '龙岗',
                '光明',
                '盐田',
                '坪山',
                '大鹏 ',
            ],
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
                    color: "#00c7ff",
                }
            },
        }],
        yAxis: [{
            type: 'value',
            show: false,
        }],
        series: [
            {
                name: '差值',
                type: 'bar',
                stack: '血压',
                barWidth:20,
                label: {
                    normal: {
                        show: false,
                        position: 'insideTop',    // 底部文字显示设置
                        color: '#333'
                    }
                },
                data: [1, 1, 2, 2.5, 3, 4.3, 5, 5.2, 6, 7],
                itemStyle: {
                    normal: {
                        color: 'transparent'        // 底部设置为透明，就可以不显示了
                    }
                }
            }, {
                name: '差值',
                type: 'bar',
                stack: '血压',
                barWidth: 30,
                label: {
                    normal: {
                        show: false,
                        //position: 'top'
                    }
                },
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#006388'
                        }, {
                            offset: 1,
                            color: '#1197e6'
                        }]),
                        opacity: 1,
                    }
                },
                data: [14, 14, 13, 12.5, 12, 10.7, 10, 9.8, 9, 8]            // 显示的这一部分柱状图，应该为血压最大值-最小值的差值
            },
        ]
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
        context.arc(centerX, centerY, 31 , -Math.PI/2, -Math.PI/2 +obj.value*rad, false); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
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
    /*function drawFrame(size){
        context.clearRect(0, 0, canvas.width, canvas.height);
        whiteCircle();
        blueCircle(25.1);
    };*/
    var idArray = [
        {id:'new_01',value:15,color:'#00fcae'},
        {id:'new_02',value:25,color:'#00fcae'},
        {id:'new_03',value:35,color:'#00fcae'},
        {id:'new_04',value:45,color:'#00fcae'},
        {id:'second_01',value:15,color:'#1197e6'},
        {id:'second_02',value:25,color:'#1197e6'},
        {id:'second_03',value:35,color:'#1197e6'},
        {id:'second_04',value:85,color:'#1197e6'},
    ];

    idArray.map(function (obj) {
        var canvas = document.getElementById(obj.id),  //获取canvas元素
            context = canvas.getContext('2d'),  //获取画图环境，指明为2d
            centerX = canvas.width/2,   //Canvas中心点x轴坐标
            centerY = canvas.height/2,  //Canvas中心点y轴坐标
            rad = Math.PI*2/100, //将360度分成100份，那么每一份就是rad度
            speed = 0.1; //加载的快慢就靠它了
            context.clearRect(0, 0, canvas.width, canvas.height);
            whiteCircle(context,centerX,centerY);
            blueCircle(context,obj,centerX,centerY,rad);
    })
    //}

    function testAnim(x) {
        $('.animationSandbox').map(function(){
            $(this).removeClass().addClass(x + ' animated num-box animationSandbox').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(this).removeClass(x +   ' animated');
            });
        })
    };

    window.setInterval(function(){
        testAnim("flip");
    },2000)


    //-------------------放大镜---------------
    $(".magnifying").click(function(){
        $(".bg-pup").show();
        /*var thisH = $(this).siblings(".echar-content").outerHeight(true)*2;
        var thisR = thisH/$(this).siblings(".echar-content").outerHeight(true);
        var thisW = $(this).siblings(".echar-content").outerWidth(true)*thisR;
        console.log(thisH,thisW);*/
        //var cloneDIV = $(this).siblings(".echar-content").clone().prependTo($(".pup-content"))
        // $(".pup-content").append()
        $(".pup-content").css({
            height: 336 ,
            width: 890 ,
            display: 'block',
            marginTop: -168 ,
            marginLeft: -445
        })

        var indexId = $(this).siblings(".echar-content").attr("indexId");
        var indexInfo = {params :{indexId:indexId, beginDate:"201705", endDate:"201806"}, id:'magnifyEcharts',type:1,size:2};
        coreRequest(indexInfo)
    })


    //--------------------大屏看板------------------------

    $("#bigScreen").click(function () {
        requestFullScreen();
    })

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
    }

})