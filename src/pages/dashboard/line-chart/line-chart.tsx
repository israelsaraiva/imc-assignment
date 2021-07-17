import { ResponsiveLine } from '@nivo/line';
import React from 'react';

import data from './data';

export default function LineChart() {
  return (
    <ResponsiveLine
      data={data}
      curve="cardinal"
      enablePoints={false}
      enableGridX={false}
      enableSlices="x"
      theme={{
        fontFamily: 'Poppins',
        textColor: '#a0a3bd',
        grid: { line: { stroke: '#eff0f6', strokeDasharray: '4 4' } },
        crosshair: { line: { stroke: '#a0a3bd' } },
        labels: { text: { color: 'red' } },
      }}
      margin={{ top: 30, right: 0, bottom: 50, left: 40 }}
      xScale={{ type: 'point' }}
      yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendOffset: -40,
      }}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: 'top',
          direction: 'row',
          itemTextColor: '#6e7191',
          justify: false,
          translateX: 0,
          translateY: -25,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
}
