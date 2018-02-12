/* eslint-disable */ 
<template>
        <div>
            <h1>Contact</h1>
            
            <p>Please note that this form is only for contacting the admin of this site. Any inquiries about specific shows or 
                open mic sessions should be directed to the host of the open mic.</p>

            <form id='contact-form'>
                 <div class="form-group">
                    <label for="exampleInputEmail1">Email Address:</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" v-model="model.sender" aria-describedby="emailHelp" placeholder="Enter email">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class='form-group'>
                    <label for='subject'>Subject:</label>
                    <input type='text' id='subject' name ='subject' class='form-control' v-model="model.subject" placeholder="Enter email subject" />
                </div>

                <div class='form-group'>
                    <label for='message'>Message:</label>
                    <textarea id='message' name ='message' class='form-control' v-model="model.message" placeholder="Enter your message"></textarea>
                </div>
                <div class='form-group'>
                    <button type="submit" class="btn btn-primary">Send Message</button>
                </div>
            </form>
        </div>
</template>

<script>
export default {
  name: 'Help',
  data () {
    return {
        title: 'Open Mic - Contact',
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
