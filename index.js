#!/usr/bin/env node

import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

// eslint-disable-next-line no-undef
const argv = yargs(hideBin(process.argv)).argv;

let output = "";
const currentDate = new Date();

const year =    argv.year ?? argv.y ?? 0;
const month =   argv.month ?? argv.m ?? 0;
const day =     argv.date ?? argv.d ?? 0;

if (argv._ == 'current') {
    if (argv.year || argv.y) {
        output = currentDate.getFullYear();
    } else if (argv.month || argv.m) {
        output = currentDate.getMonth() + 1;
    } else if (argv.date || argv.d) {
        output = currentDate.getDate();
    } else {
        output = currentDate.toISOString();
    }
} else if (argv._ == 'add') {
        Add();       
        output = currentDate.toISOString();           
} else if (argv._ == 'sub') {
        Sub();
         output = currentDate.toISOString();
} else {
    output = "error";
}

function Add() {
    currentDate.setDate(currentDate.getDate() + day);
    currentDate.setMonth(currentDate.getMonth() + month);
    currentDate.setFullYear(currentDate.getFullYear() + year);
}

function Sub() {
    currentDate.setDate(currentDate.getDate() - day);
    currentDate.setMonth(currentDate.getMonth() - month);
    currentDate.setFullYear(currentDate.getFullYear() - year);
}

console.log(output);