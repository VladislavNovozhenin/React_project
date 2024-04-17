/// <reference types="react-scripts" />
declare module "*.css" {
    const styles: { [key: string]: string };
    export = styles;
}
declare module "*.jpeg";
declare module "*.png";
declare module '*.wav'
declare module '*.mp3'
// declare module 'react-transition-group'