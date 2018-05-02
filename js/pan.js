
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('skillpan'));

        // 指定图表的配置项和数据
       var option = {
    backgroundColor: '#fff',

    title: {
        text: '项目中使用技术比例',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#000'
        }
    },

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series : [
        {
            name:'前端技能',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:380, name:'HTML5'},
                {value:310, name:'CSS3'},
                {value:320, name:'JavaScript'},
                {value:300, name:'jQuery'},
                {value:100, name:'Photoshop'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                normal: {
                    textStyle: {
                        color: '#000'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: '#ccc'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.3)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
