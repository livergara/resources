<script lang="ts">
import { defineComponent, ref } from 'vue';
import Dropdown from './Dropdown/Dropdown.vue';

export default defineComponent({
    name: 'HeaderMenu',
    components: {
        Dropdown
    },
    data: () => ({
        menuLinks: [
            {
                name: 'Календарь',
                path: '/calendar-resource-plan'
            },
            {
                name: 'Журнал заявок',
                path: '/applications'
            },
            {
                name: 'Отчеты',
                path: '/reports'
            },
            {
                name: 'Дашборд',
                path: '/dashbord'
            }
        ]
    }),
    setup() {
        const options = ref([
            {
                name: 'Реестр ресурсов',
                path: '/resource-registry'
            },
            {
                name: 'Реестр проектов',
                path: '/projects-registry'
            }
        ]);

        const selectedValue = ref('');

        return {
            options,
            selectedValue,
        }
    }
})
</script>

<template>
    <div class="header-menu__component">
        <ul>
            <li>
                <Dropdown
                :options="options"
                v-model="selectedValue"
                placeholder="Реестры"
                />
            </li>
            <li v-for="menuLink in menuLinks">
                <router-link :to="menuLink.path">
                    {{ menuLink.name }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
ul {

    align-items: center;
    display: flex;
    gap: 30px;
    margin: 0px;
    padding-inline-start: 0px;

    li {
        font-size: 16px;
        list-style: none;

        a {
            color: black;
            padding: 17px 24px;
            text-decoration: none;

            &:hover {
                background-color: black;
                border-radius: 50px;
                color: white;
            }
        }

    }
}

</style>