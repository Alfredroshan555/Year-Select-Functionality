import { useRef, useState } from "react";

const years = [
  "2000",
  "2001",
  "2002",
  "2003",
  "2004",
  "2005",
  "2006",
  "2007",
  "2008",
  "2009",
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
];

export const YearSelect = () => {
  const [selectedYear, setSelectedYear] = useState<
    number | string | null | any
  >(Number(years[0])); // Set the selected year here

  const start = useRef(0); //Start Count
  const end = useRef(5); // End Count

  console.log("selectedYear", selectedYear);
  console.log("start", start.current);
  console.log("end", end.current);

  const handlePrevious = () => {
    if (selectedYear <= Number(years[0])) {
      setSelectedYear(Number(years[0]));
      return;
    }
    setSelectedYear((prev: any) => prev - 1);
    const index = years.indexOf(selectedYear.toString());
    console.log("selectedYearIndex", index);

    if (index === start.current) {
      start.current = start.current - 1;
      end.current = end.current - 1;
    }
  };

  const handleNext = () => {
    if (selectedYear >= years[years.length - 1]) {
      setSelectedYear(Number(years[years.length - 1]));
      return;
    }

    setSelectedYear((prev: any) => prev + 1);

    const index = years.indexOf(selectedYear.toString());
    console.log("selectedYearIndex", index);

    if (index + 1 === end.current) {
      start.current = start.current + 1;
      end.current = end.current + 1;
    }
  };

  return (
    <div>
      <button onClick={handlePrevious}>Previous</button>
      {years.slice(start.current, end.current).map((year, i) => {
        console.log("i", i);
        return (
          <div
            key={year}
            style={{ fontSize: selectedYear === Number(year) ? "40px" : "" }}
          >
            {year}
          </div>
        );
      })}
      {/* <div>{years[activeYear]}</div> */}
      <button onClick={handleNext}>Next</button>
    </div>
  );
};
