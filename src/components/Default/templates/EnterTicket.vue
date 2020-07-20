<template>
    <div class="wrapper p-3">
        <h2 class="text-center">Check Game Status with ticket Code</h2>
        <div class="form-group row pl-3 pr-3">
            <div class="col-md-10">
                <input type="text" name="ticket" class="form-control" placeholder="Enter Ticket Code" v-model="ticketNumber">
            </div>
            <div class="col-md-2">
                <button class="btn btn-block" :disabled="!ticketNumber" v-on:click="submitTicket">
                    <i class="fa fa-send"></i> load <i class="k-loader k-loader--skin-dark" v-if="state.loader"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {UserService} from '@/shared/services/User';
    import {NotificationService} from '@/shared/services/Notification';
    import {CUSTOM_CONSTANTS} from '@/shared/utilities/constants';
    import Swal from 'sweetalert2';
    import {triggerModalOrOverlay} from '@/shared/utilities/helper';

  @Component({})
  export default class EnterTicket extends Vue {

      state  = {
          loader: false
      };

      ticketNumber = '';

      submitTicket(): void {
          if (this.ticketNumber === '') {
              return;
          }
          this.state.loader = true;
          UserService.gameStatus(this.ticketNumber).then(res => {
              console.log(res);
              this.ticketNumber = '';
              this.state.loader = false;
              triggerModalOrOverlay("SHOW", "modal-fullscreen");
              this.$store.dispatch("openModal", 'TICKET_STAKES'); // assign data modal type to coming event
              this.$store.dispatch('gameStakes', res.data.data)
          }, err => {
              console.log(err.response);
              this.state.loader = false;
              if (err.response.status === 404) {
                  Swal.fire('Oops..!', `${err.response.data.message}`);
              } else {
                  NotificationService.error(
                      err.response.data.message,
                      null,
                      CUSTOM_CONSTANTS.DEFAULT_ERROR_MESSAGE
                  );
              }
          })
      }
  }
</script>

<style lang="scss">
    .wrapper {
        h2 {
            font-size: 28px;
            color: #dfe2ea;
            font-weight: bold;
        }
        .btn {
            background-color: #dfe2ea;
        }
    }
</style>
