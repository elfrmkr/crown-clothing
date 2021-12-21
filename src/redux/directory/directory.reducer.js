const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl:
        "https://i.ibb.co/dfCvKd1/jeremy-mcknight-Mjgg-Sc-Wrwug-unsplash.jpg",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      imageUrl:
        "https://i.ibb.co/dt93T8m/devon-janse-van-rensburg-k-Ma0-Rqk-An-UQ-unsplash.jpg",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl:
        "https://i.ibb.co/JmRzxkH/paul-volkmer-AZf7-DL-8-Qhk-unsplash.jpg",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "women's",
      imageUrl:
        "https://i.ibb.co/C72GZND/helen-ast-n-Smk-Z4-Af-L2-M-unsplash.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      title: "men's",
      imageUrl:
        "https://i.ibb.co/1zbtZcn/allef-vinicius-Px-Zy-PAo91os-unsplash.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
