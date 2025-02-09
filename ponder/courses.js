// courses.js
const aCourse = {
    courseCode: "CSE121b",
    name: "Javascript Language",
    credits: 3,
    sections: [
        {
            sectionNum: 1,
            roomNum: "STC 342",
            enrolled: 28,
            days: "TTh",
            instructor: "Bro T"
        },
        {
            sectionNum: 2,
            roomNum: "STC 353",
            enrolled: 23,
            days: "TTh",
            instructor: "Sis A"
        },
        {
            sectionNum: 3,
            roomNum: "STC 383",
            enrolled: 28,
            days: "TTh",
            instructor: "Sis C"
        }
    ],
    enrollStudent: function(sectionNum) {
        console.log(sectionNum)
        console.log(this.sections);
    }
};


//  const myObj = new Object();

const currentField = "course code"
console.log(aCourse[currentField]);
console.log(aCourse.section[0].sectionNum)

const section1 = aCourse.sections.find(section => section.sectionNum)

document.querySelector("#enrollStudent").addEventListener('click', function() {
    aCourse.enrollStudent(1);
})
