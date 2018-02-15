/* eslint-disable */ 
<template>
        <div>
            <h1>Register</h1>
            
            <p>Please note that this form is only for contacting the admin of this site. Any inquiries about specific shows or 
                open mic sessions should be directed to the host of the open mic.</p>

            <form id='contact-form'>


                 <div class="form-group">
                    <label for="exampleInputEmail1">Email Address:</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" v-model="model.sender" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                
                <div class='form-group'>
                    <button type="submit" class="btn btn-primary">Create Account</button>
                </div>
            </form>
        </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
        title: 'Open Mic - Register',
        model: {
            subject: '',
            message: '',
            sender: ''
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
