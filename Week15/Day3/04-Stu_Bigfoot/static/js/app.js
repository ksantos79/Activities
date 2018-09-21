

function buildPlot() {
    // YOUR CODE HERE
    // fetch the data from your api
    // plot the results
    /* data route */
    let url = "/data";
    d3.json(url).then((response) => {
        console.log(response);
        let trace1 = {
            type: "scatter",
            mode: "lines",
            name: "Bigfooe Sightings",
            x: response.map(data => data.year),
            y: response.map(data => data.sightings),
            line: {
                color: "red"
            }
        }
        let data = [trace1]

        let layout = {
            title: "Bigfood Sightings per Year",
            xaxis: {
                type: "date"
            },
            yaxis: {
                autorange: true,
                type: "linear"
            }
        }
        Plotly.newPlot('plot',data,layout);
    });
}

buildPlot();
