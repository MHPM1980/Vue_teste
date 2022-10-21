<template>
    <div class="border border-3  border-white p-5">
        <div >
            <h1 class="text-white p-3">Gestão de contactos</h1>
        </div>
        <div class="border border-white d-flex flex-column mt-4 p-4">  
            <form @submit.prevent = "onSubmitHandler($event)">
                <div class="d-flex flex-column gap-4 pb-2 justify-content-start">
                    <input type="text" class="form-control" placeholder="Nome" ref="nome" v-model="addContact.nome">
                    <input type="text" class="form-control" placeholder="Telemovel" ref="telemovel" v-model="addContact.telemovel">
                    <input type="text" class="form-control" placeholder="Email" ref="email" v-model="addContact.email">
                    <input type="text" class="form-control" placeholder="Morada" ref="morada" v-model="addContact.morada">
                </div>
                <div class=" d-flex flex-row justify-content-end gap-4 mt-2">
                    <button type="reset" class="border border-white bg-danger" @click="cancelar">Cancelar</button>
                    <button type="submit" class="border border-white bg-primary">Guardar</button>
                </div>
            </form>
        </div>          
    </div>
</template>

<script>
    import addContact from '../models/addContact';
    import { contactStore } from '../store/contactStore';
    import { mapState } from 'pinia';


    export default {
        setup() {
            const contactStoreU = contactStore()
            return {contactStoreU}
        },

        data(){
            return {
                addContact: new addContact(),
            };
        },

        computed: {
            getContacts() {
                return this.contactStoreU.getContacts;
            }
        },

        methods: {
            onSubmitHandler(e) {
                if(this.addContact.id){
                    this.contactStoreU.update(this.addContact)
                }
                else{
                    if(this.addContact.nome == '' || this.addContact.telemovel == '' || this.addContact.email == '' || this.addContact.morada == ''){
                        alert("Empty fields");
                    }
                    else{
                        this.contactStoreU.add(this.addContact)
                        this.$router.push({name: "contactList"});
                    }
                }
            },

            cancelar(){
                this.$router.push({name: "contactList"});
            }
        }
    }
</script>

<style scoped>

</style>