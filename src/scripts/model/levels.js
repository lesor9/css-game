const levels = [
  // tag task
  {
    level: 1,
    name: 'tag',
    elements: ['dragon', 'wizard', 'castle'],
    description: 'Choose a dragon',
    target: ['dragon'],
    hint: '',
  },

  // class task
  {
    level: 2,
    name: '.class',
    elements: ['princess', 'goblin', 'goblin'],
    description: 'Save the princess from the goblins by killing them',
    target: ['goblin'],
    hint: '',
  },

  // id task
  {
    level: 3,
    name: '#id',
    elements: ['unicorn', 'cyclops', 'king', 'king'],
    description: 'Third taaask',
    target: ['cyclops', 'king'],
    hint: '',
  },
];

export default levels;
