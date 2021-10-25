import React, {useEffect} from 'react';
import {Line} from 'react-chartjs-2';
import {connect} from 'react-redux';
import numeral from 'numeral';

import {LastMonth} from '../actions';

const LineGraph = ({LastMonth,lastMonthData}) => {

    useEffect(() => {
        LastMonth()
    },[])

    const options ={
        plugins: {
            legend: false,
        },
        maintainAspectRatio: false,
        tooltips: {
            mode: 'index',
            intersect: false,
            callbacks: {
                label: function(tooltipItem, data){
                    return numeral(tooltipItem.value).format("0+0");
                }
            }
        },
        scales: {
            xAxes: [
                {
                    type: 'time',
                    time: {
                        format: 'MM/DD/YY',
                        tooltipFormat: 'll'
                    }
                }
            ],
            yAxes: [
                {
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        callback:function (value, index, values){
                            return numeral(value).format('0a')
                        }
                    }
                }
            ]
        }
    }

    return (
        <div>
            <Line
                options={options}
                data ={{
                    datasets: [
                        {
                            borderColor: '#CC1034',
                            data: lastMonthData
                        }
                    ]
                }}
            >

            </Line>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        lastMonthData: state.lastMonth
    }
}

export default connect(mapStateToProps,{LastMonth})(LineGraph)
