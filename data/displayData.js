
export const Events = [
  {
    day: "11 Mar 2021",
    time: "10:00 AM - 12:00 AM",
    location: "Online",
    title: "Organizer Commitee Q3 Budget Meeting",
    description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus velit nec porttitor facilisis. Aliquam pharetra nunc placerat elementum porta. Sed mattis in lectus at dapibus. Morbi eu hendrerit odio, quis imperdiet mi. Nulla nec augue ac dui tincidunt mollis in a neque. Aenean sed pretium lacus. Nulla venenatis nibh vitae scelerisque condimentum. Sed dapibus feugiat magna, id elementum neque tristique ut. "
  },
  {
    day: "12 Mar 2021",
    time: "10:00 AM - 12:00 AM",
    location: "Online",
    title: "Something else!",
    description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus velit nec porttitor facilisis. Aliquam pharetra nunc placerat elementum porta. Sed mattis in lectus at dapibus. Morbi eu hendrerit odio, quis imperdiet mi. Nulla nec augue ac dui tincidunt mollis in a neque. Aenean sed pretium lacus. Nulla venenatis nibh vitae scelerisque condimentum. Sed dapibus feugiat magna, id elementum neque tristique ut. "
  },
  {
    day: "13 Mar 2021",
    time: "10:00 AM - 12:00 AM",
    location: "Online",
    title: "Townhall",
    description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus velit nec porttitor facilisis. Aliquam pharetra nunc placerat elementum porta. Sed mattis in lectus at dapibus. Morbi eu hendrerit odio, quis imperdiet mi. Nulla nec augue ac dui tincidunt mollis in a neque. Aenean sed pretium lacus. Nulla venenatis nibh vitae scelerisque condimentum. Sed dapibus feugiat magna, id elementum neque tristique ut. "
  }
];

export const NavLinks = [
  {
    href: "/",
    displayName: "Home"
  },
  {
    href: "/about",
    displayName: "About"
  },
  {
    href: "/our-work",
    displayName: "Our Work"
  },
  /*{
    href: "/resources",
    displayName: "Resources"
  },*/
  {
    href: "/media",
    displayName: "Media"
  },
  {
    href: "/contact",
    displayName: "Contact"
  }
];

export const renderInformation = {

  ourWorkPage: {
    description: "",
    onGoingCampaigns: [{title: "", description: ""}],
    pastCampaigns: [{title: "", description: ""}]
  },

  aboutPage: {
    description: "In pulvinar, magna varius bibendum cursus, lorem est rutrum lectus",
    ourHistory: {
      title: "",
      description: ""
    },
    ourValues: [
      {displayName: "Value 1"},
      {displayName: "Value 2"},
      {displayName: "Value 3"}
    ],
    ourGoals: [
      {displayName: "Pass the NYHA"},
      {displayName: ""}]
  },

  signUpData: {
    title: "Signup for our newsletter",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat venenatis placerat amet ultricies molestie et integer neque in ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat venenatis placerat amet ultricies molestie et integer neque in ipsum",
    formFields: [
      {
        key: 1,
        htmlName: "firstName",
        displayName: "First name",
        hookFormArgs: { required: true }
      },
      {
        key: 2,
        htmlName: "lastName",
        displayName: "Last Name"
      },
      {
        key: 3,
        htmlName: "emailAddress",
        displayName: "Email Address"
      },
      {
        key: 4,
        htmlName: "zipCode",
        displayName: "Zip Code"
      }
    ]
  },
  donateLink: {
    href: "https://chuffed.org/project/nyc-dsa-healthcare"
  },
  copyRightData: {
    description: "© 2021 New York City Democractic Socialists of America Healthcare Working Group"
  }
}
