<template> 
    <Layout class-prefix="layout"> 
        <NumberPad :value.sync="record.amount" @submit="saveRecord" /> 
        <Tabs :dataSource="recordTypeList" :value.sync="record.type" />
        <div class="noteswrapper">
            <Notes field-name="备注" 
                placeholder="在这里输入备注"
                @update:value="onUpdateNotes" />
        </div>       
        <Tags /> 
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue'
    import NumberPad from '@/components/Money/NumberPad.vue';
    import Notes from '@/components/Money/Notes.vue';
    import Tags from '@/components/Money/Tags.vue';
    import {Component} from 'vue-property-decorator';
    import Tabs from '@/components/Tabs.vue';
    import recordTypeList from '@/constants/recordTypeList';
    

    // const version = window.localStorage.getItem('version') || '0';
    // if(version === '0.0.1'){
    //     // 数据库升级，数据迁移
    //     recordList.forEach(record =>{
    //         record.createAt = new Date(2020, 0, 1)
    //     })
    //     // 保存数据
    //     window.localStorage.setItem('recordList', JSON.stringify(recordList))
    // }
    // window.localStorage.setItem('version', '0.0.2')


    @Component({
        components: {Tabs,Tags, Notes, NumberPad},
    })
    export default class Money extends Vue{
        get recordList(){
            return this.$store.state.recordList;
        }
        recordTypeList = recordTypeList;
        record: RecordItem = {
            tags:[], notes: '', type: '-', amount: 0
        };
        created(){
            this.$store.commit('fetchRecords')
        }
        onUpdateNotes(value: string){
            this.record.notes = value           
        };   
        saveRecord(){
            this.$store.commit('createRecord',(this.record))         
        };
    }
</script>

<style lang="scss">
.layout-content{
    display: flex;
    flex-direction: column-reverse;
}
.noteswrapper{
    padding: 12px 0;
}
</style>
<style lang="scss" scoped>

</style>