<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-4">
                <h1>Http</h1>
                <form @submit.prevent="sendData">
                    <div class="form-group">
                        <label for="Name">Name</label>
                        <input type="tetx" class="form-control" id="Name" v-model="user.name" required>
                    </div>
                    <div class="form-group">
                        <label for="Sname">Surname</label>
                        <input type="text" class="form-control" id="Sname" v-model='user.sname' required>
                    </div>
                    <div class="form-group">
                        <label for="Email">Email</label>
                        <input type="email" class="form-control" id="Email" v-model='user.email' required>
                    </div>
                <div class="btn-group btn-group-sm" role="group" aria-label="">
                    <button type='submit' class="btn btn-sm btn-success" >Send data</button>                    
                    <button type="button" class="btn btn-sm btn-primary" @click='getData()'>Get Data</button>                    
                    <button type="button" class="btn btn-sm btn-info" @click='saveSettings()'>SaveSettings</button>
                </div>
                </form>
            </div>
            <hr>
            <br>
            <div class="col-8">
                <table class="table sm">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Surname</th>
                    <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, index) in data" :key="user + index">
                        <th scope="row">{{index}}</th>
                        <td>{{user.name}}</td>
                        <td>{{user.sname}}</td>
                        <td>{{user.email}}</td>
                        <td>
                            <div class="btn btn-warning" @click='deleteUser(index)' >Delete</div>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "Dmytro",
        sname: "Harazdovskiy",
        email: "harazdovskiy@gmail.com",
      },
      data: {}
    };
  },
  resourse: {},
  methods: {
    sendData() {
      this.resourse.save({}, this.user)
        .then(response => {
            console.log(response);
            this.getData();
          }, error => console.error(error));
    },

    getData() {
        this.resourse.query().then(response => {
            this.data = response.body;
            console.log(response);
        }, error => console.error(error));
    },

    deleteUser(id){
        console.log(id);
        this.resourse.delete({id})
        .then(response => this.getData());
    },

    saveSettings(){
        this.resourse.saveSettings(this.user);
    }
  },
  created() {
       const customActions = {
            saveSettings: {method: 'POST', url: 'settings.json'}
        }
      this.resourse = this.$resource('data{/id}.json', {}, customActions);
  }
};
</script>

<style>

</style>
