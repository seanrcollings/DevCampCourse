import { FETCH_COURSES, TOGGLE_ENROLLED, CLEAR_ALL } from './types';

export function toggleEnrolled(id) {
    return {
        type: TOGGLE_ENROLLED, 
        payload: id
    }
}

export function clearAll() {
    return {
        type: CLEAR_ALL,
    }
}

export function fetchCourses() {
    return {
        type: FETCH_COURSES,
        payload: [
            {
                id: 0,
                title: "Up and Running with Redis",
                description: "In this course you'll learn how to work with the efficient Redis database to manage key / value relationships.",
                enrolled: false
            },
            {
                id: 1,
                title: "HTML/CSS Bootcamp",
                description: "Learn HTML5 and CSS3 from scratch, starting with the basics and finishing by building five projects from scratch.",
                enrolled: false
            },
            {
                id: 2,
                title: "UX for Developers",
                description: "This User Experience (UX) course examines how to develop a system for approaching application development and enhancing the experience for users.",
                enrolled: false
            },
            {
                id: 3,
                title: 'Problem Solving',
                description: 'In this course you\'ll take a practical look at how to build a large number of software applications and features. By taking a systems analysis and design approach to development and leveraging UML, you\'ll be able to model systems and prepare to build the projects.',
                enrolled: false
            },
            {
                id: 4,
                title: 'UML for Developers',
                description: 'This course teaches the foundational building blocks of utilizing UML in order to model software systems.',
                enrolled: false
            },
            {
                id: 5,
                title: 'Algorithm Bootcamp',
                description: 'Algorithm Bootcamp - In this in depth course you will learn how to work with algorithms, including: how to measure their performance, understanding data structures, and implementing all of the algorithms in code.',
                enrolled: false
            },
            {
                id: 6,
                title: 'Introduction to Programming with Python',
                description: 'This course teaches the fundamentals of programming and utilizes the Python programming language.',
                enrolled: false
            },
            {
                id: 7,
                title: 'TypeScript Development',
                description: 'This course gives an introduction to the TypeScript programming language, including walking through the: syntax, best practices, and practical systems for building TypeScript programs.',
                enrolled: false
            },
            {
                id: 8,
                title: 'Introduction to Javascript',
                description: 'This course gives an introduction to the JavaScript programming language, including the basic syntax, how to work with collections, and input/output.',
                enrolled: false
            },
            {
                id: 9,
                title: 'Dissecting Rails 5',
                description: 'Learn how to build powerful applications using this comprehensive guide to the Ruby on Rails web framework.',
                enrolled: false
            }
        ]

    }
}


