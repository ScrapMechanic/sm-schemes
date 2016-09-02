/// <reference path="../blueprint.d.ts" />

import Blueprint = ScrapMechanic.schemes.Blueprint;

let b = JSON.parse("...") as Blueprint;

let rock = b.bodies[0].childs[0] as Blueprint.Block;

alert(rock.bounds.x + rock.pos.x);

let sequencer = b.bodies[0].childs[1] as Blueprint.Sequencer;

sequencer.controller.playMode = Blueprint.PlayMode.LOOP; // yes !!, const enum works :D

let logicgate = b.bodies[0].childs[2] as Blueprint.LogicGate;

logicgate.controller.mode = Blueprint.LogicGateMode.XNOR;