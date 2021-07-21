
//---------------------------------> Sales Bar Graph Report -------------------------------------------

function SalesGenYNbar(data){
    $('#SalesBarParam').hide();
    $('#SalesBarGraph').show();
    var _data = jQuery.parseJSON(data);
    var _get = '';
    var lup=0;
    var _qno = [];
    var _yes = [];
    var _no = [];
    var i = 0;
    var qList = '';

    $.each(_data,function(){
        _qno[i] = 'Q' + _data[i]['Qno'];
        _yes[i] = _data[i]['YesPercent'];
        _no[i] = _data[i]['NoPercent'];
        i++;
    });

    Chart.plugins.register({
        beforeDraw: function(chartInstance) {
          var ctx = chartInstance.chart.ctx;
          ctx.fillStyle = "white";
          ctx.fillRect(0, 0, chartInstance.chart.width, chartInstance.chart.height);
        }
    });

    var ctx = document.getElementById('myChart').getContext('2d');
    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#000';

    var massPopChart = new Chart(ctx, {
      type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:_qno,
        datasets:[{
          label:'YES %',
          data:_yes,
          //backgroundColor:'green',
          backgroundColor:
            'RGB(139, 0, 0)'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },
          {
          label:'NO %',
          data:_no,
          //backgroundColor:'green',
          backgroundColor:
            '#FFC0CB'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:$('#inpDtFrm').val() + ' to ' + $('#inpDtTo').val() + ' Sales Survey Bar Graph Report',
          fontSize:25
        },
        legend:{
          display:true,
          position:'bottom',
          labels:{
            fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });
}

function SalesGenCommBar(data){
    $('#SalesBarParam').hide();
    $('#SalesBarGraph').show();
    var _data = jQuery.parseJSON(data);
    var _get = '';
    var lup=0;
    var _qno = [];
    var _yes = [];
    var _no = [];
    var i = 0;
    var qList = '';

    $.each(_data,function(){
        _qno[i] = 'Q' + _data[i]['Qno'];
        _yes[i] = _data[i]['CommPercent'];
        _no[i] = _data[i]['NoCommPercent'];
        i++;
    });

    Chart.plugins.register({
        beforeDraw: function(chartInstance) {
          var ctx = chartInstance.chart.ctx;
          ctx.fillStyle = "white";
          ctx.fillRect(0, 0, chartInstance.chart.width, chartInstance.chart.height);
        }
    });

    var ctx = document.getElementById('myChart').getContext('2d');
    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#000';

    var massPopChart = new Chart(ctx, {
      type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:_qno,
        datasets:[{
          label:'WITH VOC %',
          data:_yes,
          //backgroundColor:'green',
          backgroundColor:
            'RGB(139, 0, 0)'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },
          {
          label:'WITHOUT %',
          data:_no,
          //backgroundColor:'green',
          backgroundColor:
            '#FFC0CB'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:$('#inpDtFrm').val() + ' to ' + $('#inpDtTo').val() + ' Sales Survey Bar Graph Report',
          fontSize:25
        },
        legend:{
          display:true,
          position:'bottom',
          labels:{
            fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });
}

function SalesGenPaeBar(data){
    $('#SalesBarParam').hide();
    $('#SalesBarGraph').show();
    var _data = jQuery.parseJSON(data);
    var _get = '';
    var lup=0;
    var _qno = [];
    var _ex = [];
    var _ave = [];
    var _poor = [];
    var i = 0;
    var qList = '';

    $.each(_data,function(){
        _qno[i] = 'Q' + _data[i]['Qno'];
        _ex[i] = _data[i]['ExcePercent'];
        _ave[i] = _data[i]['AveragePercent'];
        _poor[i] = _data[i]['PoorPercent'];
        i++;
    });

    Chart.plugins.register({
        beforeDraw: function(chartInstance) {
          var ctx = chartInstance.chart.ctx;
          ctx.fillStyle = "white";
          ctx.fillRect(0, 0, chartInstance.chart.width, chartInstance.chart.height);
        }
    });

    var ctx = document.getElementById('myChart').getContext('2d');
    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#000';

    var massPopChart = new Chart(ctx, {
      type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:_qno,
        datasets:[{
          label:'EXCELLENT %',
          data:_ex,
          //backgroundColor:'green',
          backgroundColor:
            'RGB(139, 0, 0)'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },
          {
          label:'AVERAGE %',
          data:_ave,
          //backgroundColor:'green',
          backgroundColor:
            '#FFC0CB'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },
          {
          label:'POOR %',
          data:_poor,
          //backgroundColor:'green',
          backgroundColor:
            '#FF4500'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:$('#inpDtFrm').val() + ' to ' + $('#inpDtTo').val() + ' Sales Survey Bar Graph Report',
          fontSize:25
        },
        legend:{
          display:true,
          position:'bottom',
          labels:{
            fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });
}

function SalesGenEPBar(data){
    $('#SalesBarParam').hide();
    $('#SalesBarGraph').show();
    var _data = jQuery.parseJSON(data);
    var _get = '';
    var lup=0;
    var _qno = [];
    var _ex = [];
    var _poor = [];
    var i = 0;
    var qList = '';

    $.each(_data,function(){
        _qno[i] = 'Q' + _data[i]['Qno'];
        _ex[i] = _data[i]['ExcePercent'];
        _poor[i] = _data[i]['PoorPercent'];
        i++;
    });

    Chart.plugins.register({
        beforeDraw: function(chartInstance) {
          var ctx = chartInstance.chart.ctx;
          ctx.fillStyle = "white";
          ctx.fillRect(0, 0, chartInstance.chart.width, chartInstance.chart.height);
        }
    });

    var ctx = document.getElementById('myChart').getContext('2d');
    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#000';

    var massPopChart = new Chart(ctx, {
      type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:_qno,
        datasets:[{
          label:'EXCELLENT %',
          data:_ex,
          //backgroundColor:'green',
          backgroundColor:
            'RGB(139, 0, 0)'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },
          {
          label:'POOR %',
          data:_poor,
          //backgroundColor:'green',
          backgroundColor:
            '#FFC0CB'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:$('#inpDtFrm').val() + ' to ' + $('#inpDtTo').val() + ' Sales Survey Bar Graph Report',
          fontSize:25
        },
        legend:{
          display:true,
          position:'bottom',
          labels:{
            fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });
}

function SalesGenOSBar(data){
    $('#SalesBarParam').hide();
    $('#SalesBarGraph').show();
    var _data = jQuery.parseJSON(data);
    var _get = '';
    var lup=0;
    var _qno = [];
    var _vs = [];
    var _s = [];
    var _nsnd = [];
    var _d = [];
    var _vd = [];
    var i = 0;
    var qList = '';

    $.each(_data,function(){
        _qno[i] = 'Q' + _data[i]['Qno'];
        _vs[i] = _data[i]['VSPercent'];
        _s[i] = _data[i]['SPercent'];
        _nsnd[i] = _data[i]['NSNDPercent'];
        _d[i] = _data[i]['DPercent'];
        _vd[i] = _data[i]['VDPercent'];
        i++;
    });

    Chart.plugins.register({
        beforeDraw: function(chartInstance) {
          var ctx = chartInstance.chart.ctx;
          ctx.fillStyle = "white";
          ctx.fillRect(0, 0, chartInstance.chart.width, chartInstance.chart.height);
        }
    });

    var ctx = document.getElementById('myChart').getContext('2d');
    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#000';

    var massPopChart = new Chart(ctx, {
      type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:_qno,
        datasets:[{
          label:'Very Satisfied %',
          data:_vs,
          //backgroundColor:'green',
          backgroundColor:
            'RGB(139, 0, 0)'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },
          {
          label:'Satisfied %',
          data:_s,
          //backgroundColor:'green',
          backgroundColor:
            'RGB(178, 34, 34)'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },
          {
          label:'Neither Satisfied nor Dissatisfied %',
          data:_nsnd,
          //backgroundColor:'green',
          backgroundColor:
            'RGB(255, 0, 0)'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },
        {
          label:'Dissatisfied %',
          data:_d,
          //backgroundColor:'green',
          backgroundColor:
            'RGB(220, 20, 60)'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },
        {
          label:'Very Dissatisfied %',
          data:_vd,
          //backgroundColor:'green',
          backgroundColor:
            'RGB(255, 160, 122)'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }
        ]
      },
      options:{
        title:{
          display:true,
          text:$('#inpDtFrm').val() + ' to ' + $('#inpDtTo').val() + ' Sales Survey Bar Graph Report',
          fontSize:25
        },
        legend:{
          display:true,
          position:'right',
          labels:{
            fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });
}

function SalesGenNPSBar(data){
    $('#SalesBarParam').hide();
    $('#SalesBarGraph').show();
    var _data = jQuery.parseJSON(data);
    var _get = '';
    var lup=0;
    var _qno = [];
    var _p0 = [];
    var _p1 = [];
    var _p2 = [];
    var _p3 = [];
    var _p4 = [];
    var _p5 = [];
    var _p6 = [];
    var _p7 = [];
    var _p8 = [];
    var _p9 = [];
    var _p10 = [];
    var i = 0;
    var qList = '';

    $.each(_data,function(){
        _qno[i] = 'Q' + _data[i]['Qno'];
        _p10[i] = _data[i]['Percent10'];
        _p9[i] = _data[i]['Percent9'];
        _p8[i] = _data[i]['Percent8'];
        _p7[i] = _data[i]['Percent7'];
        _p6[i] = _data[i]['Percent6'];
        _p5[i] = _data[i]['Percent5'];
        _p4[i] = _data[i]['Percent4'];
        _p3[i] = _data[i]['Percent3'];
        _p2[i] = _data[i]['Percent2'];
        _p1[i] = _data[i]['Percent1'];
        _p0[i] = _data[i]['Percent0'];
        i++;
    });

    Chart.plugins.register({
        beforeDraw: function(chartInstance) {
          var ctx = chartInstance.chart.ctx;
          ctx.fillStyle = "white";
          ctx.fillRect(0, 0, chartInstance.chart.width, chartInstance.chart.height);
        }
    });

    var ctx = document.getElementById('myChart').getContext('2d');
    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#000';

    var massPopChart = new Chart(ctx, {
      type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:_qno,
        datasets:[{
          label:'10 %',
          data:_p10,
          //backgroundColor:'green',
          backgroundColor:
            'RGB(139, 0, 0)'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },
          {
          label:'9 %',
          data:_p9,
          //backgroundColor:'green',
          backgroundColor:
            'RGB(178, 34, 34)'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },
          {
          label:'8 %',
          data:_p8,
          //backgroundColor:'green',
          backgroundColor:
            'RGB(255, 0, 0)'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },
        {
          label:'7 %',
          data:_p7,
          //backgroundColor:'green',
          backgroundColor:
            'RGB(220, 20, 60)'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },
        {
          label:'6 %',
          data:_p6,
          //backgroundColor:'green',
          backgroundColor:
            'RGB(255, 160, 122)'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },
        {
          label:'5 %',
          data:_p5,
          //backgroundColor:'green',
          backgroundColor:
            'RGB(233, 150, 122)'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },
        {
          label:'4 %',
          data:_p4,
          //backgroundColor:'green',
          backgroundColor:
            'RGB(250, 128, 114)'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },
        {
          label:'3 %',
          data:_p3,
          //backgroundColor:'green',
          backgroundColor:
            'RGB(240, 128, 128)'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },
        {
          label:'2 %',
          data:_p2,
          //backgroundColor:'green',
          backgroundColor:
            'RGB(205, 92, 92)'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },
        {
          label:'1 %',
          data:_p1,
          //backgroundColor:'green',
          backgroundColor:
            'RGB(199, 21, 133)'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },
        {
          label:'0 %',
          data:_p0,
          //backgroundColor:'green',
          backgroundColor:
            'RGB(255, 20, 147)'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:$('#inpDtFrm').val() + ' to ' + $('#inpDtTo').val() + ' Sales Survey Bar Graph Report',
          fontSize:25
        },
        legend:{
          display:true,
          position:'right',
          labels:{
            fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });
}

//---------------------------------> Service Bar Graph Report -------------------------------------------

function ServiceGenYNbar(data){
    $('#SalesBarParam').hide();
    $('#SalesBarGraph').show();
    var _data = jQuery.parseJSON(data);
    var _get = '';
    var lup=0;
    var _qno = [];
    var _yes = [];
    var _no = [];
    var i = 0;
    var qList = '';

    $.each(_data,function(){
        _qno[i] = 'Q' + _data[i]['Qno'];
        _yes[i] = _data[i]['YesPercent'];
        _no[i] = _data[i]['NoPercent'];
        i++;
    });

    Chart.plugins.register({
        beforeDraw: function(chartInstance) {
          var ctx = chartInstance.chart.ctx;
          ctx.fillStyle = "white";
          ctx.fillRect(0, 0, chartInstance.chart.width, chartInstance.chart.height);
        }
    });

    var ctx = document.getElementById('myChart').getContext('2d');
    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#000';

    var massPopChart = new Chart(ctx, {
      type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:_qno,
        datasets:[{
          label:'YES %',
          data:_yes,
          //backgroundColor:'green',
          backgroundColor:
            'RGB(139, 0, 0)'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },
          {
          label:'NO %',
          data:_no,
          //backgroundColor:'green',
          backgroundColor:
            '#FFC0CB'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:$('#inpDtFrm').val() + ' to ' + $('#inpDtTo').val() + ' Service Survey Bar Graph Report',
          fontSize:25
        },
        legend:{
          display:true,
          position:'bottom',
          labels:{
            fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });
}

function ServiceGenCommBar(data){
    $('#SalesBarParam').hide();
    $('#SalesBarGraph').show();
    var _data = jQuery.parseJSON(data);
    var _get = '';
    var lup=0;
    var _qno = [];
    var _yes = [];
    var _no = [];
    var i = 0;
    var qList = '';

    $.each(_data,function(){
        _qno[i] = 'Q' + _data[i]['Qno'];
        _yes[i] = _data[i]['CommPercent'];
        _no[i] = _data[i]['NoCommPercent'];
        i++;
    });

    Chart.plugins.register({
        beforeDraw: function(chartInstance) {
          var ctx = chartInstance.chart.ctx;
          ctx.fillStyle = "white";
          ctx.fillRect(0, 0, chartInstance.chart.width, chartInstance.chart.height);
        }
    });

    var ctx = document.getElementById('myChart').getContext('2d');
    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#000';

    var massPopChart = new Chart(ctx, {
      type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:_qno,
        datasets:[{
          label:'WITH VOC %',
          data:_yes,
          //backgroundColor:'green',
          backgroundColor:
            'RGB(139, 0, 0)'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },
          {
          label:'WITHOUT %',
          data:_no,
          //backgroundColor:'green',
          backgroundColor:
            '#FFC0CB'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:$('#inpDtFrm').val() + ' to ' + $('#inpDtTo').val() + ' Service Survey Bar Graph Report',
          fontSize:25
        },
        legend:{
          display:true,
          position:'bottom',
          labels:{
            fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });
}

function ServiceGenPaeBar(data){
    $('#SalesBarParam').hide();
    $('#SalesBarGraph').show();
    var _data = jQuery.parseJSON(data);
    var _get = '';
    var lup=0;
    var _qno = [];
    var _ex = [];
    var _ave = [];
    var _poor = [];
    var i = 0;
    var qList = '';

    $.each(_data,function(){
        _qno[i] = 'Q' + _data[i]['Qno'];
        _ex[i] = _data[i]['ExcePercent'];
        _ave[i] = _data[i]['AveragePercent'];
        _poor[i] = _data[i]['PoorPercent'];
        i++;
    });

    Chart.plugins.register({
        beforeDraw: function(chartInstance) {
          var ctx = chartInstance.chart.ctx;
          ctx.fillStyle = "white";
          ctx.fillRect(0, 0, chartInstance.chart.width, chartInstance.chart.height);
        }
    });

    var ctx = document.getElementById('myChart').getContext('2d');
    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#000';

    var massPopChart = new Chart(ctx, {
      type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:_qno,
        datasets:[{
          label:'EXCELLENT %',
          data:_ex,
          //backgroundColor:'green',
          backgroundColor:
            'RGB(139, 0, 0)'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },
          {
          label:'AVERAGE %',
          data:_ave,
          //backgroundColor:'green',
          backgroundColor:
            '#FFC0CB'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },
          {
          label:'POOR %',
          data:_poor,
          //backgroundColor:'green',
          backgroundColor:
            '#FF4500'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:$('#inpDtFrm').val() + ' to ' + $('#inpDtTo').val() + ' Service Survey Bar Graph Report',
          fontSize:25
        },
        legend:{
          display:true,
          position:'bottom',
          labels:{
            fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });
}

function ServiceGenEPBar(data){
    $('#SalesBarParam').hide();
    $('#SalesBarGraph').show();
    var _data = jQuery.parseJSON(data);
    var _get = '';
    var lup=0;
    var _qno = [];
    var _ex = [];
    var _poor = [];
    var i = 0;
    var qList = '';

    $.each(_data,function(){
        _qno[i] = 'Q' + _data[i]['Qno'];
        _ex[i] = _data[i]['ExcePercent'];
        _poor[i] = _data[i]['PoorPercent'];
        i++;
    });

    Chart.plugins.register({
        beforeDraw: function(chartInstance) {
          var ctx = chartInstance.chart.ctx;
          ctx.fillStyle = "white";
          ctx.fillRect(0, 0, chartInstance.chart.width, chartInstance.chart.height);
        }
    });

    var ctx = document.getElementById('myChart').getContext('2d');
    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#000';

    var massPopChart = new Chart(ctx, {
      type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:_qno,
        datasets:[{
          label:'EXCELLENT %',
          data:_ex,
          //backgroundColor:'green',
          backgroundColor:
            'RGB(139, 0, 0)'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },
          {
          label:'POOR %',
          data:_poor,
          //backgroundColor:'green',
          backgroundColor:
            '#FFC0CB'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:$('#inpDtFrm').val() + ' to ' + $('#inpDtTo').val() + ' Service Survey Bar Graph Report',
          fontSize:25
        },
        legend:{
          display:true,
          position:'bottom',
          labels:{
            fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });
}

function ServiceGenOSBar(data){
    $('#SalesBarParam').hide();
    $('#SalesBarGraph').show();
    var _data = jQuery.parseJSON(data);
    var _get = '';
    var lup=0;
    var _qno = [];
    var _vs = [];
    var _s = [];
    var _nsnd = [];
    var _d = [];
    var _vd = [];
    var i = 0;
    var qList = '';

    $.each(_data,function(){
        _qno[i] = 'Q' + _data[i]['Qno'];
        _vs[i] = _data[i]['VSPercent'];
        _s[i] = _data[i]['SPercent'];
        _nsnd[i] = _data[i]['NSNDPercent'];
        _d[i] = _data[i]['DPercent'];
        _vd[i] = _data[i]['VDPercent'];
        i++;
    });

    Chart.plugins.register({
        beforeDraw: function(chartInstance) {
          var ctx = chartInstance.chart.ctx;
          ctx.fillStyle = "white";
          ctx.fillRect(0, 0, chartInstance.chart.width, chartInstance.chart.height);
        }
    });

    var ctx = document.getElementById('myChart').getContext('2d');
    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#000';

    var massPopChart = new Chart(ctx, {
      type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:_qno,
        datasets:[{
          label:'Very Satisfied %',
          data:_vs,
          //backgroundColor:'green',
          backgroundColor:
            'RGB(139, 0, 0)'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },
          {
          label:'Satisfied %',
          data:_s,
          //backgroundColor:'green',
          backgroundColor:
            'RGB(178, 34, 34)'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },
          {
          label:'Neither Satisfied nor Dissatisfied %',
          data:_nsnd,
          //backgroundColor:'green',
          backgroundColor:
            'RGB(255, 0, 0)'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },
        {
          label:'Dissatisfied %',
          data:_d,
          //backgroundColor:'green',
          backgroundColor:
            'RGB(220, 20, 60)'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },
        {
          label:'Very Dissatisfied %',
          data:_vd,
          //backgroundColor:'green',
          backgroundColor:
            'RGB(255, 160, 122)'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }
        ]
      },
      options:{
        title:{
          display:true,
          text:$('#inpDtFrm').val() + ' to ' + $('#inpDtTo').val() + ' Service Survey Bar Graph Report',
          fontSize:25
        },
        legend:{
          display:true,
          position:'right',
          labels:{
            fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });
}

function ServiceGenNPSBar(data){
    $('#SalesBarParam').hide();
    $('#SalesBarGraph').show();
    var _data = jQuery.parseJSON(data);
    var _get = '';
    var lup=0;
    var _qno = [];
    var _p0 = [];
    var _p1 = [];
    var _p2 = [];
    var _p3 = [];
    var _p4 = [];
    var _p5 = [];
    var _p6 = [];
    var _p7 = [];
    var _p8 = [];
    var _p9 = [];
    var _p10 = [];
    var i = 0;
    var qList = '';

    $.each(_data,function(){
        _qno[i] = 'Q' + _data[i]['Qno'];
        _p10[i] = _data[i]['Percent10'];
        _p9[i] = _data[i]['Percent9'];
        _p8[i] = _data[i]['Percent8'];
        _p7[i] = _data[i]['Percent7'];
        _p6[i] = _data[i]['Percent6'];
        _p5[i] = _data[i]['Percent5'];
        _p4[i] = _data[i]['Percent4'];
        _p3[i] = _data[i]['Percent3'];
        _p2[i] = _data[i]['Percent2'];
        _p1[i] = _data[i]['Percent1'];
        _p0[i] = _data[i]['Percent0'];
        i++;
    });

    Chart.plugins.register({
        beforeDraw: function(chartInstance) {
          var ctx = chartInstance.chart.ctx;
          ctx.fillStyle = "white";
          ctx.fillRect(0, 0, chartInstance.chart.width, chartInstance.chart.height);
        }
    });

    var ctx = document.getElementById('myChart').getContext('2d');
    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#000';

    var massPopChart = new Chart(ctx, {
      type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:_qno,
        datasets:[{
          label:'10 %',
          data:_p10,
          //backgroundColor:'green',
          backgroundColor:
            'RGB(139, 0, 0)'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },
          {
          label:'9 %',
          data:_p9,
          //backgroundColor:'green',
          backgroundColor:
            'RGB(178, 34, 34)'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },
          {
          label:'8 %',
          data:_p8,
          //backgroundColor:'green',
          backgroundColor:
            'RGB(255, 0, 0)'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },
        {
          label:'7 %',
          data:_p7,
          //backgroundColor:'green',
          backgroundColor:
            'RGB(220, 20, 60)'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },
        {
          label:'6 %',
          data:_p6,
          //backgroundColor:'green',
          backgroundColor:
            'RGB(255, 160, 122)'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },
        {
          label:'5 %',
          data:_p5,
          //backgroundColor:'green',
          backgroundColor:
            'RGB(233, 150, 122)'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },
        {
          label:'4 %',
          data:_p4,
          //backgroundColor:'green',
          backgroundColor:
            'RGB(250, 128, 114)'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },
        {
          label:'3 %',
          data:_p3,
          //backgroundColor:'green',
          backgroundColor:
            'RGB(240, 128, 128)'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },
        {
          label:'2 %',
          data:_p2,
          //backgroundColor:'green',
          backgroundColor:
            'RGB(205, 92, 92)'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },
        {
          label:'1 %',
          data:_p1,
          //backgroundColor:'green',
          backgroundColor:
            'RGB(199, 21, 133)'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },
        {
          label:'0 %',
          data:_p0,
          //backgroundColor:'green',
          backgroundColor:
            'RGB(255, 20, 147)'
          ,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:$('#inpDtFrm').val() + ' to ' + $('#inpDtTo').val() + ' Service Survey Bar Graph Report',
          fontSize:25
        },
        legend:{
          display:true,
          position:'right',
          labels:{
            fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });
}

//--------------------------------------------------- Bar Functions End --------------------------------------------------------

$(function(){
    $('#SalesBarGraph').hide();
    
    $(document).on('click','#aGenSalesDetaRep',function(){
        var flag = 0;
        $('.inp').each(function(){
            var name='';
            name=$(this).attr('name');
      
            var val = '';
            val = $(this).val();
            if(val == ''){
                flag = 1;
               $("#LB" + name).addClass('lbWarn');
               $("#" + name).addClass('alert-danger');
            }
            else{
               $("#LB" + name).removeClass('lbWarn');
               $("#" + name).removeClass('alert-danger');
            }
        });
        
        if(flag == 0){

            var ajx='';
            ajx={
              _RepCateg:$('#inpRepCateg').val(),
              _RepCateg2:$('#inpRepCateg2').val(),
              _RepCateg3:$('#inpRepCateg3').val(),
              _RepCateg4:$('#inpRepCateg4').val(),
              _DtFrm:$('#inpDtFrm').val(),
              _DtTo:$('#inpDtTo').val()
            };
            $.ajax({
                 url:'getSalesDetaRep',
                 type:'post',
                 data:{
                     //data:window.btoa(JSON.stringify(ajx))
                    data:JSON.stringify(ajx)
                },
                 success:function(){
                    window.open('pdfSalesDetaRep'); 
                }
            });

        }
    }); 
    
    $(document).on('click','#aGenSalesBarRep',function(){
        var flag = 0;
        $('.inp').each(function(){
            var name='';
            name=$(this).attr('name');
      
            var val = '';
            val = $(this).val();
            if(val == ''){
                flag = 1;
               $("#LB" + name).addClass('lbWarn');
               $("#" + name).addClass('alert-danger');
            }
            else{
               $("#LB" + name).removeClass('lbWarn');
               $("#" + name).removeClass('alert-danger');
            }
        });
        
        if(flag == 0){
            
            var ajx='';
            ajx={
              _RepCateg:$('#inpRepCateg').val(),
              _DtFrm:$('#inpDtFrm').val(),
              _DtTo:$('#inpDtTo').val()
            };
            $.ajax({
                 url:'pdfSalesBarRep',
                 type:'get',
                 data:{
                     //data:window.btoa(JSON.stringify(ajx))
                    data:JSON.stringify(ajx)
                },
                 success:function(data){
                    switch($('#inpRepCateg').val()){
                        case "YesNo":
                            SalesGenYNbar(data);
                            break;
                        case "Comment":    
                            SalesGenCommBar(data);
                            break;
                        case "PoorAverageExcellent":    
                            SalesGenPaeBar(data);
                            break;
                        case "ExcellentPoor":
                            SalesGenEPBar(data);
                            break;
                        case "OverallSatisfaction":
                            SalesGenOSBar(data);
                            break;
                        case "NetPromoterScore":
                            SalesGenNPSBar(data);
                            break;
                    }
                }
            });
        }
    });
    
    $(document).on('click','#aGenServiceDetaRep',function(){
        var flag = 0;
        $('.inp').each(function(){
            var name='';
            name=$(this).attr('name');
      
            var val = '';
            val = $(this).val();
            if(val == ''){
                flag = 1;
               $("#LB" + name).addClass('lbWarn');
               $("#" + name).addClass('alert-danger');
            }
            else{
               $("#LB" + name).removeClass('lbWarn');
               $("#" + name).removeClass('alert-danger');
            }
        });
        
        if(flag == 0){

            var ajx='';
            ajx={
              _RepCateg:$('#inpRepCateg').val(),
              _RepCateg2:$('#inpRepCateg2').val(),
              _RepCateg3:$('#inpRepCateg3').val(),
              _RepCateg4:$('#inpRepCateg4').val(),
              _DtFrm:$('#inpDtFrm').val(),
              _DtTo:$('#inpDtTo').val()
            };
            $.ajax({
                 url:'getServiceDetaRep',
                 type:'post',
                 data:{
                     //data:window.btoa(JSON.stringify(ajx))
                    data:JSON.stringify(ajx)
                },
                 success:function(){
                    window.open('pdfServiceDetaRep','_blank'); 
                }
            });

        }
    });
    
    $(document).on('click','#aGenServiceBarRep',function(){
        var flag = 0;
        $('.inp').each(function(){
            var name='';
            name=$(this).attr('name');
      
            var val = '';
            val = $(this).val();
            if(val == ''){
                flag = 1;
               $("#LB" + name).addClass('lbWarn');
               $("#" + name).addClass('alert-danger');
            }
            else{
               $("#LB" + name).removeClass('lbWarn');
               $("#" + name).removeClass('alert-danger');
            }
        });
        
        if(flag == 0){
            
            var ajx='';
            ajx={
              _RepCateg:$('#inpRepCateg').val(),
              _DtFrm:$('#inpDtFrm').val(),
              _DtTo:$('#inpDtTo').val()
            };
            $.ajax({
                 url:'pdfServiceBarRep',
                 type:'get',
                 data:{
                     //data:window.btoa(JSON.stringify(ajx))
                    data:JSON.stringify(ajx)
                },
                 success:function(data){
                    switch($('#inpRepCateg').val()){
                        case "YesNo":
                            ServiceGenYNbar(data);
                            break;
                        case "Comment":    
                            ServiceGenCommBar(data);
                            break;
                        case "PoorAverageExcellent":    
                            ServiceGenPaeBar(data);
                            break;
                        case "ExcellentPoor":
                            ServiceGenEPBar(data);
                            break;
                        case "OverallSatisfaction":
                            ServiceGenOSBar(data);
                            break;
                        case "NetPromoterScore":
                            ServiceGenNPSBar(data);
                            break;
                    }
                }
            });
        }
    });
    
    $(document).on('click','#bSalesBarBack',function(){
        window.location.replace('shwSalesBarRep');
    });
    
    $(document).on('click','#bServiceBarBack',function(){
        window.location.replace('shwServiceBarRep');
    });
    
    document.getElementById('bSalesBarPrint').onclick = function () {
        var imgData = document.getElementById('myChart').toDataURL('image/jpeg');
        var windowContent = '<!DOCTYPE html>';
        windowContent += '<html>'
        windowContent += '<head><title>Print canvas</title></head>';
        windowContent += '<body>'
        windowContent += '<img src="' + imgData + '">';
        windowContent += '</body>';
        windowContent += '</html>';
        var printWin = window.open('', '', 'width:100%,height:auto');
        printWin.document.open();
        printWin.document.write(windowContent);
        printWin.document.close();
        printWin.focus();
        printWin.print();
        printWin.close();
    };
    
    

});


