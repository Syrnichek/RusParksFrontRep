<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <div class="modal-header">
                        <slot name="header">
                            Имя новости:
                            <my-input v-model="newsTitle" style="width: 200px;"/>
                        </slot>
                    </div>

                    <div class="modal-body">
                        <slot name="body">
                            Картинка:
                            <input type="file"
                                   id="avatar" name="avatar"
                                   accept="image/png, image/jpeg"
                                   multiple
                                   style="width: 200px;"
                                   ref="myFiles"
                            />
                        </slot>
                    </div>

                    <div class="modal-body">
                        <slot name="body">
                            Текст новости:
                            <my-input v-model="newsText" style="width: 200px;"/>
                        </slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">
                            <button @click="newsAdd()" class="modal-default-button">
                                OK
                            </button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import MySelect from "@/components/UI/MySelect.vue";
import MyInput from "@/components/UI/MyInput.vue";
import axios from "axios";

export default {
    name: "AddNewsModal",
    components: {MyInput, MySelect},

    data(){
        return{
            newsTitle: '',
            newsImages: [],
            newsText:null,
            user:null,
            statusCode:null
        }
    },

    methods: {
        newsAdd() {
            this.newsImages = this.$refs.myFiles.files[0]

            let formData = new FormData();

            formData.append('newsTitle', this.newsTitle);
            formData.append('newsImage', this.newsImages);
            formData.append('newsImagePath', this.newsImages.name);
            formData.append('newsText', this.newsText);

            axios.post('http://localhost:44326/api/adminManage/NewsAdd', formData)
                .then(response => response.data)
                .catch(error => {console.log(error);
                });
        }
    },
}
</script>

<style scoped>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
    margin-top: 0;
    color: #42b983;
}

.modal-body {
    margin: 20px 0;
}

.modal-default-button {
    float: right;
}

.modal-enter {
    opacity: 0;
}

.modal-leave-active {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>