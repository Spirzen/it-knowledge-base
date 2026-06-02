import React, {type ReactNode} from 'react';
import {translate} from '@docusaurus/Translate';

export default function SidebarPanelHead(): ReactNode {
  return (
    <div className="it-sidebar-panel-head">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 6h16M4 12h10M4 18h14"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <circle
          cx="19"
          cy="17"
          r="3"
          fill="currentColor"
          fillOpacity="0.35"
          stroke="currentColor"
          strokeWidth="1.25"
        />
      </svg>
      <div className="it-sidebar-panel-head-text">
        <span className="it-sidebar-panel-title">
          {translate({
            id: 'it.sidebar.panelTitle',
            message: 'Оглавление',
            description: 'Sidebar panel heading (top line)',
          })}
        </span>
        <span className="it-sidebar-panel-sub">
          {translate({
            id: 'it.sidebar.panelSub',
            message: 'Энциклопедия',
            description: 'Sidebar panel heading (subtitle)',
          })}
        </span>
      </div>
    </div>
  );
}
