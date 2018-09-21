// Chart Params
let svgWidth = 960;
let svgHeight = 500;


let margin = { top: 20, right: 40, bottom: 60, left: 50};

// width = 960 - 50 - 40 
let width = svgWidth - margin.left - margin.right;
// height = 500 - 20 - 60
let height = svgHeight - margin.top - margin.bottom;

// Create a SVG Wrapper append SVG Group that will 
// hold the chart 
// shift the left and top margins
let svg = d3
    .select('body')
    .append('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight)


let chartGroup = svg.append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`)

d3.csv('data.csv', (error, smurfData) => {
    if(error) throw error
    console.log(smurfData)
    console.log([smurfData])

    let parseTime = d3.timeParse('%d-%b-%Y');

    smurfData.forEach(function(data) {
        data.date = parseTime(data.date)
        data.dow_index = parseInt(data.dow_index)
        data.smurf_sightings = parseInt(data.smurf_sightings)
    })

    let xTimeScale = d3.scaleTime()
    .domain(d3.extent(smurfData, d => d.date)) //[min,max]
    .range([0, width])

    let yLinearScale1 = d3.scaleLinear()
        .domain([0, d3.max(smurfData, d => d.dow_index)])
        .range([height, 0])

    let yLinearScale2 = d3.scaleLinear()
        .domain([0, d3.max(smurfData, d => d.smurf_sightings)])
        .range([height, 0])
    
    let bottomAxis = d3.axisBottom(xTimeScale).tickFormat(d3.timeFormat('%d-%b-%Y'))

    let leftAxis = d3.axisLeft(yLinearScale1)
    let rightAxis = d3.axisRight(yLinearScale2);

    // xaxis
    chartGroup.append('g')
        .attr('transform', `translate(0, ${height})`)
        .call(bottomAxis)
    // left axis
    chartGroup.append('g')
        .classed('green', true)
        .call(leftAxis)

    //right axis
    chartGroup.append('g')
        .classed('blue', true)
        .attr('transform', `translate(${width}, 0)`)
        .call(rightAxis)

    // stores a function when appended to the charGroup
    let line1 = d3.line()
        .x(d => xTimeScale(d.date))
        .y(d => yLinearScale1(d.dow_index))
    
    console.log(line1);
    let line2 = d3.line()
        .x(d => xTimeScale(d.date))
        .y(d => yLinearScale2(d.smurf_sightings))
    
    chartGroup.append('path')
        .data([smurfData])
        .attr('d', line1)
        .classed('line green', true)
    
    chartGroup.append('path')
        .data([smurfData])
        .attr('d', line2)
        .classed('line blue', true)

    chartGroup.append('text')
        .attr('transform', `translate(${width / 2}, ${height + margin.top + 20}) `)
        .classed('dow-text text', true)
        .text('Dow Index')

    chartGroup.append('text')
    .attr('transform', `translate(${width / 2}, ${height + margin.top + 37}) `)
    .classed('smurf-text text', true)
    .text('Smurf Sightings')


})