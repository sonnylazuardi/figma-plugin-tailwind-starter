/// <reference path="../node_modules/@figma/plugin-typings/index.d.ts" />

figma.showUI(__html__, { width: 480, height: 350 });

figma.ui.onmessage = (msg) => {

  figma.closePlugin();
};
