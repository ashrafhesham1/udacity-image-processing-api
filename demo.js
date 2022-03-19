"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
(0, sharp_1.default)('/fjord.jpg')
    .resize(320, 640)
    .toFile('x/output.jpg', (err, info) => {
    console.log('resizing failed');
});
