<template v-if="stakes">
    <div class="table-responsive game-status">
        <h3 class="text-success">Game Status</h3>
        <table class="table table-bordered table-striped table-hover">
            <tr>
                <th>Game Name:</th>
                <td>{{stakes &&  stakes.name || '-'}}</td>
            </tr>
            <tr>
                <th>#Ticket Number:</th>
                <td>{{stakes && stakes.ticket_no}}</td>
            </tr>
            <tr>
                <th>#Reference:</th>
                <td>{{stakes && stakes.game_run.game_run_ref || '-'}}</td>
            </tr>
            <tr>
                <th>Amount(&#8358;):</th>
                <td>{{stakes && stakes.amount}}</td>
            </tr>
            <tr>
                <th>Status:</th>
                <td>
                    <span class="badge" :class="stakes && stakes.game_run.status === 'completed' ? 'badge-success' : 'badge-danger'">
                        {{stakes && stakes.game_run.status || 'completed'}}
                    </span>
                </td>
            </tr>
        </table>
        <div class="price-option mt-2">
            <button class="btn btn-success">
                <i class="fa fa-gift"></i> Claim Reward
            </button>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({})
    export default class TicketStatus extends Vue {

        get stakes() {
            return this.$store.getters.stakes
        }
        state  = {
            loader: false,
        };

    }
</script>

<style lang="scss">
    .game-status {
        h3  {color: #0D7B3C}
        .table th {
            background-color: rgba(54, 134, 21, 0.2);;
            color: #3a3531;
        }
    }
</style>
