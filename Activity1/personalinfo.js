const personalinfo = {
    StudentName: "Sencio, Heartsson D.",
    IDNumber: "2026-6728",
    YearLevel: "II",
    Program: "Information Technology"
};
let Subjects = {
    LAWOR: "Life And Works Of Rizal",
    AD: "App Dev",
    IPT: "Integrative Programming and Technologies"
};
let Grades = {
    LAWOR: 75,
    AD: 76,
    IPT: 77
};
let Units = {
    LAWOR: 3,
    AD: 2,
    IPT: 3
}
console.log("Student Name:",personalinfo.StudentName, "\nID Number:",personalinfo.IDNumber,"\nYear Level:", personalinfo.YearLevel,"\nProgram:", personalinfo.Program)
console.log("")
console.log("=== Course Enrolled ===")
console.log("")
console.log("Sub 1:", Subjects.LAWOR, "\nSub 2:",Subjects.AD, "\nSub 3:",Subjects.IPT)
console.log("")
let TotalUnits = Units.LAWOR + Units.AD + Units.IPT
const GWA = { 
    LAWOR: Grades.LAWOR * Units.LAWOR  / TotalUnits,
    AD: Grades.AD * Units.AD  / TotalUnits,
    IPT: Grades.IPT * Units.IPT  / TotalUnits
}
console.log("General Weighted Average: ",GWA.LAWOR + GWA.AD + GWA.IPT,"\nLetter Grade: D")

