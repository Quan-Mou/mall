<template>
    <div class="main">
        <div v-for="(item, index) in useInfo" :key="index" class="use-info">
            <span class="img"><img :src="item.img" alt=""/></span>
            <div class="text">{{ item.text }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        useInfo: {
            type: Array
        }
    }
};
</script>

<style scoped>
.main {
    margin-top: 12px;
    color: #333333;
}
.use-info {
    height: 45px;
    background-color: #fff;
    display: flex;
    line-height: 45px;
}
.img {
    margin-left: 16px;
}
.img img {
    width: 18px;
    vertical-align: middle;
    height: 18px;
}
.text {
    margin-left: 5px;
    border-bottom: 1px solid #f2f2f2;
    flex: 1;
    padding-left: 4px;
}
</style>
