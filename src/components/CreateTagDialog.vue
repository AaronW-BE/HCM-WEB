<template>
    <a-modal
            title="添加标签"
            :visible="show"
            @ok="handleTagModel"
            @cancel="closeModal"
    >
        <a-form :form="tag_info">
            <a-form-item label="标签名">
                <a-input
                        v-decorator="['name', { rules: [{ required: true, message: '请输入标签名' }] }]"
                />
            </a-form-item>
            <a-form-item label="标签样式">
                <a-input
                        type="color"
                        v-decorator="['type', {
                            initialValue: '#80cb54',
                            rules: [{ required: true, message: '请输入64位颜色值，如#f50' }] }]"
                />
            </a-form-item>
        </a-form>
    </a-modal>
</template>

<script>
    import {API} from "../api";
    import {CreateTag} from "../api/template";

    export default {
        name: "CreateTagDialog",
        props: {
            show: {
                required: true,
                default: false
            }
        },
        data() {
            return {
                tag_info: this.$form.createForm(this)
            }
        },
        methods: {
            closeModal() {
                this.$emit("update:show", false);
            },
            handleTagModel() {
                this.tag_info.validateFields((err,values) => {
                    if(!err) {
                        let data = values;
                        API(CreateTag,{
                            data,
                        }).then(res => {
                            this.$message.success(res.msg)
                            this.$emit("update:show", false);
                            this.$emit("success", true);
                        }).catch(err => {
                            console.log(err)
                            this.$emit("success", false);
                        }).finally(() => {
                            this.tag_model = false
                        })
                    }
                })
            }
        },
        watch:{
            show(val){
                if(!val){
                    this.tag_info.resetFields()
                }
            }
        }
    }
</script>

<style scoped>

</style>
