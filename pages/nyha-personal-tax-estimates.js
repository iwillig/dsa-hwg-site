import Head from "next/head";
import NavMenu from "../components/navMenu";
import SplashScreen from "../components/splashScreen";
import DonateLink from "../components/donateLink";
import Footer from "../components/footer";
import React, { useState }from "react";
import {useForm} from "react-hook-form";

const EstimatesInputs = {
  fields: [
    {
      key: 1,
      htmlName: "hourlyWage",
      defaultValue: 420,
      displayName: "Hourly Wage",
      hookFromArgs: { required: true }
    },
    {
      key: 2,
      htmlName: "hoursWeek",
      defaultValue: 40,
      displayName: "Hours / Weeks",
      hookFromArgs: { required: true }
    },
    {
      key: 4,
      htmlName: "weeksWorkedPerYear",
      defaultValue: 50,
      displayName: "Weeks worked per year",
      hookFromArgs: { required: true }
    },
    {
      key: 8,
      htmlName: "overtimeWage",
      displayName: "Overtime Wage",
      hookFromArgs: { required: true }
    },
    {
      key: 5,
      htmlName: "annualPremium",
      displayName: "Annual premium",
      hookFromArgs: { required: true}
    },
    {
      key: 6,
      htmlName: "annualDeductible",
      displayName: "Annual deductible",
      hookFromArgs: { required: true}
    },
    {
      key: 7,
      htmlName: "annualCoPays",
      displayName: "Annual co-pays (average)",
      hookFromArgs: { required: true}
    }
  ]
};

const randRates = [
  {
      incomeRange: [0,27500],
      rate:0
  },
  {
    incomeRange: [27501,141200],
    rate: 13
  },
  {
    incomeRange: [141201, undefined],
    rate: 25.6
  }
];

const PersonalEstimatesForm = () => {
  const [weeklyGrossWage, setWeeklyGrossWage] = useState(0);
  const [annualGrossWage, setAnnualGrossWage] = useState(0);
  const [midBracketIcome, setMidBracketIcome] = useState(0);
  const [maxBracket, setMaxBracket] = useState(0);


  const onPersonalSubmit = (data) => {
    const {
      hourlyWage,
      hoursWeek,
      weeksWorkedPerYear,
      overtimeWage,
      annualPremium,
      annualDeductible,
      annualCoPays,
    } = data;
    const annualGrossWage = hourlyWage * hoursWeek;
    const taxAbleIcome = annualGrossWage - 27500;
    let midBracketIcome = 0;
    // b10 min income threshod
    // c13 annualGrossWage
    //
    // =if(min(Wages!C13-B10,141200-B10)<0,0,min(Wages!C13-B10,141200-B10))
    if (Math.min((annualGrossWage - 27500), (141201 - 27500))) {
      midBracketIcome = 0;
    } else {
      midBracketIcome = Math.min((annualGrossWage - 27500), (141201 - 27500));
    }

    // =MAX(Wages!C13-B11-B10,0)
    const maxBracket = Math.max(annualGrossWage - 27500 - 141201, 0)

    setAnnualGrossWage(hourlyWage * hoursWeek);
    setWeeklyGrossWage(hourlyWage * weeksWorkedPerYear * hoursWeek);
    setMidBracketIcome(midBracketIcome);
    setMaxBracket(maxBracket);

  }

  const { register, handleSubmit, watch, errors } = useForm();


  return (
    <>
    <form
      className="grid tablet:grid-cols-1 laptop:grid-cols-2 laptop:grid-rows-2 gap-x-6  gap-y-8"
      onSubmit={handleSubmit(onPersonalSubmit)}>
      {EstimatesInputs.fields.map(x =>
        <>
          <label for={x.htmlName} key={x.htmlName} >
            {x.displayName}
            <input key={x.key}
                   name={x.htmlName}
                   className="form-input w-full mt-6 tablet:mt-0 text-black border border-gray-400 pl-4 py-3 focus:outline-none focus:border-gray-500 rounded-sm bg-white bg-opacity-100 "
                   type="number"
                   defaultValue={x.defaultValue || 20}
                   placeholder={x.displayName}
                   ref={register(x.hookFromArgs)}/>
          </label>
        </>
      )}
      <button className ="  mr-auto ml-0 bg-black text-white shadow py-2 px-4 rounded-full font-bold transform hover:scale-105" type="submit" value="Submit">
        Calculate Personal Estimates
      </button>
    </form>
      <div>
        <h3>Results</h3>
        <ul>
          <li>
            <p>Annual Gross Wage</p>
            <p>{annualGrossWage}</p>
          </li>
          <li>
            <p>{midBracketIcome}</p>
          </li>
          <li>
            <p>{maxBracket}</p>
          </li>
        </ul>
      </div>
    </>
  )
}


export default function NYHAPersonalTaxEstimates () {
  return (<div>
    <div>

      <Head>
        <title>NYC DSA Healthcare Working Group</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavMenu />
        <SplashScreen />
        <PersonalEstimatesForm />
      </main>

      <footer>
        <Footer/>
      </footer>

    </div>
  </div>);
}