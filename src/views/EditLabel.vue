<template>
    <Layout>
        <div class="navBar">
            <Icon class="leftIcon" name="left" @click.native="goBack" />
            <span class="title">编辑标签</span> 
        </div>
        <div class="form-wrapper">
            <Notes :value="tag.name" 
                    @update:value="updateTag"
                    field-name="标签名" placeholder="请输入标签名"/>
        </div>
        <div class="button-wrapper">
            <Button @click="remove">删除标签</Button>
        </div>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import Notes from "@/components/Money/Notes.vue";
    import Button from "@/components/Button.vue";

    @Component({
        components: {Notes, Button},
    })
    export default class EditLabel extends Vue{
        get tag(){
            return this.$store.state.currentTag
        }

        created(){
            const id = this.$route.params.id;
            this.$store.commit('fetchTags');
            this.$store.commit('setCurrentTag', id);
            if(!this.tag){ 
                this.$router.replace('/404'); 
            };            
        }

        updateTag(name: string){
            if(this.tag){
                this.$store.commit('updateTag',{id:this.tag.id, name});
            }          
        }

        remove(){
            if(this.tag){            
                this.$store.commit('removeTag',this.tag.id);
            }
        } 
        goBack(){
            this.$router.back();
        }     
    }
</script>

<style lang="scss" scoped>
.navBar{
    text-align: center;
    font-size: 16px;
    padding: 12px 16px;
    background: white;
    position: relative;
    // > .title{

    // }
    > .leftIcon{
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translate(0, -50%);
    }
}
.form-wrapper{
    background: white;
    margin-top: 8px;
}
.button-wrapper{
    text-align: center;
    padding: 16px;
    margin-top: 28px;
}

</style>