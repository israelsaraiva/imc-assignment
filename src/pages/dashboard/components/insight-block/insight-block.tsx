import './insight-block.scss';

import React from 'react';

type InsightBlockProps = {
  title: string;
  value: number;
  label: string;
};

export default function InsightBlock({ title, value, label }: InsightBlockProps) {
  return (
    <div className="insight-block">
      <div className="insight-block-label">{title}</div>
      <div className="insight-block-value">{value}</div>
      <div className="insight-block-description">{label}</div>
    </div>
  );
}
