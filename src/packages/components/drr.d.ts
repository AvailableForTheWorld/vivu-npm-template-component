interface IProps {
    x: number;
    y: number;
    width?: number;
    height?: number;
    angle?: number;
    selected?: boolean;
    selectable?: boolean;
    draggable?: boolean;
    resizable?: boolean;
    rotatable?: boolean;
    hasActiveContent?: boolean;
    aspectRatio?: boolean;
    dragHandle?: string;
    dragCancel?: string;
    outerBound?: {
        x: number;
        y: number;
        width: number;
        height: number;
    } | null;
    innerBound?: {
        x: number;
        y: number;
        width: number;
        height: number;
    } | null;
    onDrag?: (e: any) => void;
    onResize?: (e: any) => void;
}
export type { IProps }