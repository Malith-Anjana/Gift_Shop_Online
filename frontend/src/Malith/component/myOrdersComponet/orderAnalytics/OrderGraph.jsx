import React from 'react'
import {Line} from 'react-chartjs-2'

export default function OrderGraph() {
    return (
        <div>
          <h2 className="text-center my-3" style={{color:"blue"}}>Order by Month</h2>
            <Line
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [{
                    label: 'Total Amount',
                    borderColor:"#14a5ff",
                    data: [5500, 1500, 3900, 2900, 1000, 950],
                    backgroundColor:"rgba(255, 69, 103, 0.6)",
                    fill: 'start'
                },
            ],

            options: {
                responsive: true,
                interaction: {
                  mode: 'index',
                  intersect: false,
                },
                stacked: false,
                plugins: {
                  title: {
                    display: true,
                    text: 'Chart.js Line Chart - Multi Axis'
                  }
                },
                scales: {
                  y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                  },
                  y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
            
                    // grid line settings
                    grid: {
                      drawOnChartArea: false, // only want the grid lines for one axis to show up
                    },
                  },
                }
              },
            }
           }
           height={200}
           width={400}
            
            />
        </div>
    )
}
