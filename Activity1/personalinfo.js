const bsit_students = {
    student1: {
        StudentName: "Sencio, Heartsson D.",
        IDNumber: "2026-6728",
        YearLevel: "II",
        Program: "Information Technology"
    },
    student2: {
        StudentName: "Caliging Angelo",
        IDNumber: "2026-6628",
        YearLevel: "II",
        Program: "Information Technology"
    },
    student3: {
        StudentName: "Ongcal Edford",
        IDNumber: "2026-6528",
        YearLevel: "II",
        Program: "Information Technology"
    },
    student4: {
        StudentName: "Bier Margarette",
        IDNumber: "2026-6428",
        YearLevel: "II",
        Program: "Information Technology"
    }
};

let Subjects = {
    LAWOR: "Life And Works Of Rizal",
    AD: "App Dev",
    IPT: "Integrative Programming and Technologies"
};

let Grades = {
    student1: {
        LAWOR: 75,
        AD: 76,
        IPT: 77
    },
    student2: {
        LAWOR: 77,
        AD: 78,
        IPT: 80
    },
    student3: {
        LAWOR: 81,
        AD: 86,
        IPT: 90
    },
    student4: {
        LAWOR: 98,
        AD: 99,
        IPT: 91
    }
};

let Units = {
    LAWOR: 3,
    AD: 2,
    IPT: 3
};

console.log("=== Students ===");
console.log("Student Name:", bsit_students.student1.StudentName, "\nID Number:", bsit_students.student1.IDNumber, "\nYear Level:", bsit_students.student1.YearLevel, "\nProgram:", bsit_students.student1.Program);
console.log("Sub 1:", Subjects.LAWOR, "Grade:", Grades.student1.LAWOR, "\nSub 2:", Subjects.AD, "Grade:", Grades.student1.AD, "\nSub 3:", Subjects.IPT, "Grade:", Grades.student1.IPT);

console.log("");
console.log("Student Name:", bsit_students.student2.StudentName, "\nID Number:", bsit_students.student2.IDNumber, "\nYear Level:", bsit_students.student2.YearLevel, "\nProgram:", bsit_students.student2.Program);
console.log("Sub 1:", Subjects.LAWOR, "Grade:", Grades.student2.LAWOR, "\nSub 2:", Subjects.AD, "Grade:", Grades.student2.AD, "\nSub 3:", Subjects.IPT, "Grade:", Grades.student2.IPT);

console.log("");
console.log("Student Name:", bsit_students.student3.StudentName, "\nID Number:", bsit_students.student3.IDNumber, "\nYear Level:", bsit_students.student3.YearLevel, "\nProgram:", bsit_students.student3.Program);
console.log("Sub 1:", Subjects.LAWOR, "Grade:", Grades.student3.LAWOR, "\nSub 2:", Subjects.AD, "Grade:", Grades.student3.AD, "\nSub 3:", Subjects.IPT, "Grade:", Grades.student3.IPT);

console.log("");
console.log("Student Name:", bsit_students.student4.StudentName, "\nID Number:", bsit_students.student4.IDNumber, "\nYear Level:", bsit_students.student4.YearLevel, "\nProgram:", bsit_students.student4.Program);
console.log("Sub 1:", Subjects.LAWOR, "Grade:", Grades.student4.LAWOR, "\nSub 2:", Subjects.AD, "Grade:", Grades.student4.AD, "\nSub 3:", Subjects.IPT, "Grade:", Grades.student4.IPT);

console.log("");
console.log("=== Course Enrolled ===");
console.log("");
console.log("Sub 1:", Subjects.LAWOR, "\nSub 2:", Subjects.AD, "\nSub 3:", Subjects.IPT);
console.log("");

let TotalUnits = Units.LAWOR + Units.AD + Units.IPT;

let CalculatedTotal1 = (Grades.student1.LAWOR * Units.LAWOR) + (Grades.student1.AD * Units.AD) + (Grades.student1.IPT * Units.IPT);
let CalculatedTotal2 = (Grades.student2.LAWOR * Units.LAWOR) + (Grades.student2.AD * Units.AD) + (Grades.student2.IPT * Units.IPT);
let CalculatedTotal3 = (Grades.student3.LAWOR * Units.LAWOR) + (Grades.student3.AD * Units.AD) + (Grades.student3.IPT * Units.IPT);
let CalculatedTotal4 = (Grades.student4.LAWOR * Units.LAWOR) + (Grades.student4.AD * Units.AD) + (Grades.student4.IPT * Units.IPT);

let GWA1 = CalculatedTotal1 / TotalUnits;
let GWA2 = CalculatedTotal2 / TotalUnits;
let GWA3 = CalculatedTotal3 / TotalUnits;
let GWA4 = CalculatedTotal4 / TotalUnits;

