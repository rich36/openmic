<template>

        <div>
            <h3>Upcoming Performances Near You</h3>

            
                <div v-for="performance in performances">
                    <h2>{{performance.venue.name}}</h2>
                    <p>{{performance.dates.start}}</p>
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
              }

          }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
