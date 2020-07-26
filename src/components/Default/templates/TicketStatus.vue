<template>
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
        <div class="prize-option mt-3">
            <button class="btn btn-success" v-on:click="state.rewardOptions = !state.rewardOptions">
                <i class="fa fa-gift"></i> Claim Reward <i class="fa fa-caret-down"></i>
            </button>

            <div class="mt-3 mt-2 animated fadeIn" v-if="state.rewardOptions">
                <div class="row">
                    <div class="col-sm-6">
                        <select id="" class="form-control" v-on:change="isValue" v-model="data.type">
                            <option value="" selected disabled>--Select Type--</option>
                            <option value="prize">Prize</option>
                            <option value="value">Value</option>
                        </select>
                    </div>
                    <div class="col-sm-6" v-if="!state.isValue">
                        <input type="text" class="form-control" placeholder="Enter Address Here..." v-model="data.address">
                    </div>
                    <div class="col-sm-6" v-if="!state.isValue">
                        <input type="text" class="form-control" placeholder="Upload your ID" v-model="data.id_card_image">
                        <div class="image">
                            <upload-image is="upload-image"
                                          :url="forms.create.url"
                                          :max_files="1"
                                          name="file"
                                          :resize_enabled="true"
                                          :resize_max_width="640"
                                          :button_html="forms.create.confirm"
                                          :button_class="'button is-primary'"
                                          v-on:upload-image-attemp="uploadImageAttempt"
                                          v-on:upload-image-success="uploadImageSuccess"
                                          v-on:upload-image-failure="uploadImageFailure"
                                          v-on:upload-image-loaded="uploadImageLoaded"
                                          v-on:upload-image-submit="uploadImageSubmit"
                                          v-on:upload-image-clicked="uploadImageClicked"
                                          v-on:upload-image-removed="uploadImageRemoved"
                            ></upload-image>
                        </div>
                    </div>
                    <div class="col-sm-6" v-if="state.isValue">
                        <select class="form-control" v-model="data.bank">
                            <option value="" selected disabled>Select Bank</option>
                            <option v-bind:value="data.name" v-for="data in banks">{{data.name}}</option>
                        </select>
                    </div>
                    <div class="col-sm-6" v-if="state.isValue">
                        <input type="number" class="form-control" placeholder="Enter Account Number" v-model="data.account_no"
                               oninput="javascript: if (this.value.length > 10) this.value = this.value.slice(0, 10);">
                    </div>
                    <div class="col-sm-6" v-if="state.isValue">
                        <input type="text" class="form-control" placeholder="Enter Account Name" v-model="data.account_name">
                    </div>
                    <div class="col sm-12 mt-2">
                        <button class="btn btn-primary btn-block" v-on:click="submit">
                            Request <i class="k-loader k-loader--light" v-if="state.loader"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import allBanks from '../../../shared/utilities/banks.json';
    import Swal from 'sweetalert2';
    import {UserService} from '@/shared/services/User';
    import {NotificationService} from '@/shared/services/Notification';
    import {CUSTOM_CONSTANTS} from '@/shared/utilities/constants';
    import {triggerModalOrOverlay} from '@/shared/utilities/helper';
    import UploadImage from 'vue-upload-image';


    @Component({components: {UploadImage}})
    export default class TicketStatus extends Vue {
        

        get stakes() {
            return this.$store.getters.stakes;
        }

        banks: any[] = [];

        state  = {
            rewardOptions: false,
            isValue: false,
            loader: false
        };

        data = {
            type: '',
            bank: '',
            account_no: '',
            account_name: '',
            address: '',
            id_card_image: ''
        } as any;

        mounted(): void {
            // console.log(allBanks);
            this.banks = allBanks;
        }

        isValue(e: any): void {
           this.state.isValue = e.target.value === 'value';
        }

        submit(): void {
            const form = this.data;
            if (form.type === 'value' && (form.bank === '' || form.account_no === '' || form.account_name === '')) {
                Swal.fire('Invalid Data', 'Enter Account Details to Continue');
                return;
            } else if (form.type === 'prize' && form.address === ''){
                Swal.fire('Invalid Data', 'Enter Destination Address');
                return;
            }

            let payload: any;
            payload = this.data;
            if (form.type === 'value') {
                delete payload['address'];
            } else {
                delete payload['bank'];
                delete payload['account_no'];
                delete payload['account_name'];
            }
            console.log(payload);
            this.state.loader = true;
            UserService.claimPrize(this.stakes.ticket_no, payload).then(res => {
                this.state.loader = false;
                console.log(res);
                this.state.rewardOptions = false;
                this.state.isValue = false;
                Object(this.data).forEach((e: any, i: number) => {
                    this.data[e] = ''
                });
                Swal.fire('Successful', `${res.data.message}`, 'success');
                triggerModalOrOverlay("CLOSE",  "modal-fullscreen");
            }, err => {
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
    .game-status {
        h3  {color: #0D7B3C}
        .table th {
            background-color: rgba(54, 134, 21, 0.2);;
            color: #3a3531;
        }
        .prize-option{
            .form-control {
                height: 40px !important;
                font-size: 13px !important;
                &:focus {
                    border-color: #0D7B3C;
                }
            }
        }
    }
</style>
