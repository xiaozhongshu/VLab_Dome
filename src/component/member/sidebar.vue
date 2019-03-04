<style src="./sidebar.css" scoped></style>
<template src="./sidebar.html"></template>

<script>
  export default {
    components: {

    },
    mixins: [],
    data: () => ({
      isMask: false
    }),
    props: {
      items: {
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
      console.log(this.items)
    },
    methods: {
      handleFounder: function () {
        if(this.$route.path == '/about'){
          window.scrollTo(0, 1138);
        } else {
          this.$router.push({path: '/about'});
        }
      },
      handleHistory: function () {
        if(this.$route.path == '/about'){
          window.scrollTo(0, 1748);
        } else {
          this.$router.push({path: '/about'});
        }
      },
      handleShowMask: function () {
        this.isMask = true
      },
      handleHideMask: function () {
        this.isMask = false
      }
    }
  }
</script>
