declare module "rc-progress" {
  export interface RCProgressProps {
    strokeWidth?: number;
    trailWidth?: number;
    className?: string;
    percent?: number;
    strokeColor?: string;
    trailColor?: string;
    strokeLinecap?: 'butt' | 'square' | 'round';
    prefixCls?: string;
    style?: React.CSSProperties;
    gapDegree?: number;
    gapPosition?: 'top' | 'right' | 'bottom' | 'left';
  }
  export class Line extends React.Component<RCProgressProps, {}> {
  }

  export class Circle extends React.Component<RCProgressProps, {}> {
  }
}