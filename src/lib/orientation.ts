import { useState } from 'react';
import { Edge } from 'react-native-safe-area-context';
import Orientation, { OrientationType, useOrientationChange } from 'react-native-orientation-locker';

export function useOrientation() {
    const [orientation, setOrientation] = useState<OrientationType>(Orientation.getInitialOrientation());

    useOrientationChange((orientation) => {
        setOrientation(orientation);
    });

    return orientation;
}

/**
 * Returns edges used by SafeAreaView, as they change per orientation.
 * 
 * ## USAGE
 * 
 * ```
 * const edges = useEdgesPerOrientation();
 * ```
 */
export function useEdgesPerOrientation() {
    const [orientation, setOrientation] = useState<OrientationType>();

    let edges: Edge[] = ['left', 'right', 'bottom'];
    if (orientation === OrientationType['PORTRAIT']) edges = ['left', 'right', 'bottom'];
    if (orientation === OrientationType['PORTRAIT-UPSIDEDOWN']) edges = ['left', 'right', 'top'];
    if (orientation === OrientationType['LANDSCAPE-LEFT']) edges = ['left', 'bottom'];
    if (orientation === OrientationType['LANDSCAPE-RIGHT']) edges = ['right', 'bottom'];

    useOrientationChange((orientation) => {
        setOrientation(orientation);
    });

    return edges;
}