<template>
    <div class="border border-3  border-white p-5">
        <div >
            <h1 class="text-white p-3">Gestão de Contactos</h1>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button type="button" class="btn btn-primary border-white" @click="contacts">Contactos</button>
            </div>
        <div class="border border-white d-flex flex-column mt-4 p-4">
            <form @submit.prevent = "editar($event)">
                <div class="d-flex flex-row justify-content-end align-items-end mt-4 gap-4">
                    <div>
                        <button type="button" class="btn btn-primary border-white">Editar</button>
                    </div>
                    <div>
                        <button type="button" class="btn btn-danger border-white" @click = "eliminar">Eliminar</button>
                    </div>
                </div>
                <div class="border border-white d-flex p-4 my-3">
                    <div class="d-flex flex-column align-items-start">
                        <input type="text" class="form-control" placeholder="Nome" ref="nome" v-model="$route.params.nome">
                        <input type="text" class="form-control" placeholder="Telemovel" ref="telemovel" v-model="$route.params.telemovel">
                        <input type="text" class="form-control" placeholder="Email" ref="email" v-model="$route.params.email">
                        <input type="text" class="form-control" placeholder="morada" ref="morada" v-model="$route.params.morada">
                    </div>
                </div>
            </form>    
        </div>
    </div>
</template>

<script>
    import { contactStore } from '../store/contactStore';

    export default {
        setup() {
            const contactStoreU = contactStore()
            return {contactStoreU}
        },

        data(){
            return {
                contact: {}
            };
        },

        methods: {
            editar(){
                this.contact = {
                    id: this.$route.params.id,
                    nome: this.$route.params.nome,
                    telemovel: this.$route.params.telemovel,
                    email: this.$route.params.email,
                    morada: this.$route.params.morada,
                }
                if(this.contact.nome == '' || this.contact.telemovel == '' || this.contact.email == '' || this.contact.morada == ''){
                    alert("fields can't be empty");
                }
                else{
                    this.contactStoreU.update(this.contact)
                    this.$router.push({name: "contactList"});
                }
            },

            eliminar(){
                this.contactStoreU.delete(this.$route.params.id)
                this.$router.push({ name: "contactList" });
            },

            contacts(){
                this.$router.push({name: "contactList"});
            },
        }
    }

</script>

<style scoped>

</style>