export const treeData = [
  {
    id: 0,
    name: '0',
    parentId: null,
    children: [
      {
        id: 1,
        name: '1',
        parentId: 0,
        children: [
          {
            id: 11,
            name: '11',
            parentId: 1,
            children: null,
          },
        ],
      },
      {
        id: 2,
        name: '2',
        parentId: 0,
        children: [
          {
            id: 21,
            name: '21',
            parentId: 2,
            children: [
              {
                id: 211,
                name: '211',
                parentId: 21,
                children: null,
              },
            ],
          },
        ],
      },
    ],
  },
];
