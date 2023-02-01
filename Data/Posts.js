import {Users} from './Users';

export const POSTS = [
  {
    imageurl:
      'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80',
    user: Users[0].username,
    likes: 7870,
    caption: 'Train ride to Hogward',
    profie_picture:Users[0].image,
    comments: [
      {
        user: 'Hemant Chaudhary',
        comment:
          'this is very good to me that you are cloning of instagram usber eats or any other things',
      },
      {
        user: 'Sumit Chaudhary',
        comment:
          'this is very good to me that you are cloning of instagram usber eats or any other things',
      },
    ],
  },
  {
    imageurl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    user: Users[1].username,
    likes: 500,
    caption: 'Train ride to Hogward',
    profie_picture: Users[1].image,
    comments: [
      {
        user: 'pankaj Chaudhary',
        comment:
          'this is very good to me that you are cloning of instagram usber eats or any other things',
      },
      {
        user: 'mohit chaaudhary',
        comment:
          'this is very good to me that you are cloning of instagram usber eats or any other things',
      },
    ],
  },
];