let LetterGrade = "";
let CurrentGWA = 0;

console.log("=== Final Grading ===");

CurrentGWA = GWA1;
if (CurrentGWA >= 98 && CurrentGWA <= 100) {
    LetterGrade = "A";
} else if (CurrentGWA >= 95 && CurrentGWA < 98) {
    LetterGrade = "A-";
} else if (CurrentGWA >= 92 && CurrentGWA < 95) {
    LetterGrade = "B+";
} else if (CurrentGWA >= 89 && CurrentGWA < 92) {
    LetterGrade = "B";
} else if (CurrentGWA >= 85 && CurrentGWA < 89) {
    LetterGrade = "B-";
} else if (CurrentGWA >= 82 && CurrentGWA < 85) {
    LetterGrade = "C+";
} else if (CurrentGWA >= 79 && CurrentGWA < 82) {
    LetterGrade = "C";
} else if (CurrentGWA >= 75 && CurrentGWA < 79) {
    LetterGrade = "D";
} else {
    LetterGrade = "Failed";
}
console.log("Student Name:", bsit_students.student1.StudentName);
console.log("General Weighted Average:", GWA1, "\nLetter Grade:", LetterGrade);

console.log("");
CurrentGWA = GWA2;
if (CurrentGWA >= 98 && CurrentGWA <= 100) {
    LetterGrade = "A";
} else if (CurrentGWA >= 95 && CurrentGWA < 98) {
    LetterGrade = "A-";
} else if (CurrentGWA >= 92 && CurrentGWA < 95) {
    LetterGrade = "B+";
} else if (CurrentGWA >= 89 && CurrentGWA < 92) {
    LetterGrade = "B";
} else if (CurrentGWA >= 85 && CurrentGWA < 89) {
    LetterGrade = "B-";
} else if (CurrentGWA >= 82 && CurrentGWA < 85) {
    LetterGrade = "C+";
} else if (CurrentGWA >= 79 && CurrentGWA < 82) {
    LetterGrade = "C";
} else if (CurrentGWA >= 75 && CurrentGWA < 79) {
    LetterGrade = "D";
} else {
    LetterGrade = "Failed";
}
console.log("Student Name:", bsit_students.student2.StudentName);
console.log("General Weighted Average:", GWA2, "\nLetter Grade:", LetterGrade);

console.log("");
CurrentGWA = GWA3;
if (CurrentGWA >= 98 && CurrentGWA <= 100) {
    LetterGrade = "A";
} else if (CurrentGWA >= 95 && CurrentGWA < 98) {
    LetterGrade = "A-";
} else if (CurrentGWA >= 92 && CurrentGWA < 95) {
    LetterGrade = "B+";
} else if (CurrentGWA >= 89 && CurrentGWA < 92) {
    LetterGrade = "B";
} else if (CurrentGWA >= 85 && CurrentGWA < 89) {
    LetterGrade = "B-";
} else if (CurrentGWA >= 82 && CurrentGWA < 85) {
    LetterGrade = "C+";
} else if (CurrentGWA >= 79 && CurrentGWA < 82) {
    LetterGrade = "C";
} else if (CurrentGWA >= 75 && CurrentGWA < 79) {
    LetterGrade = "D";
} else {
    LetterGrade = "Failed";
}
console.log("Student Name:", bsit_students.student3.StudentName);
console.log("General Weighted Average:", GWA3, "\nLetter Grade:", LetterGrade);

console.log("");
CurrentGWA = GWA4;
if (CurrentGWA >= 98 && CurrentGWA <= 100) {
    LetterGrade = "A";
} else if (CurrentGWA >= 95 && CurrentGWA < 98) {
    LetterGrade = "A-";
} else if (CurrentGWA >= 92 && CurrentGWA < 95) {
    LetterGrade = "B+";
} else if (CurrentGWA >= 89 && CurrentGWA < 92) {
    LetterGrade = "B";
} else if (CurrentGWA >= 85 && CurrentGWA < 89) {
    LetterGrade = "B-";
} else if (CurrentGWA >= 82 && CurrentGWA < 85) {
    LetterGrade = "C+";
} else if (CurrentGWA >= 79 && CurrentGWA < 82) {
    LetterGrade = "C";
} else if (CurrentGWA >= 75 && CurrentGWA < 79) {
    LetterGrade = "D";
} else {
    LetterGrade = "Failed";
}
console.log("Student Name:", bsit_students.student4.StudentName);
console.log("General Weighted Average:", GWA4, "\nLetter Grade:", LetterGrade);