import {
  demoContactDetails,
  demoLetestWork,
  demoStatistics,
  demoTestimonialsData,
} from "./demo-data";

type latestWorkData = {
  key: string;
  flooringtype: string;
  address: string;
  description: string;
  date: string;
  images: string[];
}[];

export let contactDetails: any;
export let statistics: any;
export let testimonialsData: any;
export let latestWorkData: latestWorkData;

export const commonData = async () => {
  return new Promise<boolean>(async (resolve, reject) => {
    // contactDetails = demoContactDetails;
    //testimonialsData = demoTestimonialsData;
    // statistics = demoStatistics;
    // latestWorkData = demoLetestWork;
    await fetchData();
    // setTimeout(() => {
    //   resolve(true);
    // }, 500);
    resolve(true);
  });
};

interface contact {
  address: string;
  email: string;
  phone: string;
}
interface stat {
  founded: number;
  experience: number;
  customers: number;
  projects: number;
}

const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

async function fetchContact(): Promise<contact> {
  const response = await fetch(`/api/getcontact`, options);
  const data = await response.json();
  const resData = data.data.Items[0];
  const refineDat = {
    address: `${resData.street.S},${resData.suburb.S}, ${resData.state.S}, ${resData.pin.S}`,
    email: resData.email.S,
    phone: resData.phone.S,
  };
  return refineDat;
}

async function fetchStatistic(): Promise<stat> {
  const response = await fetch(`/api/getstat`, options);
  const data = await response.json();
  const resData = data.data.Items[0];
  const refineDat = {
    founded: Number(resData.found.S),
    experience: Number(resData.exp.S),
    customers: Number(resData.customers.S),
    projects: Number(resData.projects.S),
  };
  return refineDat;
}

async function fetchData() {
  const [contact, stat] = await Promise.all([fetchContact(), fetchStatistic()]);
  contactDetails = contact;
  //contactDetails = demoContactDetails;
  statistics = stat;
  //console.log(contact, stat);
}
