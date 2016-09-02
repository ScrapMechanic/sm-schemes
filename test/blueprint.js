/// <reference path="../blueprint.d.ts" />
var b = JSON.parse("...");
var rock = b.bodies[0].childs[0];
alert(rock.bounds.x + rock.pos.x);
var sequencer = b.bodies[0].childs[1];
sequencer.controller.playMode = 2 /* LOOP */; // yes !!, const enum works :D
var logicgate = b.bodies[0].childs[2];
logicgate.controller.mode = 6 /* XNOR */;
