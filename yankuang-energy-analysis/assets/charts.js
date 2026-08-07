(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var green = style.getPropertyValue('--green').trim();
  var red = style.getPropertyValue('--red').trim();
  var yellow = style.getPropertyValue('--yellow').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();
  var bg3 = style.getPropertyValue('--bg3').trim();

  var baseTooltip = {
    backgroundColor: bg2,
    borderColor: rule,
    textStyle: { color: ink }
  };

  var baseAxisLine = { lineStyle: { color: rule } };
  var baseAxisLabel = { color: muted, fontSize: 12 };
  var baseSplitLine = { lineStyle: { color: rule, type: 'dashed', opacity: 0.3 } };

  // Chart 1: Revenue & Net Profit (2020-2025)
  var chartRevenue = echarts.init(document.getElementById('chart-revenue'), null, { renderer: 'svg' });
  chartRevenue.setOption({
    animation: false,
    grid: { left: '8%', right: '8%', top: '15%', bottom: '12%', containLabel: true },
    tooltip: Object.assign({ trigger: 'axis' }, baseTooltip),
    legend: { data: ['营业收入', '归母净利润'], textStyle: { color: muted }, top: 5 },
    xAxis: {
      type: 'category',
      data: ['2020', '2021', '2022', '2023', '2024', '2025'],
      axisLine: baseAxisLine,
      axisLabel: baseAxisLabel
    },
    yAxis: {
      type: 'value',
      name: '亿元',
      nameTextStyle: { color: muted, fontSize: 11 },
      axisLine: { show: false },
      axisLabel: baseAxisLabel,
      splitLine: baseSplitLine
    },
    series: [
      {
        name: '营业收入',
        type: 'bar',
        data: [2149.9, 1519.9, 2249.7, 1500.7, 1391.2, 1449.3],
        itemStyle: { color: accent, borderRadius: [4, 4, 0, 0] },
        barWidth: '28%',
        label: { show: true, position: 'top', color: ink, fontSize: 11, fontWeight: 600 }
      },
      {
        name: '归母净利润',
        type: 'bar',
        data: [71.2, 162.6, 333.6, 201.4, 144.3, 83.8],
        itemStyle: { color: accent2, borderRadius: [4, 4, 0, 0] },
        barWidth: '28%',
        label: { show: true, position: 'top', color: ink, fontSize: 11, fontWeight: 600 }
      }
    ]
  });

  // Chart 2: ROE & Gross Margin
  var chartMargins = echarts.init(document.getElementById('chart-margins'), null, { renderer: 'svg' });
  chartMargins.setOption({
    animation: false,
    grid: { left: '8%', right: '8%', top: '15%', bottom: '12%', containLabel: true },
    tooltip: Object.assign({ trigger: 'axis', valueFormatter: function(v) { return v.toFixed(2) + '%'; } }, baseTooltip),
    legend: { data: ['ROE(加权)', '毛利率', '净利率'], textStyle: { color: muted }, top: 5 },
    xAxis: {
      type: 'category',
      data: ['2020', '2021', '2022', '2023', '2024', '2025'],
      axisLine: baseAxisLine,
      axisLabel: baseAxisLabel
    },
    yAxis: {
      type: 'value',
      name: '%',
      nameTextStyle: { color: muted, fontSize: 11 },
      axisLine: { show: false },
      axisLabel: baseAxisLabel,
      splitLine: baseSplitLine
    },
    series: [
      {
        name: 'ROE(加权)',
        type: 'line',
        data: [9.46, 27.78, 38.67, 21.91, 18.30, 10.00],
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: { color: accent, width: 2.5 },
        itemStyle: { color: accent },
        label: { show: true, position: 'top', color: ink, fontSize: 10, formatter: '{c}%' }
      },
      {
        name: '毛利率',
        type: 'line',
        data: [13.22, 29.38, 40.94, 40.64, 35.80, 28.00],
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: { color: green, width: 2.5 },
        itemStyle: { color: green },
        label: { show: true, position: 'top', color: ink, fontSize: 10, formatter: '{c}%' }
      },
      {
        name: '净利率',
        type: 'line',
        data: [3.18, 12.22, 19.64, 18.10, 15.05, 5.78],
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: { color: red, width: 2.5 },
        itemStyle: { color: red },
        label: { show: true, position: 'bottom', color: ink, fontSize: 10, formatter: '{c}%' }
      }
    ]
  });

  // Chart 3: EPS vs DPS
  var chartDividend = echarts.init(document.getElementById('chart-dividend'), null, { renderer: 'svg' });
  chartDividend.setOption({
    animation: false,
    grid: { left: '8%', right: '8%', top: '15%', bottom: '12%', containLabel: true },
    tooltip: Object.assign({ trigger: 'axis', valueFormatter: function(v) { return v.toFixed(2) + '元'; } }, baseTooltip),
    legend: { data: ['每股收益(EPS)', '每股股息(DPS)'], textStyle: { color: muted }, top: 5 },
    xAxis: {
      type: 'category',
      data: ['2020', '2021', '2022', '2023', '2024', '2025'],
      axisLine: baseAxisLine,
      axisLabel: baseAxisLabel
    },
    yAxis: {
      type: 'value',
      name: '元',
      nameTextStyle: { color: muted, fontSize: 11 },
      axisLine: { show: false },
      axisLabel: baseAxisLabel,
      splitLine: baseSplitLine
    },
    series: [
      {
        name: '每股收益(EPS)',
        type: 'bar',
        data: [0.72, 1.62, 3.89, 2.01, 1.47, 0.84],
        itemStyle: { color: accent2, borderRadius: [4, 4, 0, 0] },
        barWidth: '28%',
        label: { show: true, position: 'top', color: ink, fontSize: 11, fontWeight: 600 }
      },
      {
        name: '每股股息(DPS)',
        type: 'bar',
        data: [1.00, 2.00, 4.30, 1.49, 0.77, 0.50],
        itemStyle: { color: accent, borderRadius: [4, 4, 0, 0] },
        barWidth: '28%',
        label: { show: true, position: 'top', color: ink, fontSize: 11, fontWeight: 600 }
      }
    ]
  });

  // Chart 4: Peer Comparison (Scatter - PE vs ROE)
  var chartPeers = echarts.init(document.getElementById('chart-peers'), null, { renderer: 'svg' });
  chartPeers.setOption({
    animation: false,
    grid: { left: '10%', right: '10%', top: '15%', bottom: '12%', containLabel: true },
    tooltip: Object.assign({
      trigger: 'item',
      formatter: function(p) {
        return p.data.name + '<br/>PE(TTM): ' + p.data.value[0] + 'x<br/>ROE: ' + p.data.value[1] + '%<br/>2025净利: ' + p.data.value[2] + '亿';
      }
    }, baseTooltip),
    xAxis: {
      type: 'value',
      name: 'PE (TTM, 倍)',
      nameLocation: 'middle',
      nameGap: 30,
      nameTextStyle: { color: muted, fontSize: 12 },
      min: 8,
      max: 28,
      axisLine: baseAxisLine,
      axisLabel: baseAxisLabel,
      splitLine: baseSplitLine
    },
    yAxis: {
      type: 'value',
      name: 'ROE (%)',
      nameLocation: 'middle',
      nameGap: 40,
      nameTextStyle: { color: muted, fontSize: 12 },
      min: 5,
      max: 25,
      axisLine: { show: false },
      axisLabel: baseAxisLabel,
      splitLine: baseSplitLine
    },
    series: [
      {
        type: 'scatter',
        symbolSize: function(data) { return Math.sqrt(data[2]) * 2.5; },
        data: [
          { name: '中国神华', value: [19, 14, 500], itemStyle: { color: green } },
          { name: '陕西煤业', value: [13, 20, 220], itemStyle: { color: accent2 } },
          { name: '中煤能源', value: [10, 10, 145], itemStyle: { color: yellow } },
          { name: '兖矿能源', value: [24, 10, 83.8], itemStyle: { color: red } }
        ],
        label: {
          show: true,
          formatter: function(p) { return p.data.name; },
          color: ink,
          fontSize: 12,
          fontWeight: 600,
          position: 'top'
        },
        markLine: {
          silent: true,
          symbol: 'none',
          lineStyle: { color: rule, type: 'dashed' },
          data: [
            { xAxis: 12.5, label: { formatter: '同行均值12.5x', color: muted, fontSize: 10 } }
          ]
        }
      }
    ]
  });

  // Resize handler
  window.addEventListener('resize', function() {
    chartRevenue.resize();
    chartMargins.resize();
    chartDividend.resize();
    chartPeers.resize();
  });
})();
