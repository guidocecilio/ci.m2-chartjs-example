d3.csv("data/referendum.csv").then(makeGraphs);

function makeGraphs(data) {
    var commitmentByProgrammeNameChart = dc.barChart('#commitment-by-programme-name');
    
    const AREA_CODE_KEY = 'Area Code';
    const ELECTORATE_KEY = 'Electorate';

    var parseDate = d3.timeParse("%d/%m/%Y");
  
    data.forEach((d) => {
        d[ELECTORATE_KEY] = Number(d[ELECTORATE_KEY]);
    });

    console.log(data);
}