<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <div class="modal-header">
                        <slot name="header">
                            Имя парка:
                            <my-input v-model="parkName" style="width: 200px;"/>
                        </slot>
                    </div>

                    <div class="modal-body">
                        <slot name="body">
                            Город парка:
                            <my-select @onChangeParkCity="parkCity=$event"/>
                        </slot>
                    </div>

                    <div class="modal-body">
                        <slot name="body">
                            Метро:
                            <my-input v-model="parkMetro" style="width: 200px;"/>
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
                                   @change="logger()"
                            />
                        </slot>
                    </div>

                    <div class="modal-body">
                        <slot name="body">
                            Основной текст:
                            <my-input v-model="mainText" style="width: 200px;"/>
                        </slot>
                    </div>

                    <div class="modal-body">
                        <slot name="body">
                            Информационный текст:
                            <my-input v-model="enterInfoText" style="width: 200px;"/>
                        </slot>
                    </div>

                    <div class="modal-body">
                        <slot name="body">
                            Выберите фильтры:
                            <div>
                                <label> Для детей </label>
                                <input type="checkbox" name="type" value="1"/>
                                <label> Фотоместо </label>
                                <input type="checkbox" name="type" value="2" />
                                <label> Животные </label>
                                <input type="checkbox" name="type" value="3" />
                                <label> Фудкорт </label>
                                <input type="checkbox" name="type" value="4" />
                                <label> Мангал </label>
                                <input type="checkbox" name="type" value="5" />
                                <label> Отдых </label>
                                <input type="checkbox" name="type" value="6" />
                            </div>
                        </slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">
                            <button @click="parkAdd()" class="modal-default-button">
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
import MyInput from "@/components/UI/MyInput.vue";
import MySelect from "@/components/UI/MySelect.vue";
import axios from "axios";

function checkBoxValue() {
        let array = []
        let checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

        for (let i = 0; i < checkboxes.length; i++) {
            array.push(checkboxes[i].value)
        }
        return array
}

export default {
    name: "AddParkModal",

    components: {MySelect, MyInput},

    data(){
        return{
            parkName: '',
            parkCity: null,
            parkMetro: null,
            parkImages: [],
            mainText:null,
            enterInfoText:null,
            typeId: [],
            email: '',
            user:null,
            statusCode:null
        }
    },
    methods: {
        logger() {
            this.parkImages = this.$refs.myFiles.files[0]
            console.log(this.parkImages)
        },

        parkAdd() {
            let formData = new FormData();
            formData.append('parkName', this.parkName);
            formData.append('parkCity', this.parkCity);
            formData.append('parkMetro', this.parkMetro);
            formData.append('parkImages', this.parkImages);
            formData.append('mainText', this.mainText);
            formData.append('enterInfoText', this.enterInfoText);
            let checkbox = checkBoxValue()
            formData.append('typeId', checkbox);

            console.log(this.parkCity)
            console.log(checkbox)

            axios.post('http://localhost:44326/api/adminManage/ParkAdd',formData)
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