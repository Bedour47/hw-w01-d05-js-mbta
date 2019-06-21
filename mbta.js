const subway = {
    stations: [
        {
            line: 'Red',
            stationName:'South Station',
            stationNumber: 1,
        },
        {
            line: 'Red',
            stationName:'Park Street',
            stationNumber: 2,
        },
        {
            line: 'Red',
            stationName:'Kendall',
            stationNumber: 3,
        },
        {
            line: 'Red',
            stationName:'Central',
            stationNumber: 4,
        },
        {
            line: 'Red',
            stationName:'Harvard',
            stationNumber: 5,
        },
        {
            line: 'Red',
            stationName:'Porter',
            stationNumber: 6,
        },
        {
            line: 'Red',
            stationName:'Davis',
            stationNumber: 7,
        },
        {
            line: 'Red',
            stationName:'Alewife',
            stationNumber: 8,
        },
        ///////////Green
        {
            line: 'Green',
            stationName:'Government Center',
            stationNumber: 1,
        },
        {
            line: 'Green',
            stationName:'Park Street',
            stationNumber: 2,
        },
        {
            line: 'Green',
            stationName:'Boylston',
            stationNumber: 3,
        },
        {
            line: 'Green',
            stationName:'Arlington',
            stationNumber: 4,
        },
        {
            line: 'Green',
            stationName:'Copley',
            stationNumber: 5,
        },
        {
            line: 'Green',
            stationName:'Hynes',
            stationNumber: 6,
        },
        {
            line: 'Green',
            stationName:'Kenmore',
            stationNumber: 7,
        },
        //////////////////Orange
        {
            line: 'Orange',
            stationName:'North Station',
            stationNumber: 1,
        },
        {
            line: 'Orange',
            stationName:'Haymarket',
            stationNumber: 2,
        },
        {
            line: 'Orange',
            stationName:'Park Street',
            stationNumber: 3,
        },
        {
            line: 'Orange',
            stationName:'State',
            stationNumber: 4,
        },
        {
            line: 'Orange',
            stationName:'Downtown Crossing',
            stationNumber: 5,
        },
        {
            line: 'Orange',
            stationName:'Chinatown',
            stationNumber: 6,
        },
        {
            line: 'Orange',
            stationName:'Back Bay',
            stationNumber: 7,
        },
        {
            line: 'Orange',
            stationName:'Forest Hills',
            stationNumber: 8,
        },
    ],

    totalStopsForSameLine: function(startStation, endStation){
        let total = 0;
        let s1, s2;
        for(let i=0; i<this.stations.length; i++){
            if(this.stations[i].stationName === startStation)
                s1 = this.stations[i].stationNumber;
            if(this.stations[i].stationName === endStation)
                s2 = this.stations[i].stationNumber;
        }
        total = Math.abs(s1 - s2);
        return console.log(`Total Stops is: ${total} Stations.`);
    },

    totalStopsDifferentLines: function(startLine, startStation, endLine, endStation){
        let total = 0;
        let station1, station2;
        let intersectionStationLine1, intersectionStationLine2;

        for(let i=0; i<this.stations.length; i++){
            if(this.stations[i].stationName === startStation){
                station1 = this.stations[i].stationNumber;
            };
            if(this.stations[i].stationName === endStation){
                station2 = this.stations[i].stationNumber;
            };
        }
        if(startLine === 'Red' || 'Green')
        intersectionStationLine1 = 2;
        else if(startLine === 'Orange')
        intersectionStationLine1 = 3;

        if(endLine === 'Red' || 'Green')
        intersectionStationLine2 = 2;
        else if(endLine === 'Orange')
        intersectionStationLine2 = 3;


        total = Math.abs(station1 - intersectionStationLine1) + Math.abs(station2 - intersectionStationLine2);
        return console.log(`Total Stops is: ${total} Stations.`);
    },
};

const stopsBetweenStations = function(startLine, startStation, endLine, endStation){
    if(startLine === endLine)
    subway.totalStopsForSameLine(startStation, endStation);
    else
    subway.totalStopsDifferentLines(startLine, startStation, endLine, endStation);
    };

//testing:
stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife') // 0 stops
stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station') // 7 stops
stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore') // 6 stops