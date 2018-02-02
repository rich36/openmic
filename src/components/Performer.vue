/* eslint-disable */ 
<template>
        <div>
            <h3>{{performer.name}}</h3>
            <!--<p>ID: {{ $route.params.id }}</p>-->
             <div class="row" v-for="pd in performer.performance_descriptions">
               <div class='col-lg-12'> At {{pd.venue_name}} at {{pd.start_time}}</div>
            </div>
        </div>
</template>

<script>
export default {
  name: 'Performer',
  data () {
    return {
        'performer' :{
            name: 'Johnny Songwriter',
            performance_descriptions: [
                {
                    venue_name: 'Yellow Cab',
                    performance_id: 1,
                    venue_id: 1,
                    start_time: '2018-02-02 8:00PM'
                }
            ]
        },
        title: 'Performer - Johnny Songwriter'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
