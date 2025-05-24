const exampleCvInfo = {
    name: "John Doe",
    occupation: "Full Stack Developer",
    about: "I'm a highly motivated full stack developer with a strong foundation in both frontend and backend technologies. Over the past several years, I've designed, developed, and deployed scalable web applications across various industries, from e-commerce to ed-tech. My approach combines clean architecture, intuitive UI/UX, and performance optimization. I thrive in collaborative environments where communication and code quality are valued. Passionate about continuous learning, I stay up to date with emerging tools and frameworks to build impactful digital experiences.",
    userImageURL: "/examplePp.jpg",

    headerItems: [
        {
            title: 'Contact Information',
            isEditable: false,
            subItems: [
                {
                    id: '1',
                    title: 'Email',
                    detail: 'john.doe@example.com'
                }
            ],
            id: 'header-1'
        },
        {
            title: 'Location',
            isEditable: false,
            subItems: [
                {
                    id: '2',
                    title: 'City',
                    detail: 'San Francisco, CA'
                }
            ],
            id: 'header-2'
        },
        {
            title: 'Languages',
            isEditable: false,
            subItems: [
                {
                    id: '3',
                    title: 'English',
                    detail: 'Fluent'
                }
            ],
            id: 'header-3'
        },
        {
            title: 'Skills',
            isEditable: false,
            subItems: [
                {
                    id: '4',
                    title: 'Frontend',
                    detail: 'React, JavaScript, HTML, CSS, Tailwind, Webpack'
                }
            ],
            id: 'header-4'
        }
    ],

    main: [
        {
            title: 'Work Experience',
            isEditable: false,
            subItems: [
                {
                    id: 'main-1',
                    role: 'Frontend Developer',
                    employer: 'TechCorp Inc.',
                    description: 'Led the development of high-traffic user interfaces for e-commerce platforms. Worked closely with the UX team to implement pixel-perfect designs, optimized load times, and ensured cross-browser compatibility. Also maintained a component library to standardize UI across multiple teams.',
                    date: '2021 - Present'
                },
                {
                    id: 'main-2',
                    role: 'Junior Developer',
                    employer: 'InnoTech Solutions',
                    description: 'Contributed to backend API development and frontend component building. Participated in Agile sprints, wrote unit and integration tests, and maintained project documentation. Gained hands-on experience in CI/CD pipelines and version control using Git and GitHub.',
                    date: '2019 - 2021'
                }
            ],
            id: 'main-section-1'
        },
        {
            title: 'Education',
            isEditable: false,
            subItems: [
                {
                    id: 'main-3',
                    role: 'BSc Computer Science',
                    employer: 'Sabancı University',
                    description: 'Completed coursework in data structures, software engineering, algorithms, computer networks, and machine learning. Participated in team-based capstone projects and research work focused on real-time web technologies and user interaction patterns.',
                    date: '2017 - 2021'
                }
            ],
            id: 'main-section-2'
        }
    ]
}

 const emptyCvInfo = {
        name: "", 
        occupation: "", 
        about: "",
        userImageURL: undefined,

        headerItems: [{title: '', isEditable: false, 
            subItems: [{id: '', title: '', detail: ''}], id: ''}], 

        main:[{title: '', isEditable: false, 
            subItems: [{id: '', role: '', employer: '', description: '', date: ''}], id: ''}] 
    }


export {exampleCvInfo, emptyCvInfo};