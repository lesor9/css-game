const levels = [
  // tag task
  {
    level: 1,
    name: 'A',
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

  // tag task
  {
    level: 2,
    name: 'B',
    elements: [
      {
        name: 'deer',
      },
      {
        name: 'fox',
      },
      {
        name: 'crow',
      },
    ],
    description: 'Choose a fox',
    target: [1],
    hint: 'fox',
  },

  // combine
  {
    level: 3,
    name: 'A, B',
    elements: [
      {
        name: 'dragon',
      },
      {
        name: 'castle',
      },
      {
        name: 'phoenix',
      },
    ],
    description: 'Scare these creatures away from the castle with people',
    target: [0, 2],
    hint: 'dragon, phoenix',
  },

  // class task
  {
    level: 4,
    name: '.class',
    elements: [
      {
        name: 'goblin',
        attributes: {
          class: ['monster'],
        },
      },
      {
        name: 'princess',
      },
      {
        name: 'giant',
        attributes: {
          class: ['monster'],
        },
      },
      {
        name: 'ogre',
        attributes: {
          class: ['monster'],
        },
      },
    ],
    description: 'Save the princess from enemies by killing them',
    target: [0, 2, 3],
    hint: '.monster',
  },

  // id task
  {
    level: 5,
    name: '#id',
    elements: [
      {
        name: 'king',
      },
      {
        name: 'unicorn',
      },
      {
        name: 'cyclops',
      },
      {
        name: 'cyclops',
        attributes: {
          id: ['cylo'],
        },
      },
      {
        name: 'cyclops',
      },
    ],
    description: 'Help the king kill the cyclops in the center',
    target: [3],
    hint: '#cylo',
  },

  // all
  {
    level: 6,
    name: '*',
    elements: [
      {
        name: 'tin-man',
      },
      {
        name: 'tin-man',
      },
      {
        name: 'tin-man',
      },
      {
        name: 'tin-man',
      },
      {
        name: 'tin-man',
      },
      {
        name: 'tin-man',
      },
      {
        name: 'tin-man',
      },
      {
        name: 'knight',
      },
      {
        name: 'knight',
      },
      {
        name: 'knight',
      },
      {
        name: 'knight',
      },
      {
        name: 'knight',
      },
      {
        name: 'knight',
      },
      {
        name: 'knight',
      },
    ],
    description: 'Gather your army for battle',
    target: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    hint: '*',
  },

  // [atr]
  {
    level: 7,
    name: '[atrib]',
    elements: [
      {
        name: 'snail',
      },
      {
        name: 'rabbit',
        attributes: {
          hungry: ['true'],
        },
      },
      {
        name: 'horse',
        attributes: {
          hungry: ['true'],
        },
      },
    ],
    description: 'Choose a hungry animals',
    target: [1, 2],
    hint: '[hungry="true"]',
  },

  // tag[atr]
  {
    level: 8,
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
        },
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

  // [atr=""]
  {
    level: 9,
    name: 'tag[atrib="val"]',
    elements: [
      {
        name: 'hedgehog',
        img: 'hedgehog(sad)',
        attributes: {
          happiness: ['min'],
        },
      },
      {
        name: 'hedgehog',
        attributes: {
          happiness: ['max'],
        },
      },
      {
        name: 'hedgehog',
        img: 'hedgehog(sad)',
        attributes: {
          happiness: ['min'],
        },
      },
    ],
    description: 'Choose a happy hedgehog',
    target: [1],
    hint: 'hedgehog[happiness="max"]',
  },

  // :first-child
  {
    level: 10,
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

  // :last-child
  {
    level: 11,
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

  // :nth-child(n)
  {
    level: 12,
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

  // :first-of-type
  {
    level: 13,
    name: ':first-of-type',
    elements: [
      {
        name: 'mermaid',
      },
      {
        name: 'tower',
      },
      {
        name: 'scarecrow',
      },
      {
        name: 'tower',
      },
    ],
    description: 'Select the first tower',
    target: [1],
    hint: 'tower:first-of-type',
  },

  // :last-of-type
  {
    level: 14,
    name: ':last-of-type',
    elements: [
      {
        name: 'orange',
      },
      {
        name: 'lemon',
      },
      {
        name: 'watermelon',
      },
      {
        name: 'lemon',
      },
      {
        name: 'lemon',
      },
      {
        name: 'orange',
      },
    ],
    description: 'Choose the last lemon',
    target: [4],
    hint: 'lemon:last-of-type',
  },

  // :nth-of-type(n)
  {
    level: 15,
    name: ':nth-of-type(n)',
    elements: [
      {
        name: 'gnome',
      },
      {
        name: 'excalibur',
      },
      {
        name: 'gnome',
      },
      {
        name: 'cauldron',
      },
    ],
    description: 'Select the second gnome',
    target: [2],
    hint: 'gnome:nth-of-type(2)',
  },

  // :nth-of-type(n+1)
  {
    level: 16,
    name: ':nth-of-type(n+1)',
    elements: [
      {
        name: 'orange',
      },
      {
        name: 'orange',
      },
      {
        name: 'orange',
      },
      {
        name: 'orange',
      },
      {
        name: 'orange',
      },
    ],
    description: 'Choose the odd fruits',
    target: [0, 2, 4, 6, 8],
    hint: 'orange:nth-of-type(2n+1)',
  },

  // :nth-last-of-type(n)
  {
    level: 17,
    name: ':nth-last-of-type(n+1)',
    elements: [
      {
        name: 'pear',
      },
      {
        name: 'pear',
      },
      {
        name: 'pear',
      },
      {
        name: 'pear',
      },
      {
        name: 'pear',
      },
      {
        name: 'pear',
      },
    ],
    description: 'Choose the odd pears from the end',
    target: [1, 3, 5],
    hint: 'pear:nth-last-of-type(2n+1)',
  },

  // :nth-last-of-type(n)
  {
    level: 18,
    name: ':nth-last-of-type(n)',
    elements: [
      {
        name: 'mad-hatter',
      },
      {
        name: 'tower',
      },
      {
        name: 'lion',
      },
      {
        name: 'crystal-ball',
      },
    ],
    description: 'Select the first tower',
    target: [1],
    hint: 'tower:first-of-type',
  },

  // :nth-last-child(n)
  {
    level: 19,
    name: ':nth-last-child(n)',
    elements: [
      {
        name: 'glass-shoes',
      },
      {
        name: 'poison',
      },
      {
        name: 'poisonous',
      },
      {
        name: 'crystal-ball',
      },
    ],
    description: 'Select the poison',
    target: [1],
    hint: 'poison:nth-last-child(3)',
  },

  // :not()
  {
    level: 20,
    name: ':not()',
    elements: [
      {
        name: 'cloud',
        img: 'storm',
      },
      {
        name: 'cloud',
        img: 'storm',
      },
      {
        name: 'cloud',
        img: 'rainy',
        attributes: {
          id: ['rain'],
        },
      },
      {
        name: 'cloud',
        img: 'storm',
      },
      {
        name: 'cloud',
        img: 'storm',
      },
    ],
    description: 'Choose all the clouds with lightning',
    target: [0, 1, 3, 4],
    hint: 'cloud:not(#rain)',
  },
];

export default levels;
