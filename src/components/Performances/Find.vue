/* eslint-disable */
<template>
        <div>
            <h1 class='title'>Find Performance</h1>

            <p>Find a performance near you to attend or to sign up for.</p>

            <form id='find-performance-form'>

                <div class="field">
                    <label class="label">Location:</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="City, State" id="locationName" v-model="model.locationname">
                    </div>
                </div>

                <div class="field">
                    <div class="control">
                        <button class="button is-link">Submit</button>
                    </div>
                </div>
            </form>
        </div>
</template>
<script>

export default {
  name: 'FindPerformance',
  data () {
    return {
        title: 'Open Mic - Find Performance',
        model: {
            locationname: ''
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
