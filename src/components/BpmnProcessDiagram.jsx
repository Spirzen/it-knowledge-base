import React from 'react';
import clsx from 'clsx';
import BpmnIcon from './BpmnIcon';
import {BPMN_PROCESS_DIAGRAMS} from '@site/src/data/bpmn/processDiagrams';
import styles from './BpmnProcessDiagram.module.css';

function FlowArrow() {
  return (
    <span className={styles.arrow} aria-hidden="true">
      →
    </span>
  );
}

/**
 * @param {{ step: import('@site/src/data/bpmn/processDiagrams').BpmnStep, size?: number }} props
 */
function StepNode({step, size = 40}) {
  return (
    <div className={styles.node}>
      <BpmnIcon id={step.id} size={size} inline={false} />
      <span className={styles.nodeLabel}>{step.label}</span>
    </div>
  );
}

/**
 * @param {{ steps: import('@site/src/data/bpmn/processDiagrams').BpmnStep[] }} props
 */
function StepRow({steps}) {
  return (
    <div className={styles.stepRow}>
      {steps.map((step, i) => (
        <React.Fragment key={`${step.id}-${i}`}>
          {i > 0 ? <FlowArrow /> : null}
          <StepNode step={step} />
        </React.Fragment>
      ))}
    </div>
  );
}

/**
 * @param {{ gateway: NonNullable<import('@site/src/data/bpmn/processDiagrams').BpmnProcessDiagramDef['gateway']> }} props
 */
function GatewaySplit({gateway}) {
  return (
    <div className={styles.gatewayBlock}>
      <div className={styles.gatewayHead}>
        <StepNode step={{id: gateway.id, label: gateway.label}} />
      </div>
      <div className={styles.branches}>
        {gateway.branches.map((branch) => (
          <div key={branch.label} className={styles.branch}>
            <span className={styles.branchLabel}>{branch.label}</span>
            <StepRow steps={branch.steps} />
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * @param {{ lanes: NonNullable<import('@site/src/data/bpmn/processDiagrams').BpmnProcessDiagramDef['lanes']> }} props
 */
function LaneDiagram({lanes}) {
  return (
    <div className={styles.pool}>
      {lanes.map((lane) => (
        <div key={lane.name} className={styles.lane}>
          <div className={styles.laneHeader}>{lane.name}</div>
          <StepRow steps={lane.steps} />
        </div>
      ))}
    </div>
  );
}

/**
 * @param {{ id: string; className?: string }} props
 */
export default function BpmnProcessDiagram({id, className}) {
  const diagram = BPMN_PROCESS_DIAGRAMS[id];
  if (!diagram) return null;

  const {title, caption, steps, gateway, lanes} = diagram;

  return (
    <figure className={clsx(styles.root, className)} aria-label={title}>
      <figcaption className={styles.title}>{title}</figcaption>
      {lanes ? (
        <LaneDiagram lanes={lanes} />
      ) : (
        <div className={styles.linearFlow}>
          <StepRow steps={steps.slice(0, gateway ? gateway.after + 1 : steps.length)} />
          {gateway ? <GatewaySplit gateway={gateway} /> : null}
          {!gateway && steps.length > 0 ? null : null}
        </div>
      )}
      {caption ? <p className={styles.caption}>{caption}</p> : null}
    </figure>
  );
}
