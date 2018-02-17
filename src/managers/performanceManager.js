
export function GetUpcomingPerformances()
{
  return GetUpcomingPerformancesByLocation(null);
}

function GetUpcomingPerformancesByLocation(location){

  var performances = {
    'performances' : [
        {
            'venue' : {
                'venue_id': 1,
                'name': 'Yellow Cab Tavern',
                'address' : {
                    'street': '',
                    'street 2' : '',
                    'city': 'Dayton',
                    'state' : 'OH',
                    'zip' : '45402'
                },
                'website' : '',
                'phone' : ''
            },
            'organizer' :{
                'name' : 'Mr. Open Mic'
            },
            'dates': {
                'start' : '2018-01-02 8:00 PM'
            },
            'performancelist' :  [
                    {
                        name: 'Johnny Songwriter',
                        performer_id: 1,
                        start_time: '8:00PM'
                    },
                    {
                        name: 'Chuckie Heartz',
                        performer_id: 2,
                        start_time: '8:30PM'
                    },
                    {
                        name: 'Kylie Ups',
                        performer_id: 3,
                        start_time: '9:00PM'
                    }
                ]
        }
    ]
  };

  return performances;
}
