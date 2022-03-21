// NOTE: max exam score = 25, max homework score = 40, and max quiz score = 10

const score = [
  {
    id: 1,
    firstname: 'James',
    lastname: 'Bond',
    score: [
      {
        id: 1,
        subject: 'Math',
        midterm_exam: 24,
        final_exam: 20,
        homework: 36,
        quiz: 7,
      },
      {
        id: 2,
        subject: 'Science',
        midterm_exam: 19,
        final_exam: 22,
        homework: 33,
        quiz: 4,
      },
      {
        id: 3,
        subject: 'English',
        midterm_exam: 16,
        final_exam: 19,
        homework: 38,
        quiz: 8,
      },
    ],
  },
  {
    id: 2,
    firstname: 'John',
    lastname: 'Doe',
    score: [
      {
        id: 1,
        subject: 'Math',
        midterm_exam: 14,
        final_exam: 21,
        homework: 16,
        quiz: 4,
      },
      {
        id: 2,
        subject: 'Science',
        midterm_exam: 22,
        final_exam: 21,
        homework: 38,
        quiz: 5,
      },
      {
        id: 3,
        subject: 'English',
        midterm_exam: 21,
        final_exam: 15,
        homework: 26,
        quiz: 7,
      },
    ],
  },
  {
    id: 3,
    firstname: 'Ammy',
    lastname: 'Emmy',
    score: [
      {
        id: 1,
        subject: 'Math',
        midterm_exam: 15,
        final_exam: 21,
        homework: 32,
        quiz: 3,
      },
      {
        id: 2,
        subject: 'Science',
        midterm_exam: 17,
        final_exam: 19,
        homework: 31,
        quiz: 6,
      },
      {
        id: 3,
        subject: 'English',
        midterm_exam: 18,
        final_exam: 15,
        homework: 39,
        quiz: 7,
      },
    ],
  },
];

module.exports = score;
