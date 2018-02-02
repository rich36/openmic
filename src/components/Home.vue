/* eslint-disable */ 
<template>

        <div>
            <h3>Upcoming Performances Near You</h3>
            
                <div v-for="performance in performances">
                    <h2>Venue: {{performance.venue.name}}</h2>
                    <p>Start: {{performance.dates.start}}</p>

                    <h3>Schedule</h3>

                    <div class="row" v-for="p in performance.performancelist">
                        <div class="col-lg-6">
                            <router-link :to="{ name: 'Performer', params: { id: p.performer_id }}">{{p.name}}</router-link>
                        </div>
                        <div class="col-lg-6">{{p.start_time}}</div>
                    </div>

                </div>
            
        </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      'performances' : [
          {
              'venue' : {
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
