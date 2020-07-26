<template>
    <section>
        <h3 class="text-success">Games Played</h3>
        <div class="mt-2 print-btn">
            <button class="btn btn-outline-dark btn-sm" type="button" v-on:click="printGame">
                <i class="fa fa-print"></i> Print Games
            </button>
        </div>
        <main class="print-area">
            <div class="game-print-logo p-3">
                <img src="@/assets/images/mhl_logo.png" style="height: 60px"/>
            </div>
            <div class="table-responsive">
                <table class="table table-hover table-striped">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Ticket No</th>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-if="playedGames" v-for="(data, index) in playedGames">
                        <td>{{index + 1}}</td>
                        <td>{{data && data.data.ticket_no}}</td>
                        <td>{{data && data.game.name}}</td>
                        <td><span>&#8358;</span> {{data && data.data.amount}}</td>
                        <td>{{new Date(data && data.game.start_date) | dateFormat('MMM DD YYYY hh.mm a')}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </main>
    </section>
</template>

<script lang="ts">

    import {Vue} from 'vue-property-decorator';

    export default class PlayedGames extends Vue {

        get playedGames() {
            console.log(this.$store.getters.playedGames);
            return this.$store.getters.playedGames;
        }

        printGame(): void {
            window.print();
        }
    }
</script>

<style lang="scss">
    section {
        h3  {color: #0D7B3C}
        table {
            th {
                background-color: rgba(54, 134, 21, 0.2)!important;
                color: #3a3531!important;
            }
        }
        .game-print-logo {
            display: none;
            background-color: #0D7B3C;
        }
    }

    @media print {
        h3, .print-btn, .holder, #closeBtn {
            display: none !important;
        }

        section {
            .game-print-logo {
                display: block;
            }
            .print-area {
                display: block;
            }
        }
    }
</style>
