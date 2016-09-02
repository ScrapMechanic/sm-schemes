declare module ScrapMechanic.schemes {

    interface Blueprint {
        bodies: Blueprint.Body[];
        joints?: Blueprint.Joint[];
        version: number;
    }

    namespace Blueprint {

        interface Body {
            childs: Child[];
        }

        interface Position {
            x: number;
            y: number;
            z: number;
        }

        interface Child {
            color: string;
            controller?: Identifier;
            pos: Position;
            shapeId: string;
            xaxis: number;
            zaxis: number;
        }

        interface Bounds {
            x: number;
            y: number;
            z: number;
        }

        interface Block extends Child {
            bounds: Bounds;
        }

        interface Frame {
            targetAngle: number;
        }

        interface SequencerJoint {
            endAngle: number;
            frames: Frame[];
            id: number;
            index: number;
            reverse: boolean;
            startAngle: number;
        }

        interface Sequencer extends Child {
            controller: SequencerController;
            joints: Identifier[];
        }

        interface Identifier {
            id: number;
        }

        export const enum PlayMode {
            LOOP = 2,
            NORMAL = 1
        } 

        interface Joint {
            childA: number;
            childB: number;
            color: string;
            id: number;
            posA: Position;
            posB: Position;
            shapeId: string;
            xaxisA: number;
            xaxisB: number;
            zaxisA: number;
            zaxisB: number;
        }

        interface SequencerController extends Identifier {
            controllers?: Identifier[];
            joints: SequencerJoint[];
            playMode: PlayMode;
            timePerFrame: number;
        }

        interface LogicGate extends Child {
            controller: LogicGateController;
        }

        export const enum LogicGateMode {
            AND = 0,
            OR = 1,
            XOR = 3,
            NAND = 4,
            NOR = 5,
            XNOR = 6
        }

        interface LogicGateController extends Identifier {
            active: boolean;
            controllers: Identifier[];
            joints?: Identifier;
            mode: LogicGateMode;
        }

        

    }

}