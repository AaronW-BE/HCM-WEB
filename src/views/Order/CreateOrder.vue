<template>
    <a-card>
        <a-tabs defaultActiveKey="1">
            <a-tab-pane tab="手动导入订单" key="1">
                <AddingOrdersManually :id="id" :customerId="customerId"></AddingOrdersManually>
            </a-tab-pane>
            <a-tab-pane tab="批量导入订单" key="2" forceRender v-if="!id">
                <ImportOrder></ImportOrder>
            </a-tab-pane>
        </a-tabs>
    </a-card>
</template>

<script>
    import AddingOrdersManually from "../../components/order/AddingOrdersManually";
    import ImportOrder from "../../components/order/ImportOrder";
    export default {
        name: "CreateOrder",
        components: {ImportOrder, AddingOrdersManually},
        props:['id', 'customerId'],
        data() {
            return {

            }
        },
        created() {

        },
        methods:{

        }
    }
</script>

<style scoped>

</style>
