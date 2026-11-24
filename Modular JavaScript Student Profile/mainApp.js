import { studentDetails, printSummary } from './studentModule.js';

const enrollmentMessage = printSummary(studentDetails, "Officially enrolled");
console.log(enrollmentMessage);