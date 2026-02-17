let  dataPoints = [42, 10, 500, 2, 77];
dataPoints.slice().sort((a,b) => a-b);
    console.log(dataPoints);

    // descending order 
    dataPoints.slice().sort((a,b) => b-a);
    console.log(dataPoints);

    //reverse 
    console.log(dataPoints.slice().reverse())
    