<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'Dropdown',
    props: {
        options: {
            type: Array as () => { name: string, path: string }[],
            required: true,
        },
        placeholder: {
            type: String,
            default: 'Выбирай'
        },
    },
    setup(props) {
        const isOpen = ref(false);

        const toggleDropdown = () => {
            isOpen.value = !isOpen.value;
        };

        const handleLinkClick = (option: {name: string, path: string}) => {
            isOpen.value = false;
        }

        return {
            isOpen,
            toggleDropdown,
            handleLinkClick,
        };
    },
})
</script>

<template>
    <div class="dropdown__component" @click="toggleDropdown">
        <button class="dropdowm-button">{{ placeholder }}</button>
        <div class="dropdown-menu" v-if="isOpen">
            <ul>
                <li class="dropdown-item" v-for="(option, menuOptions) in options" :key="menuOptions">
                    <router-link :to="option.path" @click.stop="handleLinkClick(option)">
                        {{ option.name }}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use './ui/HeaderMenu.scss'
</style>