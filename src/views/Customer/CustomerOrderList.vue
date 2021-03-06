<template>
    <div>
        <a-card title="客户订单">
            <span slot="extra">
                <a-button v-if="!isThin" type="primary" size="small" @click="$router.push({name: 'CreateOrder', params: {customerId: id}})">新建</a-button>
                <a-button v-else @click="$router.push({name: 'customerOrders', params: {id}})" type="link" size="small">查看更多</a-button>
            </span>
            <a-table :dataSource="list" :columns="columns" :rowKey="row => row.id" size="small" :pagination="pagination">
                <span slot="action" slot-scope="order">
                    <a :data-id="order.id" @click="$router.push({name: 'CreateOrder', params: {id: order.id}})">修改</a>
                    <a :data-id="order.id" @click="$router.push({name: 'orderDetail', params: {id: order.id}})" style="margin-left: 10px">详情</a>
                    <a-popconfirm
                            title="确定删除此订单吗？"
                            @confirm="deleteOrder(order.id)"
                            okText="确定"
                            cancelText="取消"
                    >
                        <a style="margin-left: 10px">删除</a>
                    </a-popconfirm>
                </span>
            </a-table>
        </a-card>
    </div>
</template>

<script>
    import {API} from "../../api";
    import {CustomerOrders, DeleteOrder} from "../../api/template";

    export default {
        name: "CustomerOrderList",
        props: {
            id: {
                required: true
            },
            isThin: {
                default: false,
                type: Boolean
            }
        },
        data() {
            return {
                columns: [
                    {
                        title: '下单人',
                        dataIndex: 'orderName',
                        width: 80
                    },
                    {
                        title: '订单号',
                        dataIndex: 'orderNo',
                        width: 150
                    },
                    {
                        title: '金额',
                        dataIndex: 'orderAmount',
                        width: 120
                    },
                    {
                        title: '下单手机号',
                        dataIndex: 'orderPhone',
                        width: 150
                    },
                    {
                        title: '下单时间',
                        dataIndex: 'orderTime',
                        width: 180,
                        customRender(scopedSlot) {
                            if (scopedSlot) {
                                return new Date(scopedSlot).toLocaleString();
                            }
                        }
                    },
                    {
                        title: '创建时间',
                        dataIndex: 'createAt',
                        width: 180,
                        customRender(scopedSlot) {
                            if (scopedSlot) {
                                return new Date(scopedSlot).toLocaleString();
                            }
                        }
                    },
                    {
                        title: '来源',
                        dataIndex: 'original',
                        width: 100
                    },
                    {
                        title: '操作',
                        width: 200,
                        scopedSlots: { customRender: 'action' },
                    }
                ],
                list: [],
                pagination: {
                    pageSize: this.isThin ? 5 : 15,
                }
            }
        },
        mounted() {
            this.queryOrders();
        },
        methods: {
            queryOrders() {
                let data = {
                    size: this.pagination.pageSize,
                    page: this.pagination.current,
                };
                API(CustomerOrders, {
                    params: {
                        id: this.id
                    },
                    data
                }).then(res => {
                    this.list = res.data.results;
                    this.pagination = {
                        current: res.data.metadata.page,
                        total: res.data.metadata.count,
                        pageSize: res.data.metadata.size,
                    }
                });
            },
            deleteOrder(order) {
                let id = order
                API(DeleteOrder,{
                    params: {
                        id,
                    }
                }).then(res => {
                    console.log(res)
                    this.$message.info('删除成功')
                    this.queryOrders();
                }).catch(err => {
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped>

</style>
