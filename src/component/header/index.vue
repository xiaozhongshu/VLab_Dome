<style src="./index.css" scoped></style>
<template src="./index.html"></template>

<script>

  import storage from '../../common/storage';

  export default {
    components: {},
    mixins: [],
    data: () => ({
      storage: storage
    }),
    props: {
      index: {
        type: Number,
        required: true
      },
      isShowCategoryLeft: {
        type: Boolean,
        required: false
      }
    },
    created() {

    },
    mounted() {
      console.log(this.index)
    },
    methods: {
      handleExit: function () {
        this.$router.push({path: '/member'});
      }
    }
  }
</script>
