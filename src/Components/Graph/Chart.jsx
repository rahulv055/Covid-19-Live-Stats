import React from 'react';
import { connect } from 'react-redux';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { getCasesTimeSeries } from '../../redux/StateReducer/State.action.js'

class Chartgraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartOptionsForNewCases: {
        chart: {
          zoomType: 'x'
        },
        title: {
          text: 'New Cases over time'
        },
        xAxis: {
          type: 'datetime',
        },
        yAxis: {
          title: {
              text: 'New Cases (K)'
          },
          min: 0
      },
        series: []
      }
    }

  }

  componentDidMount() {
    this.props.getCasesTimeSeries().then(()=>{
      let data = [];
      this.props.caseTimeSeries.forEach(caseTimeseries=>{
        let date = Date.parse(caseTimeseries.date);
        let newCases = parseInt(caseTimeseries.dailyConfirmed);
        data.push([date,newCases]);
      });
      this.setState({
        chartOptionsForNewCases:{
          ...this.state.chartOptionsForNewCases,
          series: [{
            type: 'area',
            data: data
        }]
        }
      });
    });
  }

  render() {
    const { chartOptionsForNewCases } = this.state;
    console.log(chartOptionsForNewCases);
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
          <HighchartsReact
          highcharts={Highcharts}
          options={chartOptionsForNewCases}
        />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  caseTimeSeries: state.StateReducer.caseTimeSeries
});

const mapDispatchToProps = dispatch => ({
  getCasesTimeSeries: () => dispatch(getCasesTimeSeries())
})

export default connect(mapStateToProps, mapDispatchToProps)(Chartgraph);