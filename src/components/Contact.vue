/* eslint-disable */ 
<template>
        <div>
            <h1 class="title">Contact</h1>
            
            <p>Please note that this form is only for contacting the admin of this site. Any inquiries about specific shows or 
                open mic sessions should be directed to the host of the open mic.</p>

            <form id='contact-form'>
                <div class="field">
                    <label class="label">Email Address:</label>
                    <div class="control">
                        <input class="input" type="email" placeholder="Enter your email" v-model="model.sender">
                    </div>
                </div>

                <div class="field">
                    <label class="label">Subject:</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Enter your subject" v-model="model.subject" >
                    </div>
                </div>

                <div class="field">
                    <label class="label">Message:</label>
                    <div class="control">
                        <textarea class="textarea" placeholder="Enter your message" v-model="model.message" ></textarea>
                    </div>
                </div>

                <div class="field">
                    <div class="control">
                        <button class="button is-link">Send Message</button>
                    </div>
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
