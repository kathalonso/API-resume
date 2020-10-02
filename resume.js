const resume = {
    about: {
      name: 'Kathalina Alonso',
      title: 'Analytical Linguist and Web Developer'
    },
    experience: [{
      id: 1,
      role: 'Voice Technology and Intent Intern',
      company: 'Uniphore',
      summary: 'Produce accurate and timely transcripts of customer service audio recordings in colloquy format as well as work in collaboration with the ASR department.'
      }, {
      id: 2,
      role: 'Project Consultant',
      company: 'LabVoice',
      summary: 'Enhanced the human-voice assistant interaction focusing on science laboratory needs.'
    }, {
      id: 3,
      role: 'Linguist',
      company: ['Lionbridge', 'DefinedCrowd'],
      summary: 'Collaborated with a team of international, remote linguists on projects regarding speech and NLP technologies.'
    }, {
      id: 4,
      role: 'English Teacher',
      company: ['JEI Learning Center', 'Freelance'],
      summary: 'Reinforced language arts skills in native English students as well as educate non-native English students.'
    }, {
      id: 5,
      role: 'Research Assistant',
      company: 'Rutgers University',
      summary: 'Collaborated on metrical structure in Gujarati and Mandarin focusing on stress and highly sonorous vowel [a]. Investigated English-Spanish development in preschool-aged children, specifically cross-linguistic influence.'   
    }],
    education: [{
      id: 1,
      degree: 'Certificate',
      fieldOfStudy: 'Voice Technology Design and Web Development',
      institution: 'Emerson College and Stack Education'
    }, {
      id: 2,
      degree: 'Master of Arts',
      fieldOfStudy: 'Applied Linguistics and Language Acquisition in Multilingual Contexts',
      institution: 'Universitat de Barcelona'
    }, {
      id: 3,
      degree: 'Bachelor of Arts',
      fieldOfStudy: ['Linguistics, French'],
      institution: 'Rutgers University-NB'
    }],
    skills: {
      natLanguages: ['English', 'US Spanish', 'French'],
      scriptLanguages: ['Python', 'JavaScript', 'HTML', 'CSS'],
      servers: ['MySQL', 'AWS Lambda'],
      frameworks: ['Node.js', 'Express.js'],
      tools: ['Git', 'VS Code', 'Praat']
    },
    interests: {
      fieldsOfInterest: ['VUX', 'NLP', 'ASR'],
      hobbies: ['home renovation', 'traveling']
    },
    contact: {
      number: '908-285-7966',
      email: 'kathalonso3@gmail.com',
      social: ['linkedin.com/in/kathalonso', 'github.com/kathalonso']
    }
  }
  
  // most recent to least, or ...?
  
  module.exports = resume