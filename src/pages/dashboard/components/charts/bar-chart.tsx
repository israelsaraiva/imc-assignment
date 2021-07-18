import { ResponsiveBar } from '@nivo/bar';
import React from 'react';
import { isMobileOnly } from 'react-device-detect';

type BarChartProps = {
  data: any;
  keys: string[];
  indexBy: string;
};

export default function BarChart({ data, keys, indexBy }: BarChartProps) {
  return (
    <ResponsiveBar
      data={data}
      keys={keys}
      indexBy={indexBy}
      margin={{ top: 60, right: 0, bottom: 50, left: 60 }}
      padding={0.3}
      groupMode="grouped"
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={{ scheme: 'category10' }}
      enableLabel={false}
      theme={{
        fontFamily: 'Poppins',
        textColor: '#a0a3bd',
        grid: { line: { stroke: '#eff0f6', strokeDasharray: '4 4' } },
        crosshair: { line: { stroke: '#a0a3bd' } },
        labels: { text: { color: 'red' } }
      }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: '#38bcb2',
          size: 4,
          padding: 1,
          stagger: true
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: '#eed312',
          rotation: -45,
          lineWidth: 6,
          spacing: 10
        }
      ]}
      fill={[
        {
          match: {
            id: 'fries'
          },
          id: 'dots'
        },
        {
          match: {
            id: 'sandwich'
          },
          id: 'lines'
        }
      ]}
      borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: isMobileOnly ? 90 : 0,
        legendPosition: 'middle',
        legendOffset: 32
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendPosition: 'middle',
        legendOffset: -40
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'top-left',
          direction: 'row',
          itemTextColor: '#6e7191',
          justify: false,
          translateX: 120,
          translateY: -40,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 13,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
    />
  );
}
