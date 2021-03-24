import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link'
import React from "react";
import { useForm } from "react-hook-form";

// Source Events from action work

const Events = [
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
const NavLinks = [
  {
    href: "/our-work",
    name: "Our Work"
  },
  {
    href: "/resources",
    name: "Resources"
  },
  {
    href: "/media",
    name: "Media"
  },
  {
    href: "/contact",
    name: "Contact"
  }
];

const renderInformation = {
  signUpData: {
    title: "Signup for our newsletter",
    description: "In pulvinar, magna varius bibendum cursus, lorem est rutrum lectus, nec blandit arcu nibh sed arcu. Maecenas nunc nulla, pharetra eget fermentum in, fermentum gravida turpis",
    formFields: [
      {
        htmlName: "firstName",
        displayName: "First name",
        hookFormArgs: { required: true }
      },
      {
        htmlName: "lastName",
        displayName: "Last Name"
      },
      {
        htmlName: "emailAddress",
        displayName: "Email Address"
      },
      {
        htmlName: "zipCode",
        displayName: "Zip Code"
      }
    ]
  },

  copyRightData: {
    description: "© 2021 New York City Democractic Socialists of America Healthcare Working Group"
  }
}

const NavItem = () => {

}

const NavMenu = () => {
  return (
    <div>
      <ul>
        {NavLinks.map((x) =>
          <li key={x.href}>
            <Link href={x.href}><a>{x.name}</a></Link>
          </li>
        )}
      </ul>
    </div>
  )
};

// combined to nav items

const FooterNavMenu = () => {
  return (
    <>
      <ul>
        {NavLinks.map((x) => {
          <li key={x.href}>
            <Link href={x.href}><a>{x.name}</a></Link>
          </li>
        })}
      </ul>
    </>
  )
}

const CopyRight = () => {
  return (
    <div>
      <p>{renderInformation.copyRightData.description}</p>
    </div>
  )
}

const Footer = () => {
  return (
    <>
      <FooterNavMenu/>
      <CopyRight/>
    </>
  );
}

const SplashScreen = (props) => {
  return (
    <>
      <h1 className={styles.title}>
        NYC DSA Healthcare Working Group
      </h1>
    </>
  );
}

const SignupForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {renderInformation.signUpData.formFields.map(x =>
        <>
        <label key={x.htmlName}>
          {x.displayName}
          <input name={x.htmlName}
                 type="text"
                 ref={register(x.hookFormArgs)}/>
        </label>
        </>
      )}
      <input type="submit" value="Submit" />
    </form>
  )
}

const Signup = () => {
  return (
    <div>
      <h3>{renderInformation.signUpData.title}</h3>
      <p>{renderInformation.signUpData.description}</p>
      <SignupForm/>
    </div>
  );
}

const DonateLink = () => {
  return (<Link href="/donate">
    <a>Donate</a>
  </Link>);
}

const SocialMedia = () => {
  return (
    <ul>
      <SocialIcon url="https://twitter.com/nycdsa_health" />
      <SocialIcon url="https://www.facebook.com/nycdsahealthcarewg" />
    </ul>
  );
}

const Event = (props) => {
  return (<div>
    <li>
      <p>{props.event.day}</p>
      <p>{props.event.title}</p>
      <p>{props.event.description}</p>
    </li>
  </div>);
}

const EventsList = () => {
  return (<ul>
    {Events.map((x) => (
      <Event key={JSON.stringify(x)} event={x}/>
      ))}
  </ul>);
}

const Upcomingevents = () => {
  return (
    <div>
      <h2>Upcoming Events</h2>
      <EventsList/>
    </div>
  );
};


const RecentPress = () => {
  return (
    <div>
      <h2>Recent Press</h2>
    </div>
  );
}

export default function Home() {

  return (
    <div className={styles.container}>

      <Head>
        <title>NYC DSA Healthcare Working Group</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <NavMenu />
        <SocialMedia />
        <SplashScreen />
        <Upcomingevents />
        <RecentPress/>
        <Signup />
        <DonateLink />
      </main>

      <footer className={styles.footer}>
        <Footer/>
      </footer>

    </div>


  )
}
