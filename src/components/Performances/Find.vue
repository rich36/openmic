/* eslint-disable */ 
<template>
        <div>
            <h1>Find Performance</h1>
            
            <p>Find a performance near you to attend or to sign up for.</p>

            <form id='find-performance-form'>

                 <div class="form-group">
                    <label for="locationName">Location:</label>
                    <input type="text" class="form-control" id="locationName" v-model="model.sender"  placeholder="City, State">
                </div>
                
                <div class="input-group input-daterange">
                    <date-picker v-model="model.start" :config="config"></date-picker>
                    <div class="input-group-addon">to</div>
                    <date-picker v-model="model.end" :config="config"></date-picker>
                </div>

                <div class='form-group'>
                    <button type="submit" class="btn btn-primary">Find Performance</button>
                </div>
            </form>
        </div>
</template>
<script>
// Import required dependencies 
  import 'bootstrap/dist/css/bootstrap.css';
  
  // Import this component
  import datePicker from 'vue-bootstrap-datetimepicker';
  
  // Import date picker css
  import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css';

export default {
  name: 'FindPerformance',
  data () {
    return {
        title: 'Open Mic - Find Performance',
        model: {
            subject: '',
            message: '',
            sender: '',
            start: '2018-02-01',
            end: '2018-02-28'
        },
        config: {
            format: 'DD/MM/YYYY',
            useCurrent: false,
            showClear: true,
            showClose: true,
        }
    }
  },
    components: {
        datePicker
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
