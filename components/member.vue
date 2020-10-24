<template>
  <li>
    {{username}}
  </li>
</template>

<script>

import axios from 'axios';

export default {
    props: ['id', 'username'],
    // mounted() {
    //     const memberid = this.id
    //     console.log(memberid);
    //     axios({
    //         method: 'get',
    //         url: '/api/v8/users/' +memberid,
    //         headers: {'Authorization': 'Bot NzY4OTQxNzIwMjcxODQ3NDg1.X5HyyA.QnNqe1LJ7Cs59s7Ub53A_HxlENY', 'Content-Type' : 'application/json'}
    //     }).then(function(data) {
    //         console.log(data);
    //     })
    // }
};
</script>

<style>
</style>