<template>
<div class="main">
    <!-- form employee -->
    <transition name="slide">
        <EmployeeDetail 
            v-show="isDisplayedEmployeeDetail"
            @toggleEmployeeDetail="toggleEmployeeDetail"/>
    </transition>
    
    <!-- toolbar -->
    <ToolBar @toggleEmployeeDetail="toggleEmployeeDetail"/>

    <!-- filterbar -->
    <FilterBar />

    <!-- grid -->
    <Grid @toggleEmployeeDetail="toggleEmployeeDetail"/>

    <!-- Pagination -->
    <Paging/>

    <div class="overlay"></div>
</div>
</template>

<script>
import EmployeeDetail from '../views/employee/EmployeeDetail.vue';
import ToolBar from '@/components/views/employee/ToolBar'
// import ToolBar from '../views/employee/ToolBar.vue'
import FilterBar from '../views/employee/FilterBar.vue';
import Grid from '../common/Grid.vue';
import Paging from '../common/Paging.vue';

export default {
    name:'Main',
    components: {
        EmployeeDetail,
        ToolBar,
        FilterBar,
        Grid,
        Paging
    },
    data() {
        return {
            isDisplayedEmployeeDetail: false,
        }
    },
    methods: {
        toggleEmployeeDetail(item = null) {
            this.isDisplayedEmployeeDetail = !this.isDisplayedEmployeeDetail;
        }
    }
}
</script>

<style scoped>
    /* transition */
    .slide-leave-active, .slide-enter-active {
        transition: all .3s ease;
    }

    .slide-enter, .slide-leave-to {
        transform: translateY(-50%);
        opacity: 0;
    }
    @import url("../../assets/css/common/main.css");
</style>