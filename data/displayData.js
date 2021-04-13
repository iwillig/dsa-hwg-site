
export const Events = [
  {
    day: "Tuesday, April 13, 2021",
    time: "5:30 PM -  6:30 PM",
    location: "Online",
    href: "https://actionnetwork.org/events/housing-healthcare-what-the-ny-health-act-could-mean-for-housing-justice",
    title: "Housing & Healthcare: What the NY Health Act Could Mean for Housing Justice",
    description: "The New York Health Act has been reintroduced with a majority of cosponsors in the New York State Senate and Assembly for the first time! This means that we're closer than ever to winning single-payer healthcare for all New Yorkers, and the effects of universal health coverage would have effects far beyond the field of healthcare. Join us on Tuesday, April 13th for a conversation with tenants' rights advocates and legislators about what the New York Health Act could mean housing justice in New York!"
  },
    
  {
    day: "",
    time: "",
    location: "",
    href: "",
    title: "",
    description: ""
  },

  {
    day: "Wednesday, April 14, 2021",
    time: "6:00 PM - 7:00 PM",
    location: "Online",
    href: "https://actionnetwork.org/events/passnyhealth-to-promote-racial-justice-panel-and-qa",
    title: "#PassNYHealth to Promote Racial Justice: Teach-in/Panel",
    description: "As part of the NYHA Week of Action, join the NYC-DSA Healthcare Working Group and the NYC-DSA Racial Justice Working Group for a panel and Q&A that explores topics at the intersection of health justice and racial justice. We'll be talking about how the New York Health Act can be a tool for racial justice, about the places where healthcare and the #DefundNYPD campaign intersect, and how we can focus on anti-racism in our health justice organizing. "
  },

  {
    day: "Thursday, April 15, 2021",
    time: "6:00 PM - 7:30 PM",
    location: "Online",
    href: "https://actionnetwork.org/events/labor-for-new-york-health-phonebank",
    title: "Labor for New York Health Phonebank",
    description: "Join DSA union members for a crucial phonebank to help win additional cosponsors of the New York Health Act."
  },

  {
    day: "Thursday, April 15, 2021",
    time: "8:00 PM - 9:00 PM",
    location: "Online",
    href: "https://actionnetwork.org/events/statewide-labor-strategy-meeting-to-passnyhealth",
    title: "Statewide Labor Strategy Meeting to #PassNYHealth ",
    description:
        "NYC DSA has been eliciting statements of support for the New York Health Act from union locals, caucuses and inter-union formations. We'd like to expand this project beyond New York City and get similar statements from union locals in the rest of the state. This is a rare moment in time where such statements can really affect a crucial  outcome - getting the NYHA out of committee, voted on, and passed." +
        "Please join activists from around NY State for a statewide strategy meeting to keep up the pressure and build out our movement to DSA chapters across New York."
  },

  {
    day: "Friday, April 16, 2021",
    time: "7:00 PM -  8:30 PM",
    location: "Online",
    href: "https://actionnetwork.org/events/passnyhealth-why-now-and-heres-how",
    title: "#PassNYHealth: Why Now and Here's How",
    description: "Come hear about the history of the movement for universal healthcare in the United States and how we can learn from it to #PassNYHealth!"
  },
/*
  {
    day: "",
    time: "",
    location: "",
    href: "",
    title: "",
    description: ""
  },
*/
  {
    day: "Saturday, April 17, 2021",
    time: "1:00 PM - 5:00 PM",
    location: "Grand Army Plaza, 10 Grand Army Plaza, Brooklyn, NY 11238",
    href: "https://actionnetwork.org/events/canvass-and-party-for-the-new-york-health-act",
    title: "Canvass and Party for the New York Health Act!",
    description: "Join us Saturday, April 17 for a street canvass at Grand Army Plaza and a post-canvass picnic/party in Prospect Park! We'll gather at 1 p.m. at Grand Army to talk to our neighbors about the New York Health Act and ask them to call key legislators and get involved in our campaign. There will be a training at the start of the event for all new canvassers!\n" +
        "\n" +
        "Then, at 3, we'll meet up near the Picnic House in Prospect Park for a socially-distant picnic/party, where we can share food and drinks and socialize! "
  },

  {
    day: "Sunday, April 18, 2021",
    time: "1:00 PM - 2:30 PM",
    location: "Online",
    href: "https://actionnetwork.org/events/passnyhealth-new-york-health-act-town-hall-featuring-julia-salazar",
    title: "#PassNYHealth: New York Health Act Town Hall featuring Julia Salazar",
    description: "Join the New York City Democratic Socialists of America’s Healthcare Working Group for a town hall on our campaign to #PassNYHealth!"
  },

];

export const NavLinks = [
  {
    href: "/about",
    displayName: "About"
  },
  /*
  {
    href: "/",
    displayName: "Home"
  },

  {
    href: "/our-work",
    displayName: "Our Work"
  },
  {
    href: "/resources",
    displayName: "Resources"
  },
  {
    href: "/media",
    displayName: "Media"
  },
  {
    href: "/contact",
    displayName: "Contact"
  }
  */
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
