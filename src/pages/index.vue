<template>
    <div class="index">
        <div class="container">
            <!-- 轮播图 -->
            <div class="swiper-box">
                <swiper :options="swiperOptions">
                    <swiper-slide v-for="(item, index) in slideList" :key="index">
                        <a :href="'/#/product/'+item.id"><img :src="item.img"></a>
                    </swiper-slide>
                    <!-- Optional controls -->
                    <div class="swiper-pagination"  slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
            <div class="ads-box">
                <a :href="'/#/product/'+item.id" v-for="(item, index) in adsList" :key="index">
                    <img :src="item.img" alt="">
                </a>
            </div>
            <div class="banner">
                <a href="/#/product/30">
                    <img src="/imgs/banner-1.png" alt="">
                </a>
            </div>
            <div class="product-box"></div>
        </div>
        <service-bar></service-bar>
    </div>
</template>


<script>
import ServiceBar from './../components/ServiceBar'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
    name: 'index',
    components: {
        swiper,
        swiperSlide,
        ServiceBar
    },
    data() {
        return {
            swiperOptions: {
                autoPlay: true,
                loop: true,
                effect: 'cube',
                cubeEffect: {
                    shadowOffset: 100,
                    shadowScale: 0.6
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },
            slideList: [
                {
                    id: '42',
                    img: '/imgs/slider/slide-1.jpg'
                },
                {
                    id: '45',
                    img: '/imgs/slider/slide-2.jpg'
                },
                {
                    id: '46',
                    img: '/imgs/slider/slide-3.jpg'
                },
                {
                    id: '',
                    img: '/imgs/slider/slide-4.jpg'
                },
                {
                    id: '',
                    img: '/imgs/slider/slide-5.jpg'
                }
            ],
            adsList: [
                {
                    id: 33,
                    img: '/imgs/ads/ads-1.png'
                },
                {
                    id: 48,
                    img: '/imgs/ads/ads-2.jpg'
                },
                {
                    id: 45,
                    img: '/imgs/ads/ads-3.png'
                },
                {
                    id: 47,
                    img: '/imgs/ads/ads-4.jpg'
                }
            ],
            showModal: false
        }
    }
}
</script>

<style lang="scss">
@import './../assets/scss/mixin.scss';
    .index {
        .swiper-box {
            .swiper-container {
                height: 451px;
                // .swiper-button-prev{
                //     left:274px;
                // }
                // 不做这个了
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .ads-box {
            @include flex();
            margin-top: 14px;
            margin-bottom: 31px;
            a {
                width: 296px;
                height: 167px;
            }
        }
        .banner {
            margin-bottom: 50px;
        }
    }
</style>