<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'Dropdown',
    props: {
        options: {
            type: Array as () => { name: string, path: string }[],
            required: true,
        },
        modelValue: {
            type: String,
            default: '',
        },
        placeholder: {
            type: String,
            default: 'Выбирай'
        },
    },
    setup(props, { emit }) {
        const isOpen = ref(false);
        const selectedOption = ref(props.modelValue);

        const toggleDropdown = () => {
            isOpen.value = !isOpen.value;
        };

        const selectOption = (option: string) => {
            selectedOption.value = option;
            emit('update:modelValue', option);
        };

        const handleLinkClick = (option: string) => {
            selectOption(option);
            isOpen.value = false;
        }

        return {
            isOpen,
            selectedOption,
            toggleDropdown,
            handleLinkClick,
        };
    },
})
</script>

<template>
    <div class="dropdown__component" @click="toggleDropdown">
        <button class="dropdowm-button">{{ selectedOption || placeholder }}</button>
        <div class="dropdown-menu" v-if="isOpen">
            <ul>
                <li class="dropdown-item" v-for="(option, menuOptions) in options" :key="menuOptions">
                    <router-link :to="option.path" @click.native="handleLinkClick(option.name)">
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