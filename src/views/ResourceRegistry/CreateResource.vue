<script lang="ts">
import { defineComponent } from 'vue';
import ResourceService from '@/services/ResourceService';
export default defineComponent(
    {
        name: 'CreateResource',
        data() {
            return {
                resource: {
                    userLogin: null,
                    userFio: null,
                    userPost: null,
                    grade: null,
                    rate: null,
                    role: null,
                    competence: null,
                    busyProcent: null,
                    status: null,
                    dateAbsence: null,
                    busynessPercent: null,
                    resourceOwner: null,
                    comment: null
                },
                error: null,
                // @ts-ignore
                required: (value) => !!value || 'Required.'
            }
        },
        methods: {
            async create() {
                this.error = null
                // @ts-ignore
                const areAllFieldsFilledIn = Object.keys(this.resource).every(key => !!this.resource[key])
                if (!areAllFieldsFilledIn) {
                    // @ts-ignore
                    this.error = 'Пожалуйста, заполните все поля'
                    return
                }
                try {
                    await ResourceService.post(this.resource)
                    this.$router.push({
                        name: 'resource-registry'
                    })
                } catch (err) {
                    console.log(err)
                }
            }
        }
    }
)

</script>

<template>
    <div class="resource-registry__page">
        <main>
            <div class="page-main__component page-main__card-component">
                <h1>Создание карточки ресурса</h1>
                <div class="resource-registry__card">
                    <div class="row">
                        <div class="input-block">
                            <label for="userLogin">Аккаунт</label>
                            <input id="userLogin" required :rules="[required]"
                                v-model="resource.userLogin" autocomplete="off"/>
                        </div>
                        <div class="input-block">
                            <label for="userFio">ФИО</label>
                            <input id="userFio" required :rules="[required]" v-model="resource.userFio" autocomplete="off" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-block">
                            <label for="userPost">Должность</label>
                            <input id="userPost" required :rules="[required]" v-model="resource.userPost" autocomplete="off"/>
                        </div>
                        <div class="input-block">
                            <label for="grade">Уровень</label>
                            <input id="grade" required :rules="[required]" v-model="resource.grade" autocomplete="off"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-block">
                            <label for="rate">Ставка</label>
                            <input id="rate" required :rules="[required]" v-model="resource.rate" autocomplete="off"/>
                        </div>
                        <div class="input-block">
                            <label for="role">Роль</label>
                            <input id="role" required :rules="[required]" v-model="resource.role" autocomplete="off"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-block">
                            <label for="competence">Компетенции</label>
                            <input id="competence" required :rules="[required]" v-model="resource.competence" autocomplete="off"/>
                        </div>
                        <div class="input-block">
                            <label for="busyProcent">Процент загрузки</label>
                            <input id="busyProcent" required :rules="[required]" v-model="resource.busyProcent" autocomplete="off"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-block">
                            <label for="status">Статус ресурса</label>
                            <input id="status" required :rules="[required]" v-model="resource.status" autocomplete="off"/>
                        </div>
                        <div class="input-block">
                            <label for="dateAbsence">Отсутствует до</label>
                            <input id="dateAbsence" required :rules="[required]" v-model="resource.dateAbsence" autocomplete="off"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-block">
                            <label for="busynessPercent">Процент загруженности</label>
                            <input id="busynessPercent" required :rules="[required]" v-model="resource.busynessPercent" autocomplete="off"/>
                        </div>
                        <div class="input-block">
                            <label for="resourceOwner">Владелец ресурса</label>
                            <input id="resourceOwner" required :rules="[required]" v-model="resource.resourceOwner" autocomplete="off"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-block-100">
                            <label for="comment">Комментарий</label>
                            <input id="comment" required :rules="[required]" v-model="resource.comment" autocomplete="off"/>
                        </div>
                    </div>
                    <div class="button-block">
                        <div class="row">
                            <p class="error" v-if="error" style="color: #fff;">{{ error }}</p>
                            <router-link :to="{ name: 'resource-registry' }">
                                <button class="button-cancel">Отменить</button>
                            </router-link>
                            <button class="button-default" @click="create">Создать</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<style lang="scss" scoped>

h1{
        margin-bottom: 20px;
    }

.resource-registry__card {
    width: 70%;

    .row {
        gap: 30px;
        margin-bottom: 2rem;
        display: flex;
    }


    .input-block-100 {
        width: 100%;
    }

    .input-block {
        width: 50%;
    }

    .button-block {
        margin-top: 2rem;

        .row {
            align-items: center;
            justify-content: flex-end;
        }
    }
}
</style>