const initialState = {
  myState: [
    {
      id: 1,
      name: "Salman khan",
      image:
        "https://stat2.bollywoodhungama.in/wp-content/uploads/2018/05/Dus-Ka-Dum-Launch-Salman-Khan-reveals-why-younger-Bollywood-stars-look-down-upon-TV-medium.jpg",
      desc: " king of Bollywood bolte This is Salman khan",
    },
    {
      id: 1,
      name: "Sharukh khan",
      image:
        "https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/canvas/2021/07/13/f664fd0c-93b8-40e1-81c7-676bb9c0a7d5_5fd2a74d.jpg?itok=V9mvsvzc&v=1626169377",
      desc: " king of Bollywood bolte This is Srk khan",
    },
    {
      id: 1,
      name: "SAIF ALI khan",
      image:
        "https://assets.thehansindia.com/h-upload/2020/08/25/993910-saif-ali-khan.webp",
      desc: " king of Bollywood bolte This is Saif Ali khan",
    },
    {
      id: 1,
      name: "AMIR khan",
      image:
        "https://i.pinimg.com/236x/7a/eb/96/7aeb96b1e7a62f0241ce4259e428e453--aamir-khan-beautiful-people.jpg",
      desc: " king of Bollywood bolte This is Amir khan",
    },
  ],
};

export const Sample = (state = initialState, action) => {
  if (action.type === "") {
    return {
      ...state,
      myState: [...state.myState, action.data],
    };
  } else {
    return state;
  }
};

