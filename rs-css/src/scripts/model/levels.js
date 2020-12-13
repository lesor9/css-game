const levels = [
  // tag task
  {
    level: 1,
    name: 'tag',
    elements: [
      {
        name: 'wizard',
      },
      {
        name: 'witch',
      },
    ],
    description: 'Give power to the wizard to defeat the witch',
    target: [0],
    hint: 'wizard',
  },

  // class task
  {
    level: 2,
    name: '.class',
    elements: [
      {
        name: 'goblin',
        attributes: {
          class: ['monster'],
        }
      },
      {
        name: 'princess',
      },
      {
        name: 'giant',
        attributes: {
          class: ['monster'],
        }
      },
      {
        name: 'ogre',
        attributes: {
          class: ['monster'],
        }
      },
    ],
    description: 'Save the princess from enemies by killing them',
    target: [0, 2, 3],
    hint: '.monster',
  },

  //id task
  {
    level: 3,
    name: '#id',
    elements: [
      {
        name: 'king'
      },
      {
        name: 'unicorn'
      },
      {
        name: 'cyclops',
      },
      {
        name: 'cyclops',
        attributes: {
          id: ['cylo'],
        }
      },
      {
        name: 'cyclops',
      },
    ],
    description: 'Help the king kill the cyclops in the center',
    target: [3],
    hint: '#cylo',
  },

 //combine
 {
  level: 4,
  name: 'tagA, tagB',
  elements: [
    {
      name: 'dragon'
    },
    {
      name: 'castle'
    },
    {
      name: 'phoenix',
    },
  ],
  description: 'Scare these creatures away from the castle with people',
  target: [0, 2],
  hint: 'dragon, phoenix',
},
  //all
 {
  level: 5,
  name: '*',
  elements: [
    {
      name: 'tin-man'
    },
    {
      name: 'tin-man'
    },
    {
      name: 'tin-man'
    },
    {
      name: 'tin-man'
    },
    {
      name: 'tin-man'
    },
    {
      name: 'tin-man'
    },
    {
      name: 'tin-man'
    },
    {
      name: 'knight'
    },
    {
      name: 'knight'
    },
    {
      name: 'knight'
    },
    {
      name: 'knight'
    },
    {
      name: 'knight'
    },
    {
      name: 'knight'
    },
    {
      name: 'knight'
    },
  ],
  description: 'Gather your army for battle',
  target: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  hint: '*',
},


 //[atr]
 {
  level: 6,
  name: 'tag[atrib]',
  elements: [
    {
      name: 'hedgehog',
      img: 'hedgehog(sad)',
    },
    {
      name: 'hedgehog',
      attributes: {
        happiness: ['max'],
      }
    },
    {
      name: 'hedgehog',
      img: 'hedgehog(sad)',
    },
  ],
  description: 'Choose a happy hedgehog',
  target: [1],
  hint: 'hedgehog[happiness]',
},


 //[atr=""]
 {
  level: 7,
  name: 'tag[atrib="val"]',
  elements: [
    {
      name: 'hedgehog',
      img: 'hedgehog(sad)',
      attributes: {
        happiness: ['min'],
      }
    },
    {
      name: 'hedgehog',
      attributes: {
        happiness: ['max'],
      }
    },
    {
      name: 'hedgehog',
      img: 'hedgehog(sad)',
      attributes: {
        happiness: ['min'],
      }
    },
  ],
  description: 'Choose a happy hedgehog',
  target: [1],
  hint: 'hedgehog[happiness="max"]',
},

 //:first-child
 {
  level: 8,
  name: ':first-child',
  elements: [
    {
      name: 'pirate',
    },
    {
      name: 'pig',
    },
    {
      name: 'pirate',
    },
    {
      name: 'pig',
    },
    { 
      name: 'pirate',
    },
  ],
  description: 'Choose the first pirate',
  target: [0],
  hint: 'pirate:first-child',
},

 //:last-child
 {
  level: 9,
  name: ':last-child',
  elements: [
    {
      name: 'genie',
    },
    {
      name: 'genie',
    },
    {
      name: 'fairy',
    },
    {
      name: 'fairy',
    },
    { 
      name: 'genie',
    },
  ],
  description: 'Choose the last genie',
  target: [4],
  hint: 'genie:last-child',
},

 //:nth-child(n)
 {
  level: 10,
  name: ':nth-child(n)',
  elements: [
    {
      name: 'vampire',
    },
    {
      name: 'robin-hood',
    },
    {
      name: 'vampire',
    },
    { 
      name: 'gnome',
    },
  ],
  description: 'Choose a second vampire',
  target: [2],
  hint: 'vampire:nth-child(3)',
},
];

export default levels;
