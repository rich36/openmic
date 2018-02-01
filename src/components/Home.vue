<template>

        <div>
            <h3>Upcoming Performances Near You</h3>

        </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      'performances' : [
          {
              'venue' : {
                  'name': 'Yellow Cab Tavern'
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
