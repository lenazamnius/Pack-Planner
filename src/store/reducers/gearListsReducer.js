const initState = {
  gearLists: [
    {
      id: 'gl1a',
      title: 'Small Gorgany hike',
      date: '20-06-20 / 23-06-20',
      type: 'hiking',
      season: 'summer',
      landscape: 'mountains',
      description:
        'Try using your pack without the hip belt. You might like it better.',
      categoryListing: [
        {
          categoryName: 'shelter',
          id: '7521d643-f342-43b3-9c28-ec04adf32a3f',
          list: [
            {
              name: 'backpack',
              id: 'b7d94caa-7903-4f70-aa10-069f1af89e13',
              weight: 1.2,
              qty: 1,
            },
            {
              name: 'tent',
              id: 'b60aedbc-b305-46fe-93d5-b45e36b167e7',
              weight: 1.67,
              qty: 1,
            },
            {
              name: 'sleeping bag',
              id: '4a0b485f-e9d4-4bdd-8cb9-79cc049e7477',
              weight: 0.7,
              qty: 1,
            },
            {
              name: 'pillow',
              id: 'fcfe4dc4-dd7c-4cae-9e9f-23f94b3154b7',
              weight: 0.115,
              qty: 2,
            },
            {
              name: 'sleeping pad',
              id: 'e992157e-f054-4ea6-87dd-867ec32635aa',
              weight: 0.435,
              qty: 2,
            },
          ],
        },
        {
          categoryName: 'clothing',
          id: 'c4af3f96-5e32-4d84-b331-551d26b31f10',
          list: [
            {
              name: 'hiking boots',
              id: '1sd15b0adc-9670-4eb2-8f6f-eb12fb12e3a4',
              weight: 1.5,
              qty: 1,
            },
            {
              name: 'down jacket',
              id: 'b342b23b-fb71-4fe2-b980-75d82a1f9475',
              weight: 0.56,
              qty: 1,
            },
            {
              name: 'socks',
              id: 'e33a8b17-ee20-4d21-9ed8-e48b8bf3923d',
              weight: 0.2,
              qty: 3,
            },
            {
              name: 'leggings',
              id: '1f4d0435-eec3-41c2-893a-577a1f6fb3b3',
              weight: 0.315,
              qty: 1,
            },
            {
              name: 'gloves',
              id: 'd5d4425a-e0c5-4d63-9eba-22db7eed3672',
              weight: 0.135,
              qty: 1,
            },
          ],
        },
      ],
    },
    {
      id: 'gl2b',
      title: 'Chernogora autumn hike',
      date: '02-10-20 / 05-10-20',
      type: 'hiking',
      season: 'autumn',
      landscape: 'mountains',
      description:
        'It needs to be mentioned at least once. If you don’t need it, leave it home.',
      categoryListing: [],
    },
    {
      id: 'gl3c',
      title: 'Borjava two days hike',
      date: '02-06-20 / 04-06-20',
      type: 'hiking',
      season: 'summer',
      landscape: 'mountains',
      description:
        ' If you’re backpacking with a companion, plan ahead and share the weight of the gear such as the tent and cooking gear.',
      categoryListing: [],
    },
  ],
};

const gearListsReducer = (state = initState, action) => {
  return state;
};

export default gearListsReducer;
