  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];

let overTwentyOne = people.filter(person => person.age >= 21);
console.log(overTwentyOne);

const paul = people.filter(p => p.name == 'Paul')[0];
console.log(paul);


// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];

// we want to get any student who has 5 years or more experience
// in any coding language (skills) for a job interview
const candidates = students.filter(student => {
    let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
    return strongSkills.length > 0;
});

console.log(candidates);

// would actually be better to define the function outside of the method 
// in this more complex case 
// It is easier to read this!!!

const hasStrongSkills = student => {
    let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
    return strongSkills.length > 0;
}

const candidates2 = students.filter(hasStrongSkills);
console.log(candidates2);

// or even more verbose 

const has5YearsExp = skill => skill.yrsExperience >= 5;
const hasStrongSkills2 = student => student.skills.filter(has5YearsExp).length > 0;
// only want candidates names 
const candidates3 = students.filter(hasStrongSkills2).map(p => p.name);
console.log(candidates3);