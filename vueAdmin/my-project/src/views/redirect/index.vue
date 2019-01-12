<script>
export default {
    beforeCreate() {
        const { params, query } = this.$store;
        const { path } = params;
        this.$router.replace({path:'/' + path,query});
    },
    render(h) {
        return h();
    },
}
</script>