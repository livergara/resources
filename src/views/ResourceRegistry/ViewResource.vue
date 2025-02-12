<script lang="ts">
import ResourceService from '@/services/ResourceService';
export default {
    data() {
        return {
            resource: {}
        }
    },
    methods: {
        // @ts-ignore
        navigateTo(route) {
            this.$router.push(route)
        }
    },
    async mounted() {
        const resourceId = this.$route.params.resourceId
        this.resource = (await ResourceService.show(resourceId)).data
    },
}
</script>

<template>
    <div class="resource-registry__page">
        <main>
            <div class="page-main__component page-main__card-component">
                <!-- @vue-ignore -->
                <!-- @vue-skip -->
                <h1>{{ resource.userFio }}</h1>
                <div class="resource-registry__card">
                    <div class="row">
                        <div class="input-block">
                            <h2>Аккаунт</h2>
                            <!-- @vue-ignore -->
                            <!-- @vue-skip -->
                            <p>{{ resource.userLogin }}</p>
                        </div>
                        <div class="input-block">
                            <h2>ФИО</h2>
                            <!-- @vue-ignore -->
                            <!-- @vue-skip -->
                            <p>{{ resource.userFio }}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-block">
                            <h2>Должность</h2>
                            <!-- @vue-ignore -->
                            <!-- @vue-skip -->
                            <p>{{ resource.userPost }}</p>
                        </div>
                        <div class="input-block">
                            <h2>Уровень</h2>
                            <!-- @vue-ignore -->
                            <!-- @vue-skip -->
                            <p>{{ resource.grade }}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-block">
                            <h2>Ставка</h2>
                            <!-- @vue-ignore -->
                            <!-- @vue-skip -->
                            <p>{{ resource.rate }}</p>
                        </div>
                        <div class="input-block">
                            <h2>Роль</h2>
                            <!-- @vue-ignore -->
                            <!-- @vue-skip -->
                            <p>{{ resource.role }}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-block">
                            <h2>Компетенции</h2>
                            <!-- @vue-ignore -->
                            <!-- @vue-skip -->
                            <p>{{ resource.competence }}</p>
                        </div>
                        <div class="input-block">
                            <h2>Процент загрузки</h2>
                            <!-- @vue-ignore -->
                            <!-- @vue-skip -->
                            <p>{{ resource.busyProcent }}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-block">
                            <h2>Статус ресурса</h2>
                            <!-- @vue-ignore -->
                            <!-- @vue-skip -->
                            <p>{{ resource.status }}</p>
                        </div>
                        <div class="input-block">
                            <h2>Отсутствует до</h2>
                            <!-- @vue-ignore -->
                            <!-- @vue-skip -->
                            <p>{{ resource.dateAbsence }}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-block">
                            <h2>Процент загруженности</h2>
                            <!-- @vue-ignore -->
                            <!-- @vue-skip -->
                            <p>{{ resource.busynessPercent }}</p>
                        </div>
                        <div class="input-block">
                            <h2>Владелец ресурса</h2>
                            <!-- @vue-ignore -->
                            <!-- @vue-skip -->
                            <p>{{ resource.resourceOwner }}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-block-100">
                            <h2>Комментарий</h2>
                            <!-- @vue-ignore -->
                            <!-- @vue-skip -->
                            <p>{{ resource.comment }}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-block-100">
                            <h2>Проекты</h2>
                            <!-- @vue-ignore -->
                            <!-- @vue-skip -->
                            <p>{{ resource.project }}</p>
                        </div>
                    </div>
                    <div class="button-block">
                        <div class="row">
                            <router-link :to="{ name: 'resource-registry' }">
                                <button class="button-cancel">Назад</button>
                            </router-link>
                            <button class="button-default" @click="navigateTo({
                                name: 'resource-edit',
                                params: {
                                    // @ts-ignore
                                    resourceId: resource.id
                                }
                            })">
                                Редактировать
                            </button>
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