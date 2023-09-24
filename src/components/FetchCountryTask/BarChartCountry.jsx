import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
function BarChartCountry() {
  return (
    <div className="w-10/12 h-full">
      <BarGroup arr={tenHighestPopulation} />

      <div className='flex justify-end'>
        <AnchorLink href='#pageTitle'><span className='p-3 bg-purple-700 text-white rounded-full cursor-pointer'>top</span></AnchorLink>
      </div>
    </div>
  );
}

const BarGroup = ({arr}) => {
  const bar = arr.map((b) => {
    let country = b.country;
    let pop = b.population;
      let popPercent = calculatePercentage(pop);
      //console.log(popPercent);
    let style = `w-[${popPercent}%] h-full bg-orange-500`;
    return (
      <div key={country} id='CountryBarChart' className="flex flex-col justify-between w-8/12 mx-auto">
        <div  className="flex justify-between items-center gap-2">

          <div className="basis-1/5 uppercase">
            {country}
          </div>

          <div className="basis-3/5">
            <div className="h-4">
              <div className={style}></div>
            </div>
          </div>

          <div className="basis-1/5 ">
            {pop.toLocaleString()}
          </div>

        </div>
      </div>
    );
  })

  return (
    <div>
      {bar}
    </div>
  )

}


const tenHighestPopulation = [
  { country: 'World', population: 7693165599 },
  { country: 'China', population: 1377422166 },
  { country: 'India', population: 1295210000 },
  { country: 'USA', population: 323947000 },
  { country: 'Indonesia', population: 207035893 },
  { country: 'Brazil', population: 206135893 },
  { country: 'Pakistan', population: 194125062 },
  { country: 'Nigeria', population: 186988000 },
  { country: 'Bangladesh', population: 161006790 },
  { country: 'Russia', population: 146599183 },
  { country: 'Japan', population: 126960000 },
]


function calculatePercentage(value) {
  const total = 7693165599;
  if (typeof value !== 'number' || value < 0) {
    return 'Invalid input';
  }

  const percentage = ((value / total) * 100);

  return parseInt(percentage);
}

export default BarChartCountry