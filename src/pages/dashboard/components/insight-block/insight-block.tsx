import './insight-block.scss';

import React from 'react';

type InsightBlockProps = {
  className?: string;
};

export default function InsightBlock({ className }: InsightBlockProps) {
  return (
    <div className={`insight-block ${className}`}>
      <div className="insight-block-label">Guide Views</div>
      <div className="insight-block-value">1.240</div>
      <div className="insight-block-description">Views (7 Days)</div>
    </div>
  );
}
