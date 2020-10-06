import report1 from "../public/reports/report-1.txt";
import report2 from "../public/reports/report-2.txt";
import report3 from "../public/reports/report-3.txt";
import report4 from "../public/reports/report-4.txt";
import report5 from "../public/reports/report-5.txt";
import report6 from "../public/reports/report-6.txt";
import report7 from "../public/reports/report-7.txt";
import report8 from "../public/reports/report-8.txt";
import report9 from "../public/reports/report-9.txt";
import report10 from "../public/reports/report-10.txt";
import report11 from "../public/reports/report-11.txt";
import report12 from "../public/reports/report-12.txt";
import report13 from "../public/reports/report-13.txt";
import report14 from "../public/reports/report-14.txt";
import report15 from "../public/reports/report-15.txt";
import report16 from "../public/reports/report-16.txt";
import report17 from "../public/reports/report-17.txt";
import report18 from "../public/reports/report-18.txt";
import report19 from "../public/reports/report-19.txt";
import report20 from "../public/reports/report-20.txt";
import report21 from "../public/reports/report-21.txt";
import report22 from "../public/reports/report-22.txt";
import report23 from "../public/reports/report-23.txt";
import report24 from "../public/reports/report-24.txt";
import report25 from "../public/reports/report-25.txt";
import report26 from "../public/reports/report-26.txt";
import report27 from "../public/reports/report-27.txt";
import report28 from "../public/reports/report-28.txt";
import report29 from "../public/reports/report-29.txt";
import report30 from "../public/reports/report-30.txt";
import report31 from "../public/reports/report-31.txt";
import report32 from "../public/reports/report-32.txt";
import report33 from "../public/reports/report-33.txt";
import report34 from "../public/reports/report-34.txt";
import report35 from "../public/reports/report-35.txt";
import report36 from "../public/reports/report-36.txt";
import report37 from "../public/reports/report-37.txt";
import report38 from "../public/reports/report-38.txt";
import report39 from "../public/reports/report-39.txt";
import report40 from "../public/reports/report-40.txt";
import report41 from "../public/reports/report-41.txt";
import report42 from "../public/reports/report-42.txt";
import report43 from "../public/reports/report-43.txt";
import report44 from "../public/reports/report-44.txt";
import report45 from "../public/reports/report-45.txt";
import report46 from "../public/reports/report-46.txt";
import report47 from "../public/reports/report-47.txt";
import report48 from "../public/reports/report-48.txt";
import report49 from "../public/reports/report-49.txt";
import report50 from "../public/reports/report-50.txt";

const contents = [
  report1,
  report2,
  report3,
  report4,
  report5,
  report6,
  report7,
  report8,
  report9,
  report10,
  report11,
  report12,
  report13,
  report14,
  report15,
  report16,
  report17,
  report18,
  report19,
  report20,
  report21,
  report22,
  report23,
  report24,
  report25,
  report26,
  report27,
  report28,
  report29,
  report30,
  report31,
  report32,
  report33,
  report34,
  report35,
  report36,
  report37,
  report38,
  report39,
  report40,
  report41,
  report42,
  report43,
  report44,
  report45,
  report46,
  report47,
  report48,
  report49,
  report50,
];

const getReports = () => {
  const arr = [];
  for (let i = 0; i < 50; i++) {
    arr.push({
      title: `report-${i + 1}`,
      body: contents[i],
      tags: [],
    });
  }
  return arr;
};

export default getReports;
