<template>
    <div class="border border-3  border-white p-5">
        <div >
            <h1 class="text-white p-3">Gestão de Contactos</h1>
        </div>
        <div class="d-flex flex-row justify-content-between mt-4 align-items-end gap-4">  
            <div class="text-white">
                <p>Tarefas ({{this.selected}}/{{getCounter}})</p>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                
                <button type="button" class="btn btn-primary border-white" @click="adicionar">Adicionar</button>
            </div>
        </div>
        <div class="border border-3 mt-4 border-white p-3">
            
                <div class="d-flex flex-row border border-2 border-white p-4 gap-2" v-for="(item,i) in getTodos">
                    <div>
                        <input class="form-check-input" type="radio" @click="selectTodo(i)" name="flexRadioDefault" id="flexRadioDefault1">    
                    </div>
                    <div>
                        <p class="text-white">{{item.description}}</p>
                    </div>
                    <div>
                        <button class="btn btn-primary border border-white " @click="todoDetail(item)">Detalhe</button>
                    </div>
                </div>
        </div>                
    </div>
</template>

<script>
    import { mapState } from 'pinia';
    import { contactStore } from '../store/contactStore';


    export default {
        setup() {
            const contactStoreU = contactStore()
            return {contactStoreU}
        },

        data(){


        },

        computed: {
            ...mapState(contactStore,['getContacts'])
        },

        methods: {
            adicionar() {
                this.$router.push({name: "contactEdit"});
            },

            contactDetail(item){
                this.$router.push({name: "contactDetail", params: {id:item.id, nome:item.nome, telemovel: item.telemovel, email:item.email, morada:item.morada}});
            },

            contacts(){
                this.$router.push({name: "contactList"});
            },

        }
    }
</script>

<style scoped>

#grid{
    display: grid;
    grid-template-columns: auto auto;
}



</style>