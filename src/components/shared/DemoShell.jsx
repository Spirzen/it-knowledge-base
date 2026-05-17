import React from 'react';
import clsx from 'clsx';

/** Обёртка для интерактивных демо — единые отступы, тема, адаптивность. */
export default function DemoShell({children, className, as: Tag = 'div'}) {
  return <Tag className={clsx('it-demo', className)}>{children}</Tag>;
}

export function DemoCard({children, className, title, subtitle}) {
  return (
    <div className={clsx('it-demo__card', className)}>
      {(title || subtitle) && (
        <div className="it-demo__header">
          {title && <h4 className="it-demo__title">{title}</h4>}
          {subtitle && <p className="it-demo__subtitle">{subtitle}</p>}
        </div>
      )}
      <div className="it-demo__body">{children}</div>
    </div>
  );
}
