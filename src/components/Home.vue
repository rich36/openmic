/* eslint-disable */
<template>
        <div>
            <section class="hero is-info is-small">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title">Open Mic</h1>
                        <h2 class="subtitle">A site for open mic performers, hosts and attendees</h2>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="container">
                    <div class="columns">
                        <div class="column">
                            <div class="card" id="upcoming-performances-card">
                                <div class="card-content">
                                    <h2 class="title">Upcoming Performances Near You</h2>
                                      <div v-for="performance in performances">
                                        <div class="section">
                                          <div class="tile">
                                              <article class="tile is-child notification is-primary">
                                                <p class="title"><router-link :to="{ name: 'Venue', params: { id: performance.venue.venue_id }}">
                                                {{performance.venue.name}}</router-link></p>
                                                <p class="subtitle">{{performance.dates.start}}</p>
                                              </article>
                                          </div>

                                          <div class="columns" v-for="p in performance.performancelist">
                                            <div class="column is-two-thirds">
                                                <router-link :to="{ name: 'Performer', params: { id: p.performer_id }}">{{p.name}}</router-link>
                                            </div>
                                            <div class="column is-one-third">{{p.start_time}}</div>
                                          </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card">
                                <div class="card-content">
                                    <h2 class="title">Open Mic</h2>
                                    <p>Open Mic is an online portal for open mic and open stage performers to find and register for performances.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
</template>

<script>
import {GetUpcomingPerformances } from '../managers/performanceManager.js'

export default {
  name: 'Home',
  data () {
    return GetUpcomingPerformances();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
