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
let CalculatedTotal = (Grades.LAWOR * Units.LAWOR) + (Grades.AD * Units.AD) + (Grades.IPT * Units.IPT);
let GWA = CalculatedTotal  / TotalUnits

let LetterGrade = ""
let Failed = ""

if (GWA <= 100 && GWA >= 98){
    LetterGrade = 'A'
}
else if (GWA <= 97 && GWA >= 95){
    LetterGrade = 'A-'
}
else if (GWA <= 94 && GWA >= 92){
    LetterGrade = "B+"
}
else if (GWA <= 91 && GWA >= 89){
    LetterGrade = "B"
}
else if(GWA <= 88 && GWA >= 85){
    LetterGrade = "B-"
}
else if(GWA <= 84 && GWA >= 82){
    LetterGrade = "C+"
}
else if(GWA <= 81 && GWA >= 79){
    LetterGrade = "C"
}
else if(GWA <= 78 && GWA >= 75){
    LetterGrade = "D"
}
else{
    Failed = "Failed"
}



console.log("General Weighted Average: ",GWA,"\nLetter Grade:", LetterGrade)

