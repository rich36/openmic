/* eslint-disable */ 
<template>
        <div>
            <h3>{{venue.name}}</h3>

            <h4>Performances</h4>
             <div class="row" v-for="pd in venue.performance_descriptions">
               <div class='col-lg-12'>{{pd.start_time}}</div>
            </div>
        </div>
</template>

<script>
export default {
  name: 'Venue',
  data () {
    return {
        'venue' : {
            name: 'The Yellow Cab Tavern',
            performance_descriptions: [
                {
                    venue_name: 'Yellow Cab',
                    performance_id: 1,
                    venue_id: 1,
                    start_time: '2018-02-02 8:00PM'
                }
            ]
        },
        title: 'Venue - The Yellow Cab Tavern'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
