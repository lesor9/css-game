const levels = [
  // tag task
  {
    level: 1,
    name: 'tag',
    elements: ['dragon', 'wizard', 'castle'],
    description: 'Choose a dragon',
    target: ['dragon'],
    hint: 'dragon',
  },

  // class task
  {
    level: 2,
    name: '.class',
    elements: [
      'princess',
      'goblin',
      'goblin',
    ],
    description: 'Save the princess from the goblins by killing them',
    target: ['goblin'],
    hint: '123456789',
  },

  // id task
  {
    level: 3,
    name: '#id',
    elements: ['unicorn', 'cyclops', 'king', 'king'],
    description: 'Kill cyclop',
    target: ['cyclops', 'king'],
    hint: '123456789',
  },
];

export default levels;
